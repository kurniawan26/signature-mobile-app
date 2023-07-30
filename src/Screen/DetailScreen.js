import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { IconButton, Surface } from "react-native-paper";
import QuantityButton from "../Component/Detail/QuantityButton";
import InformationItem from "../Component/Detail/InformationItem";
import DetailImage from "../Component/Detail/DetailImage";

const DetailScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <DetailImage />
      <InformationItem />
      <QuantityButton />
      <View style={{ paddingHorizontal: 16, marginTop: 24 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7f5fd",
  },
});

export default DetailScreen;
