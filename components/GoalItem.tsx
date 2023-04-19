import { View, Text, StyleSheet } from "react-native";

import { Item } from "../App";

type GoalItemProps = {
  item: Item;
};

const GoalItem = ({ item }: GoalItemProps) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{item.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#ffffff",
  },
});

export default GoalItem;
