import { StyleSheet, Text, Image } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CategoryFilterScrenn from "../screens/CategoryFilterScreen";

const Stack = createNativeStackNavigator();
export default function HomeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerTitle: () => (
            <Image
              source={require("../../assets/getirlogo.png")}
              style={{ width: 70, height: 30 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScrenn}
        options={{
          headerTintColor: "white",
          headerShown: true,
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerBackTitleVisible: false,
          headerTitle: () => (
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>Ürünler</Text>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
