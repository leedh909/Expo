import React from 'react';
import { View } from 'react-native';
import Test_All from './Test_All';

export default class App extends React.Component {
  
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <Test_All/>
      </View>
    );
  }
}