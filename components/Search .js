import { Text, TextInput, View } from 'react-native'
import { SearchIcon, AdjustmentsIcon } from "react-native-heroicons/outline";
export function Search() {

  return (
    <View className="flex-row items-center space-x-2 pb-2 mx-4">
      <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
        <SearchIcon color="gray" size={20} />
        <TextInput
          placeholder='Restaurants and cuisines'
          keyboardType="default"
        />
      </View>

      <AdjustmentsIcon size={35} color="#00ccbb" />
    </View>
  )

}