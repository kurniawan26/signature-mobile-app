import { View, Text } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, TextInput } from "react-native-paper";
import BeLaundryIcon from "../Component/Global/BeLaundryIcon";
import { useDispatch } from "react-redux";
import { asyncSetAuthUserCreator } from "../redux/auth/action";

export default function LoginScreen() {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const loginHandler = () => {
    dispatch(asyncSetAuthUserCreator({ email, password }));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#2D9CDB",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        justifyContent: "center",
        paddingHorizontal: 36,
        gap: 20,
      }}
    >
      <BeLaundryIcon />
      <TextInput label="Email" onChange={(e) => setEmail(e.nativeEvent.text)} />
      <TextInput
        label="Password"
        onChange={(e) => setPassword(e.nativeEvent.text)}
      />
      <Button
        mode="contained"
        style={{
          backgroundColor: "#fff",
        }}
        onPress={loginHandler}
      >
        <Text style={{ color: "#000" }}>Login</Text>
      </Button>
    </View>
  );
}
