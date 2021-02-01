import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Test_Layout from './Test_Layout';
import Test_Input from './Test_Input';
import Test_Selectbox from './Test_Selectbox';
import Test_Api from './Test_Api';
import Test_find from './Test_find';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="1.Test_Layout" component={Test_Layout}  />
      <Tab.Screen name="2.Test_Input" component={Test_Input}  />
      <Tab.Screen name="3.Test_Selectbox" component={Test_Selectbox}  />
      <Tab.Screen name="4.Test_Api" component={Test_Api}  />
      <Tab.Screen name="5.Test_find" component={Test_find}  />
    </Tab.Navigator>
  );
}

export default function Test_All() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
