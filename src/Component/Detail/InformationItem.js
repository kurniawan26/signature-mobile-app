import { View, Text } from "react-native";
import React from "react";

export default function InformationItem({ data }) {
  const { created_at, category_id, description, id, name, price, sku } = data;

  return (
    <View
      style={{
        paddingHorizontal: 16,
        marginTop: 24,
      }}
    >
      <View
        style={{
          backgroundColor: "#CAECFF",
          maxWidth: 80,
          minHeight: 30,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
          paddingVertical: 8,
          paddingHorizontal: 8,
        }}
      >
        <Text
          style={{
            color: "#3B97CB",
            fontSize: 14,
          }}
        >
          {sku}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 44,
          fontWeight: "bold",
          marginTop: 16,
          color: "#3B97CB",
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          fontSize: 28,
          fontWeight: "500",
          color: "#0099EE",
        }}
      >
        {price}/pc
      </Text>
      <Text
        style={{
          color: "#838383",
          marginTop: 14,
          fontSize: 16,
        }}
      >
        {description}
      </Text>
    </View>
  );
}
