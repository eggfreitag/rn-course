import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import Title from "../components/ui/Title";
import { userNumberAtom } from "../atoms/userNumber";
import PrimaryButton from "../components/ui/PrimaryButton";
import generateRandomNumber from "../utils/generateRandomNumber";
import NumberContainer from "../components/game/NumberContainer";

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = () => {
  const [userNumber] = useAtom(userNumberAtom);
  const initialGuess = generateRandomNumber(
    minBoundary,
    maxBoundary,
    userNumber!
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      return Alert.alert("Game Over!", "You won!", [
        { text: "OK", style: "default" },
      ]);
    }
  }, [currentGuess]);

  const handleNextGuess = (direction: "lower" | "greater") => {
    console.log(currentGuess, userNumber);
    if (
      (direction === "lower" && currentGuess < userNumber!) ||
      (direction === "greater" && currentGuess > userNumber!)
    ) {
      return Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRandomNumber);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton title="-" onPress={() => handleNextGuess("lower")} />
          <PrimaryButton title="+" onPress={() => handleNextGuess("greater")} />
        </View>
      </View>
      {/* <View>LOG GUESS</View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

export default GameScreen;
