import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function MostOrdered() {
  return (
    <View
      style={{
        marginTop: 30,
      }}
    >
      <Text
        style={{
          color: "#3B97CB",
          fontFamily: "Roboto",
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: 700,
          textTransform: "uppercase",
        }}
      >
        You Most Ordered
      </Text>
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1690232260627-bcd8d9352973?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80",
          }}
          style={styles.imgBackground}
        >
          <LinearGradient
            colors={["#00000000", "#3B97CB"]}
            style={{ height: "100%", width: "100%" }}
          >
            <View style={styles.textContainer}>
              <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
                Dry Cleaning
              </Text>
              <Text style={{ color: "#fff", fontSize: 16, fontWeight: "500" }}>
                2x | total of $ 20
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 16,
  },
  imgBackground: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    height: 200,
    borderRadius: 16,
  },
  linearGradient: {
    flex: 1,
    width: "100%",
  },
  textContainer: {
    position: "absolute",
    left: 16,
    bottom: 16,
  },
});
