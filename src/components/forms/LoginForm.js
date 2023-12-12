import React, { useState } from "react";
import { View, Alert } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import styles from "../config/styles";

const LoginForm = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await fetch(`http://192.168.200.202/login.php?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            if (data.success) {
                // Login successful, you can navigate to the home screen or perform other actions
                navigation.navigate("Home");
            } else {
                // Login failed, show an alert or handle the error accordingly
                Alert.alert("Login Failed", data.message);
            }
        } catch (error) {
            console.error("Error during login:", error.message);
            Alert.alert("An error occurred during login");
        }
    };

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
                style={{
                    marginTop: 10,
                    color: "#3498db",
                    textDecorationLine: "underline",
                    alignSelf: "flex-end",
                }}
            >
                Forgot Password
            </Text>
            <Button
                onPress={handleLogin}
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
};

export default LoginForm;
