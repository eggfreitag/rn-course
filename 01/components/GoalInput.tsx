import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

type GoalInputProps = {
  handleAddGoal: (enteredText: string) => void;
  modalIsVisible: boolean;
  endAddGoalHandler: () => void;
};

const GoalInput = ({
  handleAddGoal,
  modalIsVisible,
  endAddGoalHandler,
}: GoalInputProps) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const handleGoalInput = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    if (enteredGoalText.length === 0) {
      return endAddGoalHandler();
    }

    handleAddGoal(enteredGoalText);
    setEnteredGoalText("");
    endAddGoalHandler();
  };

  const cancelGoalHandler = () => {
    endAddGoalHandler();
    setEnteredGoalText("");
  };

  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          value={enteredGoalText}
          style={styles.textInput}
          onChangeText={handleGoalInput}
          placeholder="Your course goal!"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={cancelGoalHandler}
              color="#f31282"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

export default GoalInput;
