/**
 * React Native App
 * Shahana Ahmad
 *
 * @format
 * @flow Meal App
 */
// new app
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./Screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./Screens/MealsOverviewScreen";
import MealsDetailScreen from "./Screens/MealsDetailScreen";
import FavouritesContextProvider from "./stores/context/favourite-context";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <FavouritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name={"CategoryScreen"}
            component={CategoryScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverviewScreen"
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name="MealsDetailScreen"
            component={MealsDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavouritesContextProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
