import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av';
import { useState, useEffect } from 'react';

export default function Sound({audioObject}) {

    const [sound, setSound] = useState();

    let playSound = async () => {
        console.log('Loading Sound:', audioObject.sound);
        if(audioObject.type === 'url'){
            const { sound } = await Audio.Sound.createAsync({ uri: audioObject.sound }, { volume: 0.8 },);
            setSound(sound);
            console.log('Playing Sound');
            await sound.playAsync();
        }else{
            const { sound } = await Audio.Sound.createAsync(audioObject.sound)
            setSound(sound);
            console.log('Playing Sound');
             await sound.playAsync();
        }
    }

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        // <TouchableOpacity onPress={() => playSound()}>            
        //     
        // </TouchableOpacity>
        <>
            <Text>{audioObject.title}</Text>
            <Button title='Play Sound' onPress={playSound}></Button>
        </>
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