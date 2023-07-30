import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, Divider, List } from "react-native-paper";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const dummyData = [
  {
    title: "Bag of Laundry",
    qty: 2,
    price: 180,
  },
  {
    title: "Dry Cleaning",
    qty: 3,
    price: 10,
  },
  {
    title: "Rug",
    qty: 1,
    price: 14,
  },
];

export default function InvoiceScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const totalAmount = dummyData.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: "#e7f5fd",
      }}
    >
      <Entypo
        onPress={() => navigation.goBack()}
        name="chevron-left"
        color="#2D9CDB"
        size={59}
        style={{
          marginVertical: 20,
        }}
      />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 36,
        }}
      >
        <View
          style={{
            backgroundColor: "#0099EE",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: 80,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 26,
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Order Summary
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            width: "100%",
            paddingTop: 15,
            backgroundColor: "#fff",
            paddingHorizontal: 17,
          }}
        >
          <Text
            style={{
              color: "#09E",
              textAlign: "right",
              fontSize: 12.743,
              fontWeight: 400,
            }}
          >
            ORDER #21340
          </Text>
          <View
            style={{
              flexDirection: "column",
              marginTop: 22,
            }}
          >
            <Text
              style={{
                color: "#000",
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              John Doe
            </Text>
            <Text
              style={{
                marginTop: 6,
                color: "#535353",
                fontSize: 13,
                fontWeight: 400,
                width: 110,
              }}
            >
              123 Pasir Ris, 13810, Singapore
            </Text>
          </View>

          <View
            style={{
              marginTop: 20,
            }}
          >
            {dummyData.map((item, index) => (
              <>
                {index !== 0 && <Divider />}
                <ListItemSection
                  key={index}
                  title={item.title}
                  qty={item.qty}
                  price={item.price}
                />
              </>
            ))}
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#0099EE",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            height: 54,
            flexDirection: "row",
            paddingHorizontal: 14,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 15,
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Total Order
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            $&nbsp;{totalAmount}.00
          </Text>
        </View>

        <Button
          icon={({ size, color }) => (
            <Ionicons name="chatbubbles-outline" size={size} color={color} />
          )}
          mode="contained"
          style={{
            marginTop: 20,
            width: "100%",
            height: 64,
            justifyContent: "center",
            fontSize: 16,
            backgroundColor: "#56E4A0",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Whatsapp Us
          </Text>
        </Button>
      </View>

      <View style={{ marginTop: 20 }} />
    </ScrollView>
  );
}

function ListItemSection({ title, qty, price }) {
  return (
    <List.Item
      style={{
        width: "100%",
        height: "auto",
      }}
      title={title}
      titleStyle={{
        fontSize: 15,
        fontWeight: "500",
      }}
      description={`Qty : ${qty}`}
      descriptionStyle={{
        fontSize: 12,
        marginTop: 2,
        color: "#3B97CB",
      }}
      left={() => (
        <Image
          style={{
            height: 51,
            width: 47,
          }}
          source={{
            uri: "https://images.unsplash.com/photo-1690232260627-bcd8d9352973?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80",
          }}
        />
      )}
      right={() => (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              fontSize: 10,
              color: "#535353",
            }}
          >
            Total
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "700",
              color: "#09E",
              marginTop: 3,
            }}
          >
            $&nbsp;{price}.00
          </Text>
        </View>
      )}
    />
  );
}
