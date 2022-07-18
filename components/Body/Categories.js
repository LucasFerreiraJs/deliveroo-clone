import { View, Text, ScrollView } from "react-native";
import { CategoryCard } from './CategoryCard'
import deliverooLogo from '../../assets/deliveroo-logo.png'
import sushiImg from '../../assets/sushi-place.jpg'
import sanityClient, { urlFor } from '../../sanity'
import { useEffect, useState } from "react";

export function Categories() {
  const [categories, setCategories] = useState();


  useEffect(() => {
    sanityClient.fetch(`
      *[_type =="category"]
    `).then((data) => {
      setCategories(data)
    })
  }, [])


  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories?.map((category) => {


        return (
          <CategoryCard
            key={category._id}
            imgURL={urlFor(category.image).width(200).url()}
            title={category.name}
          />
        )
      })}

    </ScrollView>
  )

}