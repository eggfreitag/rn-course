import { useAtom } from "jotai";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  useWindowDimensions,
} from "react-native";

import Colors from "constants/colors";
import Title from "components/ui/Title";
import { userNumberAtom } from "atoms/userNumber";
import PrimaryButton from "components/ui/PrimaryButton";
import { enteredNumberAtom } from "atoms/enteredNumber";
import { guessedNumbersAtom } from "atoms/guessedNumbers";

const GameOverScreen = () => {
  const [userNumber, setUserNumber] = useAtom(userNumberAtom);
  const [guessedNumbers, setGuessedNumbers] = useAtom(guessedNumbersAtom);
  const [, setEnteredNumber] = useAtom(enteredNumberAtom);

  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    borderWidth: imageSize / 100,
  };

  const reset = () => {
    setUserNumber(null);
    setGuessedNumbers([]);
    setEnteredNumber("");
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER</Title>
        <View style={[imageStyle, styles.imageContainer]}>
          <Image
            style={styles.image}
            source={require("assets/images/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed{" "}
          <Text style={styles.highlightText}>{guessedNumbers.length}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlightText}>{userNumber}</Text>.
        </Text>
        <PrimaryButton title="Start New Game" onPress={reset} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  imageContainer: {
    // width: Dimensions.get("window").width < 380 ? 150 : 300,
    // height: Dimensions.get("window").width < 380 ? 150 : 300,
    borderRadius: Dimensions.get("window").width < 380 ? 75 : 150,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
  screen: {
    flex: 1,
  },
});

export default GameOverScreen;
