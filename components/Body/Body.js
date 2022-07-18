import { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import sanityClient from '../../sanity';

import { Categories } from './Categories'
import { FeaturedRow } from './FeaturedRow'

export function Body() {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    sanityClient.fetch(`
      *[_type == "featured"]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->
        }
      }
    `).then((data) => {
      setFeaturedCategories(data)
    })


  }, [])


  return (
    <ScrollView
      className="bg-gray-100"
      contentContainerStyle={{
        paddingBottom: 100
      }}
    >
      <Categories />

      {/* Featured Rows */}
      {featuredCategories.map((category) => {
        return (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}

          />
        )
      })}




    </ScrollView>
  )
}