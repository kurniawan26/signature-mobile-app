import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import InvoiceSvg from "./Invoice";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const PreviousOrder = () => {
  const navigate = useNavigation();
  return (
    <Pressable onPress={() => navigate.navigate("Invoice")}>
      <View
        style={{
          marginTop: 30,
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
          Previous Order
        </Text>

        <View
          style={{
            marginTop: 16,
            height: 95,
            borderRadius: 16,
            overflow: "hidden",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "#fff",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <Image
              style={{
                height: 73,
                width: 67,
                borderRadius: 16,
              }}
              source={{
                uri: "https://images.unsplash.com/photo-1630329273801-8f629dba0a72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              }}
            />
            <View
              style={{
                marginLeft: 6,
                justifyContent: "space-between",
                height: "100%",
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: "#525252",
                }}
              >
                Bag of Laundry
              </Text>
              <View>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: "400",
                    color: "#535353",
                    marginBottom: 4,
                  }}
                >
                  Total Order
                </Text>
                <Text
                  style={{
                    fontSize: 14.8,
                    fontWeight: "700",
                    color: "#09E",
                  }}
                >
                  $ 180.00
                </Text>
              </View>
            </View>
          </View>
          <LinearGradient
            colors={["#099DEF", "white"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 2 }}
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 95,
              height: 95,
            }}
          >
            <InvoiceSvg />
            <Text
              style={{
                fontSize: 11,
                fontWeight: "bold",
                color: "#fff",
                textTransform: "uppercase",
                marginTop: 10,
              }}
            >
              Invoice
            </Text>
          </LinearGradient>
        </View>
      </View>
    </Pressable>
  );
};

export default PreviousOrder;
