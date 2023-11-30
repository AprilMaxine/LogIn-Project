import React from "react";
import { View, Button, StyleSheet, ImageBackground } from "react-native";
import styles from "../config/styles";

export default function LandingScreen({ navigation }) {
  return (
    <View style={styles.covercontainer}>
      <ImageBackground
        source={require("../config/logo.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <View style={styles.buttonContainer}>
            <Button
              title="Login"
              onPress={() => navigation.navigate("Login")}
              style={styles.button}
            />
            <View style={styles.separator} />
            <Button
              title="Sign Up"
              onPress={() => navigation.navigate("Register")}
              style={styles.button}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}