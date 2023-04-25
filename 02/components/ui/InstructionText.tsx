import { ReactNode } from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

import Colors from "constants/colors";

type InstructionTextProps = {
  children: ReactNode;
  style?: TextStyle;
};

const InstructionText = ({ children, style }: InstructionTextProps) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.yellow500,
    fontSize: 24,
  },
});

export default InstructionText;
