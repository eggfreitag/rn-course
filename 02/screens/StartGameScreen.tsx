import { useAtom } from "jotai";
import { View, TextInput, StyleSheet, Alert } from "react-native";

import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";
import { enteredNumberAtom } from "../atoms/enteredNumber";

type StartGameScreenProps = {
  handlePickedNumber: (pickedNumber: number) => void;
};

const StartGameScreen = ({ handlePickedNumber }: StartGameScreenProps) => {
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

    return handlePickedNumber(number);
  };

  const handleReset = () => {
    setEnteredNumber("");
  };

  return (
    <View style={styles.inputContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
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
