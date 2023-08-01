import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { asyncGetAllProducts } from "../redux/products/action";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Component/Global/ProductCard";

export default function AllProduct({}) {
  const insets = useSafeAreaInsets();

  const dispatch = useDispatch();
  const { allProduct } = useSelector((states) => {
    return states;
  });

  useEffect(() => {
    dispatch(asyncGetAllProducts());
  }, [dispatch]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#e7f5fd",
        marginTop: 10,
        paddingBottom: insets.bottom,
        justifyContent: "center",
        marginHorizontal: 24,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <FlatList
          data={allProduct}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  marginBottom: 20,
                }}
              >
                <ProductCard data={item} />
              </View>
            );
          }}
          keyExtractor={(item) => `${item.id}`}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
        />
      </ScrollView>
    </View>
  );
}
