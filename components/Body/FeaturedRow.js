
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import sanityClient from '../../sanity'

import { RestaurantCard } from './RestaurantCard'

import sushiImg from '../../assets/sushi-place.jpg'
import { useEffect, useState } from "react";


export function FeaturedRow({ id, title, description }) {

  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    sanityClient.fetch(`
      *[_type == "featured" && _id == $id]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{
            name
          }
        }
      }[0]
    `, { id: id }).then(data => {
      setRestaurants(data?.restaurants)
    })


  }, [])



  return (

    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title} </Text>
        <ArrowRightIcon color="#00ccbb"></ArrowRightIcon>
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >

        {restaurants?.map(restaurant => {
          return (
            <RestaurantCard
              key={restaurant._id}
              id={restaurant._id}
              imgURL={restaurant.image}
              title={restaurant.name}
              rating={restaurant.rating}
              genre={restaurant.type?.name}
              address={restaurant.address}
              short_description={restaurant.short_description}
              dishes={restaurant.dishes}
              long={restaurant.long}
              lat={restaurant.lat}
            />


          )
        })}

      </ScrollView>
    </View>
  )


}