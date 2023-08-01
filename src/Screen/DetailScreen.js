import { View, StyleSheet, ScrollView } from "react-native";
import React, { useEffect } from "react";
import QuantityButton from "../Component/Detail/QuantityButton";
import InformationItem from "../Component/Detail/InformationItem";
import DetailImage from "../Component/Detail/DetailImage";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetProductDetail } from "../redux/productDetail/action";

const DetailScreen = ({ route }) => {
  const dispatch = useDispatch();
  const { productDetail } = useSelector((states) => {
    return states;
  });

  const { image } = productDetail;

  useEffect(() => {
    dispatch(asyncGetProductDetail(route.params.id));
  }, [dispatch, route.params.id]);

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
