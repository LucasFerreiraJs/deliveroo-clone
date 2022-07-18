import { useNavigation } from "@react-navigation/native";
import { useEffect, useMemo, useState } from "react";
import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { XCircleIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { selectBasketItems, removeFromBasket, selectBasketItemsTotalPrice } from "../features/basketSlice";
import { selectRestaurant } from "../features/restaurantSlice";
import logoImage from '../assets/deliveroo-logo.png'
import Currency from 'react-currency-formatter'
import { urlFor } from "../sanity";

export function BasketScreen() {

  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const basketTotal = useSelector(selectBasketItemsTotalPrice)

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;

    }, {})

    setGroupedItemsInBasket(groupedItems)

  }, [items])


  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View class="flex-1 bg-gray-100">
        <View className="p-5 border-b border=[#00ccbb] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity
            className="rounded-full bg-gray-100 absolute top-4 right-5"
            onPress={navigation.goBack}
          >
            <XCircleIcon color="#00ccbb" height={50} width={50} />

          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={logoImage}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00ccbb]">Change</Text>
          </TouchableOpacity>


        </View>

        <ScrollView style={{ height: 343 }} className="flex-1 divide-y divide-gray-200"
          showsVerticalScrollIndicator={true}
        >
          {Object.entries(groupedItemsInBasket).map(([key, items]) => {
            return (
              <View
                key={key}
                className="flex-row items-center space-x-3 bg-white py-2 px-5"
              >
                <Text className="text-[#00ccbb]">{items.length} x</Text>
                <Image
                  source={{ uri: urlFor(items[0]?.image).url() }}
                  className="h-12 w-12 rounded-full"
                />

                <Text className="flex-1"> {items[0]?.name}</Text>

                <Text className="text-gray-500">
                  <Currency quantity={items[0]?.price} currency="BRL" />
                </Text>

                <TouchableOpacity>
                  <Text
                    className="text-[#00ccbb] text-xs"
                    onPress={() => dispatch(removeFromBasket({ id: key }))}
                  >
                    Remove
                  </Text>

                </TouchableOpacity>
              </View>

            )
          })}
        </ScrollView>




      </View>


      <View className=" absolute bottom-0 p-5 w-full bg-white space-y-4">
        <View className="flex-row justify-between">
          <Text className="text-gray-400">Subtotal</Text>
          <Text className="text-gray-400">
            <Currency quantity={basketTotal} currency="BRL" />
          </Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-gray-400">Delivery Fee</Text>
          <Text className="text-gray-400">
            <Currency quantity={5.99} currency="BRL" />
          </Text>
        </View>

        <View className="flex-row justify-between">
          <Text >Order Total</Text>
          <Text className="extra-bold">
            <Currency quantity={basketTotal + 5.99} currency="BRL" />
          </Text>
        </View>


        <TouchableOpacity
          onPress={() => navigation.navigate('PreperingOrderScreen')}
          className="rounded-lg bg-[#00ccbb] p-4">

          <Text className="text-center text-white text-lg font-bold"> Place Order</Text>
        </TouchableOpacity>

      </View>


    </SafeAreaView>
  )

}