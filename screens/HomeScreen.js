import { View, Text, Image } from "react-native";

import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from "@react-navigation/native"
import { useLayoutEffect } from "react";
import { Header } from "../components/Header";
import { Search } from "../components/Search ";
import { Body } from '../components/Body/Body'




export function HomeScreen() {
  /* da pra configurar na rota
    const navigation = useNavigation();

    useLayoutEffect(()=>{
      navigation.setOptions({
        headerShown: false;
      })

    }, []);
  */
  return (
    <SafeAreaView className="bg-white pt-5">
      <Header />

      <Search />

      <Body />
    </SafeAreaView>

  )

}