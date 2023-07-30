import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Animated,
  Pressable,
} from "react-native";
import React, { useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function LatestProduct() {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
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
        Latest Product
      </Text>
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
        <CardWrapper />
        <CardWrapper />
        <CardWrapper />
      </ScrollView>
    </View>
  );
}

function CardWrapper() {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("Detail")}>
      <View
        style={{
          marginHorizontal: 16,
          marginLeft: 0,
        }}
      >
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
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#f36868",
                    width: 6,
                    height: 6,
                    borderRadius: 6 / 2,
                  }}
                />
                <Text
                  style={{ color: "#fff", fontSize: 9.31, fontWeight: "bold" }}
                >
                  Dry Cleaning
                </Text>
              </View>
              <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
                Jeans
              </Text>
              <Text style={{ color: "#fff", fontSize: 16, fontWeight: "400" }}>
                $&nbsp;10.00/pc
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
    alignItems: "center",
    height: 200,
    width: 176,
    borderRadius: 10,
    overflow: "hidden",
  },
  textContainer: {
    position: "absolute",
    left: 16,
    bottom: 16,
  },
});
