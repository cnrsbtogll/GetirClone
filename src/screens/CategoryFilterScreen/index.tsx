import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CategoryFiltering from "../../components/CategoryFiltering";
import TypeFiltereing from "../../components/TypeFiltering";
import { Category } from "../../models";
import ProductItem from "../../components/ProductItem";

export default function index(props) {
  const [category, setCategory] = useState<Category>(
    props.route.params.category
  );
  return (
    <ScrollView>
      <CategoryFiltering category={category} />
      <TypeFiltereing />
      <ProductItem/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
