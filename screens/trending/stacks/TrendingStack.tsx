import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Trending from "../Trending";
import Details from "../Details";

const TrendingStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Trending"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Trending" component={Trending} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default TrendingStack;
