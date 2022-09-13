import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  const [recording,setRecording]=React.useState();
  const [recordings,setRecordings]=React.useState([]);
  const [message,setMessage]=React.useState("");

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <
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
