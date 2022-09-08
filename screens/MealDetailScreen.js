import React from "react";
import { View, Text, Image } from "react-native";
import { MealDetails } from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

export const MealDetailScreen = ({ route }) => {
  const mealID = route.params.mealID;
  const selectedMeal = MEALS.find((meal) => meal.id === mealID);
  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
};
