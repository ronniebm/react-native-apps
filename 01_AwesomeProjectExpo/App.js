import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import ColorBox from './components/ColorBox';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.text}>Here are some boxes of different colors</Text>
        <ColorBox colorName="Cyan" hexColor="#2aa198" />
        <ColorBox colorName="Blue" hexColor="#268bd2" />
        <ColorBox colorName="Magenta" hexColor="#d33682" />
        <ColorBox colorName="Orange" hexColor="#cb4b16" />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 40
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  }
})

export default App;