import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { XIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import * as Progress from 'react-native-progress'
import MapView, { Marker } from "react-native-maps";

export function DeliveryScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant)



  return (

    <SafeAreaView className="bg-[#00ccbb] flex-1">
      <View className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">
            Order Help
          </Text>

        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-xl">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Extimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>

            <Image
              source={{ uri: "http://links.papareact.com/fls" }}
              className="h-20 w-20"
            />
          </View>

          <Progress.Bar size={30} color="#00ccbb" indeterminate={true} />

          <Text className="mt-3 text-gray-500">
            Your order ar {restaurant.title} is being preperad
          </Text>
        </View>
      </View>


      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005

        }}
        className="flex-1 -mt-10 z-0"
        mapType="mustedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00ccbb"
        >

        </Marker>
      </MapView>


      <View className="bg-white flex-row items-center space-x-5 h-24">


          <Image
            source={{
              uri: "http://links.papareact.com/wru"
            }}
            className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
          />
          <View className="flex-1">

            <Text className="text-lg">Sonny Sangha</Text>
            <Text className="text-gray-400"> Your Ride</Text>
          </View>
          <Text className="text-[#00ccbb] text-lg mr-5 font-bold ">Call</Text>

      </View>

    </SafeAreaView>
  )

}