import { useState } from "react";
import { FlatList, StyleSheet, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export type Item = { text: string; id: string };

const App = () => {
  const [courseGoals, setCourseGoals] = useState<Item[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const handleAddGoal = (enteredGoalText: string) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  const handleDeleteGoal = (id: string) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#e4d0ff"
          onPress={startAddGoalHandler}
        />
        <GoalInput {...{ handleAddGoal, modalIsVisible, endAddGoalHandler }} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            alwaysBounceVertical={false}
            renderItem={({ item }) => (
              <GoalItem {...{ item, handleDeleteGoal }} />
            )}
            keyExtractor={(item, index) => item.id + index}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 4,
  },
});

export default App;
