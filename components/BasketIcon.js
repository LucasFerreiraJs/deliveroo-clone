import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { selectBasketItems, selectBasketItemsTotalPrice } from "../features/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import Currency from 'react-currency-formatter'

export function BasketIcon() {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketItemsTotalPrice);


  if (items.length == 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate('Basket')}
        className="mx-5 bg-[#00ccbb] p-5 rounded-lg flex-row items-center space-x-1">
      <Text className="text-white font-extrabold text-lg bg-[#01a296] py-1 px-2">{items.length}</Text>
      <Text className="flex-1 text-white font-extrabold text-lg text-center">View Basket</Text>

      <Text className="text-lg text-white font-extrabold">
        <Currency quantity={basketTotal} currency="BRL" />
      </Text>
    </TouchableOpacity>

    </View >
  )

}


