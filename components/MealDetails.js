import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const MealDetails = ({ duration, complexity, affordability }) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{duration}m</Text>
      <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailItem: {
    marginHorizontal: 4,
    paddingBottom: 8,
    fontSize: 12,
  },
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
});
