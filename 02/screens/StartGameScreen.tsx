import { useAtom } from "jotai";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import Colors from "constants/colors";
import Card from "components/ui/Card";
import Title from "components/ui/Title";
import { userNumberAtom } from "atoms/userNumber";
import { gameIsOverAtom } from "atoms/gameIsOver";
import PrimaryButton from "components/ui/PrimaryButton";
import { enteredNumberAtom } from "atoms/enteredNumber";
import InstructionText from "components/ui/InstructionText";

const StartGameScreen = () => {
  const [, setUserNumber] = useAtom(userNumberAtom);
  const [, setGameIsOver] = useAtom(gameIsOverAtom);
  const { height } = useWindowDimensions(); // 기기가 회전할 경우 반응한다 (=동적 Dimensions)

  const [enteredNumber, setEnteredNumber] = useAtom(enteredNumberAtom);

  const handleInputChange = (inputText: string) => {
    setEnteredNumber(inputText);
  };

  const handleConfirm = () => {
    const number = parseInt(enteredNumber);

    if (isNaN(number) || number <= 0 || number > 99) {
      return Alert.alert(
        "Invalid number!",
        "Number has to be between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: handleReset }]
      );
    }

    setGameIsOver(false);
    setUserNumber(number);
  };

  const handleReset = () => {
    setEnteredNumber("");
  };

  const marginTop = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              value={enteredNumber}
              onChangeText={handleInputChange}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton title="Reset" onPress={handleReset} />
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton title="Confirm" onPress={handleConfirm} />
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.yellow500,
    borderBottomWidth: 2,
    color: Colors.yellow500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
