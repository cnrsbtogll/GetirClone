import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";
import { Category } from "../../models";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";

type categoryItemProps = {
  item: Category;
};
const index = ({ item }: categoryItemProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CategoryDetails", { category: item })}
      style={{
        width: width * 0.25,
        height: height * 0.15,
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Image
        style={{ width: width * 0.18, height: height * 0.08, borderRadius: 10 }}
        source={{
          uri: item.src,
        }}
        resizeMode="stretch"
      />
      <Text style={{ color: "#616161", fontWeight: "500" }}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default index;
