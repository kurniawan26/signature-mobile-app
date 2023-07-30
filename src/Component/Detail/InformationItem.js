import { View, Text } from "react-native";
import React from "react";

export default function InformationItem() {
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
          Dry Clean
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
        T - Shirt
      </Text>
      <Text
        style={{
          fontSize: 28,
          fontWeight: "500",
          color: "#0099EE",
        }}
      >
        $ 6.00/pc
      </Text>
      <Text
        style={{
          color: "#838383",
          marginTop: 14,
          fontSize: 16,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit diam,
        lobortis at auctor eu, tempus eget enim. Etiam ullamcorper risus ac diam
        pulvinar, a auctor nunc sagittis. In euismod est est, ac pretium sem
        egestas eget. Nunc mollis rutrum nisl lacinia convallis. Curabitur et
        arcu eros. Proin eu tellus augue. Vestibulum auctor risus erat, et
        tempor augue
      </Text>
    </View>
  );
}
