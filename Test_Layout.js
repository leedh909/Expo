import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Test_Layout() {
  return (
    <View style={styles.container}>
      <View style={{width:'100%', height:'10%',backgroundColor:'red'}}></View>

      <View style={styles.container2}>
        <View style={{width:'50%',height:'40%',backgroundColor:'blue'}}></View>

        <View style={styles.container}>
          <View style={{width:'100%',height:'20%',backgroundColor:'yellow'}}></View>

          <View style={{flex:1, flexDirection: 'row' }}>
            <View style={{width:'50%',height:'25%',backgroundColor:'pink'}}></View>
            <View style={styles.container}>
              <View style={{width:'100%',height:'12.5%',backgroundColor:'green'}}></View>
              <View style={{width:'100%',height:'12.5%',backgroundColor:'black'}}></View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column'
  },
  container2: {
    flex: 1,
    flexDirection:'row'
  },
  
});
