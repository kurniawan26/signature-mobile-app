import { View, TextInput } from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";

export default function QuantityButton() {
  const [value, setValue] = React.useState(0);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 24,
        paddingHorizontal: 16,
      }}
    >
      <IconButton
        icon="minus"
        size={24}
        iconColor="#fff"
        style={{
          backgroundColor: value === 0 ? "#E0E0E0" : "#3B97CB",
        }}
        disabled={value === 0}
        onPress={() => setValue(value - 1)}
      />
      <TextInput
        style={{
          width: 50,
          textAlign: "center",
          backgroundColor: "#fff",
          borderColor: "#3B97CB",
          borderWidth: 1,
          borderRadius: 8,
          marginHorizontal: 8,
          height: 55,
          width: 106,
        }}
        value={value.toString()}
      />
      <IconButton
        icon="plus"
        iconColor="#fff"
        size={24}
        onPress={() => setValue(value + 1)}
        style={{
          backgroundColor: "#3B97CB",
        }}
      />
    </View>
  );
}
