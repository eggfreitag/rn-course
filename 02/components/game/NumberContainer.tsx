import { ReactNode } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import Colors from "constants/colors";

const deviceWidth = Dimensions.get("window").width;

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
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.yellow500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily: "open-sans-bold",
  },
});

export default NumberContainer;
