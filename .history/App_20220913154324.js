import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {Audio} from 'expo-av';

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
      const { recording } =await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH-QUALITY
      );
      setRecording(recording);
    }else{
      setMessage("Please grant permission to app to access mic");
    }
  }catch(err){
    console.error('failed to start Recording,err')
  }
  }
  async function stopRecording(){
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    let updatedRecordings=[...recordings];
    const{sound,status}=await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound:sound,
      duration: getDurationFormatted(status.durationMillis),
      file:recording.getURI()
    });
    setRecordings(updatedRecordings)
  }
 function getDurationFormatted(millis){
  const minutes=millis/1000/60;
  const minutesDisplay=math.floor(minutes);
  const seconds = Math.round((minutes-minutesDisplay)*60);
  const secondsDisplay=seconds<10? `0${seconds}` : seconds;
  return `${minutesDisplay}:${secondsDisplay}`;

}
function getRecordingLines(){
  return recordings.map((recordingLine,index)
  =>{
    return{
      <View key={index} style={styles.row}>

      </View>
    };
  });
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
