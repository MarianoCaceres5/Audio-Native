import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Sound from "./Sound";
import { useState, useEffect } from "react";
import sonidoBocina from "../assets/audioBocina.mp3";
import { Audio } from "expo-av";

//https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3
//https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba-online-audio-converter.com_-1.wav

export default function SoundsGalery() {
  const [audios, setAudios] = useState([]);

  loadAudios = async () => {
    const listaAudios = [
      {
        title: "Sonido Marimba",
        img: require('../assets/marimba.jpg'),
        sound: "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
        type: "url",
      },
      {
        title: "Sonido Bocina",
        img: require('../assets/bocina.jpg'),
        sound: require("../assets/audioBocina.mp3"),
        type: "media",
      },
      {
        title: "Cucaracha",
        img: require('../assets/cucaracha.png'),
        sound: require("../assets/ringtones-la-cucaracha-3.mp3"),
        type: "media",
      },
    ];
    setAudios(listaAudios);
  };

  useEffect(() => {
    loadAudios();
  }, []);

  return (
    <SafeAreaView >
      <ScrollView vertical={true} contentContainerStyle={styles.audiosContainer}>
        {audios.map((audio, i) => (
          <Sound key={i} audioObject={audio} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  audiosContainer: {
    backgroundColor: "#fff",
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    paddingVertical: 40,
  },
});
