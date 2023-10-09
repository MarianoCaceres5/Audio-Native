import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect } from 'react';
import SoundsGalery from './src/SoundsGalery';

//https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3
//https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba-online-audio-converter.com_-1.wav

export default function App() {

  return (
    <View style={styles.container}>
      <SoundsGalery/>
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