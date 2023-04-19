import { View, Text, StyleSheet, Pressable } from "react-native";

import { Item } from "../App";

type GoalItemProps = {
  item: Item;
  handleDeleteGoal: (id: string) => void;
};

const GoalItem = ({ item, handleDeleteGoal }: GoalItemProps) => {
  const deleteGoalHandler = () => {
    handleDeleteGoal(item.id);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#360772" }}
        onPress={deleteGoalHandler}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "#ffffff",
  },
});

export default GoalItem;
