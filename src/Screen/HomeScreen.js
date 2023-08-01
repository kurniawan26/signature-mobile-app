import { View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import CircularBackground from "../Component/Home/CircularBackground";
import BalanceCard from "../Component/Home/BalanceCard";
import PreviousOrder from "../Component/Home/PreviousOrder";
import MostOrdered from "../Component/Home/MostOrdered";
import OnBoardingText from "../Component/Home/OnBoardingText";
import LatestProduct from "../Component/Home/LatestProduct";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetAllProducts } from "../redux/products/action";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { allProduct } = useSelector((states) => {
    return states;
  });

  useEffect(() => {
    dispatch(asyncGetAllProducts());
  }, [dispatch]);

  // get only the first 5 products
  const latestProduct = allProduct?.slice(0, 5);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#e7f5fd",
        position: "relative",
        paddingHorizontal: 36,
      }}
    >
      <CircularBackground />
      <View
        style={{
          marginTop: 64,
        }}
      >
        <OnBoardingText />
        <BalanceCard />
      </View>
      <PreviousOrder />
      <MostOrdered />
      <LatestProduct allProduct={latestProduct} />
      <View style={{ marginTop: 20 }} />
    </ScrollView>
  );
};

export default HomeScreen;
