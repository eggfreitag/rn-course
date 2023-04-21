import { Provider, useAtom } from "jotai";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";

import GameScreen from "./screens/GameScreen";
import { userNumberAtom } from "./atoms/userNumber";
import StartGameScreen from "./screens/StartGameScreen";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useAtom(userNumberAtom);

  const handlePickedNumber = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
  };

  const screen = userNumber ? (
    <GameScreen />
  ) : (
    <StartGameScreen {...{ handlePickedNumber }} />
  );

  return (
    <Provider>
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
    </Provider>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
