import { StyleSheet, Text, View } from "react-native";

import Colors from "../../constants/colors";

type LogItemProps = {
  item: number;
  roundsNumber: number;
};

const LogItem = ({ item, roundsNumber }: LogItemProps) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundsNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.yellow500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    shadowOpacity: 0.25,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});

export default LogItem;
