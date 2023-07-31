import { ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { Surface } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    height: 455,
    width: "100%",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  imgBackground: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default function DetailImage({ imageUrl }) {
  const navigation = useNavigation();
  return (
    <Surface elevation={3} style={{ ...styles.imageContainer }}>
      <ImageBackground
        source={{
          uri: imageUrl,
        }}
        style={styles.imgBackground}
      >
        <LinearGradient
          colors={["transparent", "rgba(202, 236, 255, .4)", "#3B97CB"]}
          style={{ height: "80%", width: "100%" }}
        />
        <Entypo
          onPress={() => navigation.goBack()}
          name="chevron-left"
          color="#2D9CDB"
          size={59}
          style={{
            position: "absolute",
            top: 47,
            left: 16,
            padding: 0,
          }}
        />
      </ImageBackground>
    </Surface>
  );
}
