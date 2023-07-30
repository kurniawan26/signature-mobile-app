import { View, Text } from "react-native";
import React from "react";

const CircularBackground = () => {
  return (
    <View
      style={{
        backgroundColor: "#f36868",
        height: 600,
        width: 600,
        borderRadius: 300,
        position: "absolute",
        top: -400,
        left: -120,
      }}
    />
  );
};

export default CircularBackground;
