import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const names = ["Adam", "Bob", "Claire", "Dinah", "Edward", "Florence", "Gerald", "Helen", "Ivy", "June","Karen"];

export default function App() {
  
  function displayNames(){
    let nameJSX = [];
    let name;
    for (name of names){
      nameJSX.push(<Text>{name}</Text>);
    }
    return nameJSX;
  }
  
  return (
    <View style={styles.container}>
      {displayNames()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
