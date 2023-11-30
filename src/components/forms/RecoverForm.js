import React from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import styles from "../config/styles";

export default function RecoverForm({ navigation }) {
  const [email, setEmail] = React.useState("");

  const buttonStyle = {
    marginTop: 10,
    backgroundColor: "#3498db",
  };

  const labelStyle = {
    color: "white",
  };

  return (
    <View style={styles.container}>
      <Text variant="displayMedium">Forgot Password</Text>
      <Text>
        Enter your email address below to receive a link to reset your password.
      </Text>
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={{ marginTop: 10 }}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button
        icon="lock-reset"
        mode="contained"
        style={buttonStyle}
        labelStyle={labelStyle}
        onPress={() => navigation.navigate("Login")}
      >
        Reset Password
      </Button>
      
      <Button
        onPress={() => navigation.pop()}
        mode="contained"
        style={buttonStyle}
        labelStyle={labelStyle}
      >
        Back
      </Button>
    </View>
  );
}
