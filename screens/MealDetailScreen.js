import React, { useContext, useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { IconButton } from "../components/IconButton";
import { List } from "../components/MealDetail/List";
import { Subtitle } from "../components/MealDetail/Subtitle";
import { MealDetails } from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";

export const MealDetailScreen = ({ route, navigation }) => {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const mealID = route.params.mealID;
  const selectedMeal = MEALS.find((meal) => meal.id === mealID);

  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealID);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealID);
    } else {
      favoriteMealsCtx.addFavorite(mealID);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerRight: () => {
          return (
            <IconButton
              onPress={changeFavoriteStatusHandler}
              icon={mealIsFavorite ? "star" : "star-outline"}
              color="white"
            />
          );
        },
      },
      [navigation, changeFavoriteStatusHandler]
    );
  });
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
