import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from "@react-navigation/native-stack"
import { SafeAreaProvider } from 'react-native-safe-area-context';


//  Screens
import { HomeScreen } from './screens/HomeScreen'
import { RestaurantScreen } from './screens/RestaurantScreen'
import { BasketScreen } from './screens/BasketScreen'
import { PreperingOrderScreen } from './screens/PreperingOrderScreen'
import { DeliveryScreen} from './screens/DeliveryScreen'

import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store';

const Stack = createNativeStackNavigator();

export default function App() {


  return (

    <NavigationContainer>
      <ReduxProvider store={store}>

        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Basket" component={BasketScreen} options={{
              presentation: 'modal',
              headerShown: false,
            }} />
            <Stack.Screen name="PreperingOrderScreen" component={PreperingOrderScreen} options={{ presentation: "fullScreenModal",headerShown: false }} />
            <Stack.Screen name="Delivery" component={DeliveryScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </TailwindProvider>

      </ReduxProvider>

    </NavigationContainer>

  );
}

