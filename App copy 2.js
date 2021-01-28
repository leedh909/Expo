import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
   <View style={{ flex:1, backgroundColor: 'red'}}>

      <View style={{ flex:1, backgroundColor: 'grey'}}></View>

      <View style={{ flex:1, flexDirection: 'row', backgroundColor: 'pink'}}>
        <View style={{ flex:1, backgroundColor: 'yellow'}}></View>

        <View style={{ flex:1, backgroundColor: 'blue'}}>
        <View style={{ flex:1, backgroundColor: 'sky-blue'}}></View>
        <View style={{ flex:1, backgroundColor: 'black'}}>

          
        </View>


        </View>
      </View>
   </View>
  );
}
