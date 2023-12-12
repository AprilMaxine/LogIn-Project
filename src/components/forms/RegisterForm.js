import React, { useState } from "react";
import { View, Alert, ActivityIndicator } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import styles from "../config/styles";

const RegisterForm = ({ navigation }) => {
  const [showPass, setShowPass] = useState(false);
  const [showRePass, setShowRePass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !password || !rePassword) {
      Alert.alert("All fields are required");
      return;
    }

    if (password !== rePassword) {
      Alert.alert("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http:192.168.200.202/registration.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        Alert.alert("Registration successful!");
        navigation.navigate("Login");
      } else {
        Alert.alert("Registration failed", data.message || "An error occurred");
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
      Alert.alert("An error occurred during registration");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="displayMedium">Register</Text>
      <TextInput
        mode="outlined"
        placeholder="Name"
        label="Name"
        style={{ marginTop: 10 }}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={{ marginTop: 10 }}
        value={email}
        onChangeText={(text) => setEmail(text)}
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
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        mode="outlined"
        placeholder="Re-type Password"
        label="Re-type Password"
        secureTextEntry={showRePass}
        right={
          <TextInput.Icon
            icon={!showRePass ? "eye" : "eye-off"}
            onPress={() => setShowRePass(!showRePass)}
          />
        }
        style={{ marginTop: 10 }}
        value={rePassword}
        onChangeText={(text) => setRePassword(text)}
      />

      <Button
        onPress={handleRegister}
        mode="contained"
        style={{ marginTop: 10, backgroundColor: "#3498db" }}
        labelStyle={{ color: "white" }}
        disabled={loading}
      >
        {loading ? <ActivityIndicator color="white" /> : "Register"}
      </Button>

      <Button
        onPress={() => navigation.pop()}
        icon="arrow-left"
        mode="contained"
        style={{ marginTop: 10, backgroundColor: "#3498db" }}
        labelStyle={{ color: "white" }}
        disabled={loading}
      >
        Back
      </Button>
    </View>
  );
};

export default RegisterForm;
