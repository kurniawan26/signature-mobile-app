import { View, Text } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const BalanceCard = () => {
  return (
    <Card
      style={{
        marginTop: 16,
        height: 200,
        width: 302,
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      <LinearGradient
        colors={["#CCEDFF", "white"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            position: "absolute",
            margin: 16,
            backgroundColor: "#09E",
            width: 139,
            height: 139,
            borderRadius: 139 / 2,
            top: -75,
            left: -50,
          }}
        />
        <View
          style={{
            position: "absolute",
            backgroundColor: "#f36868",
            width: 29,
            height: 29,
            top: 30,
            borderRadius: 29 / 2,
            left: 110,
          }}
        />
        <View
          style={{
            alignItems: "flex-end",
            margin: 16,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#535353",
              fontWeight: "400",
            }}
          >
            Your Balance
          </Text>
          <Text style={{ fontSize: 36, color: "#09E", fontWeight: "700" }}>
            $ 14,500
          </Text>
        </View>
      </LinearGradient>
    </Card>
  );
};

export default BalanceCard;
