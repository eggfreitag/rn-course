import { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

const NumberContainer = ({ children }: { children: ReactNode }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.yellow500,
    padding: 24,
    margin: 25,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.yellow500,
    fontSize: 36,
    fontFamily: "open-sans-bold",
  },
});

export default NumberContainer;
