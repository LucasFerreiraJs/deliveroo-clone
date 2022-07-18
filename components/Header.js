import { View, Text, Image } from "react-native";
import { ChevronDownIcon, UserIcon, SearchIcon, AdjustmentsIcon } from "react-native-heroicons/outline";
import deliverooLogo from '../assets/deliveroo-logo.png'

export function Header() {

  return (

    <View className="flex-row pb-3 items-center mx-4 space-x-2">

      <Image
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        source={deliverooLogo} />

      <View className="flex-1">
        <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
        <Text className="font-bold text-xl">Current Location  <ChevronDownIcon size={20} color="#00ccbb" /></Text>
      </View>

      <UserIcon size={35} color="#00ccbb" />
    </View>
  )

}