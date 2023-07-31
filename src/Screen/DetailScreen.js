import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { IconButton, Surface } from "react-native-paper";
import QuantityButton from "../Component/Detail/QuantityButton";
import InformationItem from "../Component/Detail/InformationItem";
import DetailImage from "../Component/Detail/DetailImage";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetProductDetail } from "../redux/productDetail/action";

const DetailScreen = () => {
  const dispatch = useDispatch();
  const { productDetail } = useSelector((states) => {
    return states;
  });

  console.log("productDetail", productDetail);

  const { image } = productDetail;

  useEffect(() => {
    dispatch(asyncGetProductDetail(48));
  }, [dispatch]);

  return (
    <ScrollView style={styles.container}>
      <DetailImage imageUrl={image} />
      <InformationItem data={productDetail} />
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
