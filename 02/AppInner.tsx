import React from "react";
import { useAtom } from "jotai";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";

import Colors from "./constants/colors";
import GameScreen from "./screens/GameScreen";
import { userNumberAtom } from "./atoms/userNumber";
import StartGameScreen from "./screens/StartGameScreen";

const AppInner = () => {
  const [userNumber] = useAtom(userNumberAtom);

  const screen = userNumber ? <GameScreen /> : <StartGameScreen />;

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[Colors.primary600, "#ddb52f"]}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});

export default AppInner;
