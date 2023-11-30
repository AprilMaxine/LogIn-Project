import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../config/styles";
export default function HomePage({ navigation }) {

  return (
    <View style={styles.covercontainer}>
      <Image
        source={require("../config/logo.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Button
          onPress={()=> navigation.pop()}
          icon="arrow-left"
          mode="contained"
          style={styles.logoutButton}
          labelStyle={styles.logoutButtonText}
        >
          Log Out
        </Button>
      </View>
    </View>
  );
}