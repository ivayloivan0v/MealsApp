import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

export const MealsOverviewScreen = ({ route }) => {
  const catID = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {catID}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
