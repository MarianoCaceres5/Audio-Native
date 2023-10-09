import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Sound from './Sound';
import { useState, useEffect } from 'react';
import sonidoBocina from '../assets/audioBocina.mp3'
import { Audio } from 'expo-av';

//https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3
//https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba-online-audio-converter.com_-1.wav

export default function SoundsGalery() {

    const [audios, setAudios] = useState([]);

    loadAudios = async () => {
        const listaAudios = [
            {title: 'Sonido Marimba', img: 'https://cdn5.vectorstock.com/i/1000x1000/68/44/a-musical-marimba-isolated-on-white-background-vector-1366844.jpg', sound: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3', type: 'url'},
            {title: 'Sonido Bocina',  img: 'https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-speaker-amplifier-shouting-illustration-image_1227050.jpg', sound: require('../assets/audioBocina.mp3'), type: 'media'}
        ]
        setAudios(listaAudios);
    }

    useEffect(() => {
        loadAudios();
    }, []);

    if(audios.length == 0){
        return(
            <></>
        )        
    }else{
        return (
            <ScrollView contentContainerStyle={styles.container}>
                {audios.map((audio, i) => (
                    <Sound key={i} audioObject={audio}/>
                ))}            
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});