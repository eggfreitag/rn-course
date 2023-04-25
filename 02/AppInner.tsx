import { useAtom } from "jotai";
import * as Font from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";

import Colors from "./constants/colors";
import GameScreen from "./screens/GameScreen";
import { userNumberAtom } from "./atoms/userNumber";
import { gameIsOverAtom } from "./atoms/gameIsOver";
import GameOverScreen from "./screens/GameOverScreen";
import StartGameScreen from "./screens/StartGameScreen";

SplashScreen.preventAutoHideAsync();

const AppInner = () => {
  const [userNumber] = useAtom(userNumberAtom);
  const [gameIsOver] = useAtom(gameIsOverAtom);

  const [fontsLoaded] = Font.useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  let screen = <StartGameScreen />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[Colors.primary600, "#ddb52f"]}
      onLayout={onLayoutRootView}
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
