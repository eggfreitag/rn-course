import { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

type GoalInputProps = {
  handleAddGoal: (enteredText: string) => void;
};

const GoalInput = ({ handleAddGoal }: GoalInputProps) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const handleGoalInput = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    handleAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={enteredGoalText}
        style={styles.textInput}
        onChangeText={handleGoalInput}
        placeholder="Your course goal!"
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
