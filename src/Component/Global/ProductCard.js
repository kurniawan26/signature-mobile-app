import {
  View,
  Text,
  Pressable,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

function ProductCard({ data, navigte }) {
  const navigation = useNavigation();

  const { name, description, sku, price, created_at, category_id, id, image } =
    data;

  return (
    <Pressable
      style={{
        marginHorizontal: 8,
      }}
      onPress={() =>
        navigation.navigate("Detail", {
          id: id,
        })
      }
    >
      <ImageBackground
        source={{
          uri: image === "" ? "https://picsum.photos/200/300" : `${image}`,
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
              {name}
            </Text>
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "400" }}>
              $&nbsp;{price}/pc
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
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

export default ProductCard;
