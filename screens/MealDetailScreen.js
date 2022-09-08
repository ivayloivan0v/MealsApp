import React from "react";
import { View, Text } from "react-native";

export const MealDetailScreen = ({ route }) => {
  const mealID = route.params.mealID;
  return <Text>Meal Detail Screen {mealID}</Text>;
};
