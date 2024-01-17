import { useState } from "react";
import { ScrollView, StyleSheet, Text, Dimensions, View } from "react-native";
import categoriesGetir from "../../../assets/categoriesGetir";
import { Category } from "../../models";
const { height, width } = Dimensions.get("window");

const CategoryBox = ({
  item,
  active,
}: {
  item: Category;
  active: Category;
}) => {
  return (
    <View
      style={[
        { paddingHorizontal: 10, flexDirection: "row", alignItems: "center" },
        item.name === active.name && {
          borderBottomColor: "#ffd00c",
          borderBottomWidth: 2.5,
        },
      ]}
    >
      <Text style={{ color: "white", fontWeight: "500", fontSize: 15 }}>
        {item.name}
      </Text>
    </View>
  );
};

export default function index({ category }: { category: Category }) {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  return (
    <ScrollView
      style={{
        width: "100%",
        backgroundColor: "#7849f7",
        height: height * 0.065,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces
    >
      {categories.map((item) => (
        <CategoryBox key={item.id} item={item} active={category} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
