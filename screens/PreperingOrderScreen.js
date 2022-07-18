import { Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import * as Animate from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export function PreperingOrderScreen() {

  const navigation =useNavigation();

  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate("Delivery")

    },3000)

  }, [])
  return (

    <SafeAreaView
      className="bg-[#00ccbb] flex-1 justify-center items-center"
    >
      <Animate.Image
        source={require("../assets/orderLoading.gif")}
        animation="slideInUp"
        interactionCount={1}
        className="h-96 w-96 bg-red-400"

      />

      <Animate.Text
        animation="slideInUp"
        interactionCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
      Waiting for restaurant to accept yout order!
      </Animate.Text>
      <Animate.View
         animation="slideInUp"
      >

        <Progress.Circle size={60} indeterminate={true} color="white" />
      </Animate.View>
    </SafeAreaView>
  )

}