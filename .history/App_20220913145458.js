import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {Audio} from 'expo-av'

export default function App() {
  const [recording,setRecording]=React.useState();
  const [recordings,setRecordings]=React.useState([]);
  const [message,setMessage]=React.useState("");

  async function startRecording(){
  try{
    const permission=await Audio.requestPermissionsAsync();
    if (permission.status==="granted"){
      await Audio.setAudioModeAsync({
        allowRecordingAPK: true,
        playsInSilentModeAPK:true
      });
      const { recording } =await Audio
    }
  }catch(err){
    console.error('failed to start Recording,err')
  }
  }
  async function stopRecording(){

  }

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <Button
      title={recording ? 'Stop Recording':'Start Recording'}
      onPress={recording ? stopRecording: startRecording}/>
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
