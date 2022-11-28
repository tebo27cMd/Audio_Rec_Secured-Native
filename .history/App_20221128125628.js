import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Rec from './recorder';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
           <Stack.Navigator>
           <Stack.Screen name="recorder" component={ Re} />
           </Stack.Navigator>
    </NavigationContainer>
  )
}