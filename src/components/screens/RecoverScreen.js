import React from "react";
import { View } from "react-native";
import RecoverForm from "../forms/RecoverForm";

export default function RecoverScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <RecoverForm navigation={navigation} />
    </View>
  );
}
