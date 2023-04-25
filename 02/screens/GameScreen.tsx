import { useAtom } from "jotai";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useMemo, useState } from "react";
import { View, StyleSheet, Alert, FlatList } from "react-native";

import Card from "../components/ui/Card";
import Title from "../components/ui/Title";
import LogItem from "../components/game/LogItem";
import { userNumberAtom } from "../atoms/userNumber";
import { gameIsOverAtom } from "../atoms/gameIsOver";
import PrimaryButton from "../components/ui/PrimaryButton";
import { guessedNumbersAtom } from "../atoms/guessedNumbers";
import InstructionText from "../components/ui/InstructionText";
import generateRandomNumber from "../utils/generateRandomNumber";
import NumberContainer from "../components/game/NumberContainer";

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = () => {
  const [userNumber] = useAtom(userNumberAtom);
  const [, setGameIsOver] = useAtom(gameIsOverAtom);
  const [guessedNumbers, setGuessedNumbers] = useAtom(guessedNumbersAtom);

  const initialGuess = useMemo(
    () => generateRandomNumber(1, 100, userNumber!),
    [userNumber]
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
    setGuessedNumbers([initialGuess]);
  }, []);

  useEffect(() => {
    if (currentGuess === userNumber) {
      return setGameIsOver(true);
    }
  }, [currentGuess, userNumber, setGameIsOver]);

  const handleNextGuess = (direction: "lower" | "greater") => {
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
    }
    if (direction === "greater") {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRandomNumber);
    setGuessedNumbers((prev) => [newRandomNumber, ...prev]);
  };

  const guessedNumbersListLength = guessedNumbers.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              title={<Ionicons name="md-remove" size={24} color="white" />}
              onPress={() => handleNextGuess("lower")}
            />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              title={<Ionicons name="md-add" size={24} color="white" />}
              onPress={() => handleNextGuess("greater")}
            />
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessedNumbers}
          renderItem={({ item, index }) => (
            <LogItem
              item={item}
              roundsNumber={guessedNumbersListLength - index}
            />
          )}
          keyExtractor={(item, index) => item.toString() + index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: { marginBottom: 12 },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

export default GameScreen;
