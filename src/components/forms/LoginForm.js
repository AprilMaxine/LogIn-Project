import React from "react";
import { View } from "react-native";
import { Button, Text, TextInput, StyleSheet } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import styles from "../config/styles";

const Stack = createStackNavigator();

export default function LoginForm({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Text variant="displayMedium">Login Account</Text>
      <Text>Enter your email address and password to log in.</Text>
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={{ marginTop: 20 }}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        mode="outlined"
        placeholder="Password"
        label="Password"
        secureTextEntry
        style={{ marginTop: 10 }}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Text
        onPress={() => navigation.navigate("Recover")}
        style={{ marginTop: 10, color: "#3498db", textDecorationLine: 'underline', alignSelf: 'flex-end', }}
      >
        Forgot Password
      </Text>
      <Button
        onPress={() => navigation.navigate("Home")}
        mode="contained"
        style={{ marginTop: 25, backgroundColor: "#3498db" }}
        labelStyle={{ color: "white" }}
      >
        Login
      </Button>
      <Button
        onPress={() => navigation.navigate("Register")}
        mode="contained"
        style={{ marginTop: 10, backgroundColor: "#3498db" }}
        labelStyle={{ color: "white" }}
      >
        Register Account
      </Button>
      <Button
        onPress={() => navigation.pop()}
        icon="arrow-left"
        mode="contained"
        style={{ marginTop: 10, backgroundColor: "#3498db" }}
        labelStyle={{ color: "white" }}
      >
        Back
      </Button>
    </View>
  );
}
