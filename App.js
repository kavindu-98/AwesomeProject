import React from 'react';
import { Dashboard, Place } from "./screens";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabs from "./navigation/tabs";

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Dashboard'}
      >
        <Stack.Screen
          name="Dashboard"
          component={Tabs}
        />

        {/* <Stack.Screen
          name="Place"
          component={Place}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;