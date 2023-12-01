import { View } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "../config/styles";
const Stack = createNativeStackNavigator();

export default function RegisterForm({ navigation }) {
  const [showPass, setShowPass] = React.useState(false);
  const [showRePass, setShowRePass] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text variant="displayMedium">Register</Text>
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={{ marginTop: 10 }}
        error={true}
      />
      <TextInput
        mode="outlined"
        placeholder="Password"
        label="Password"
        secureTextEntry={showPass}
        right={
          <TextInput.Icon
            icon={!showPass ? "eye" : "eye-off"}
            onPress={() => setShowPass(!showPass)}
          />
        }
        style={{ marginTop: 10 }}
      />
      <TextInput
        mode="outlined"
        placeholder="Re-type Password"
        label="Re-type Password"
        secureTextEntry={showRePass}
        right={
          <TextInput.Icon
            icon={!showPass ? "eye" : "eye-off"}
            onPress={() => setShowRePass(!showRePass)}
          />
        }
        style={{ marginTop: 10 }}
      />
  
      <Button
        onPress={() => navigation.navigate("Login")}
        mode="contained"
        style={{ marginTop: 10, backgroundColor: "#3498db" }}
        labelStyle={{ color: "white" }}
        
        >
      Register
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
