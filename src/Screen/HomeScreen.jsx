import { View, ScrollView } from "react-native";
import React from "react";
import CircularBackground from "../Component/Home/CircularBackground";
import BalanceCard from "../Component/Home/BalanceCard";
import PreviousOrder from "../Component/Home/PreviousOrder";
import MostOrdered from "../Component/Home/MostOrdered";
import OnBoardingText from "../Component/Home/OnBoardingText";
import LatestProduct from "../Component/Home/LatestProduct";

const HomeScreen = () => {
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
      <LatestProduct />
      <View style={{ marginTop: 20 }} />
    </ScrollView>
  );
};

export default HomeScreen;
