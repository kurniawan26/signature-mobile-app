import { View, Text, ScrollView, Animated, Pressable } from "react-native";
import React, { useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import ProductCard from "../Global/ProductCard";

export default function LatestProduct({ allProduct }) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: 30,
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            color: "#3B97CB",
            fontFamily: "Roboto-Bold",
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          Latest Product
        </Text>
        <Pressable onPress={() => navigation.navigate("AllProduct")}>
          <Text
            style={{
              color: "#3B97CB",
              fontFamily: "Roboto-Bold",
              fontSize: 16,
              fontStyle: "normal",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            See All
          </Text>
        </Pressable>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        onScroll={(e) => {
          Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })(e);
        }}
        style={{
          flexDirection: "row",
          gap: 16,
          marginTop: 16,
        }}
      >
        {allProduct.map((item, index) => (
          <ProductCard key={index} data={item} />
        ))}
      </ScrollView>
    </View>
  );
}
