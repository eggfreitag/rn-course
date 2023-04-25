import { useAtom } from "jotai";
import { Image, StyleSheet, Text, View } from "react-native";

import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import { userNumberAtom } from "../atoms/userNumber";
import { gameIsOverAtom } from "../atoms/gameIsOver";
import PrimaryButton from "../components/ui/PrimaryButton";
import { enteredNumberAtom } from "../atoms/enteredNumber";
import { guessedNumbersAtom } from "../atoms/guessedNumbers";

const GameOverScreen = () => {
  const [userNumber, setUserNumber] = useAtom(userNumberAtom);
  const [guessedNumbers, setGuessedNumbers] = useAtom(guessedNumbersAtom);
  const [, setGameIsOver] = useAtom(gameIsOverAtom);
  const [, setEnteredNumber] = useAtom(enteredNumberAtom);

  const reset = () => {
    setUserNumber(null);
    setGuessedNumbers([]);
    setEnteredNumber("");
  };

  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{" "}
        <Text style={styles.highlightText}>{guessedNumbers.length}</Text> rounds
        to guess the number{" "}
        <Text style={styles.highlightText}>{userNumber}</Text>.
      </Text>
      <PrimaryButton title="Start New Game" onPress={reset} />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});

export default GameOverScreen;
