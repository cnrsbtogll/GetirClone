import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

const TypeBox = ({ item, active, setType }: { item: string; active: string, setType: any }) => {
  return (
    <TouchableOpacity
      style={[{
        paddingHorizontal: 10,
        marginHorizontal:5,
        height: height * 0.045,
        borderRadius: 10,
        alignSelf:'center',
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
      } , item === active ? {
        backgroundColor: "#5c3EBc"
      }: {borderColor: "lightgray", borderWidth: 0.5}]}
      onPress={() => setType(item)}
    >
      <Text style={{ color:item===active ? "#f5f5f5" : "#5D3EBD", fontWeight: "500", fontSize: 12 }}>
        {item}
      </Text>
    </TouchableOpacity>
  );
}; 
export default function index() {
  const [type, setType] = useState<string>("Birlikte iyi gider");
  return (
    <ScrollView
      style={{
        width: "100%",
        backgroundColor: "#f5f5f5",
        height: height * 0.07,
        paddingHorizontal:10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces
    >
      {["Birlikte iyi gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map(
        (item) => (
          <TypeBox key={item} item={item} active={type} setType={setType}/>
        )
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
