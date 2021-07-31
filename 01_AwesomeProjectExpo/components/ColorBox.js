import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ColorBox = ({ colorName, hexColor }) => {
  const boxColor = {
    backgroundColor: hexColor
  };

  return (
    <View style={[styles.box, boxColor]}>
      <Text style={styles.boxText}>
        {colorName}: {hexColor}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  boxText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ColorBox;
