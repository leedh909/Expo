import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function AScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>A Screen</Text>
    </View>
  );
}

function BScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>B Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="AScreen" component={AScreen} style={{fontSize:30}}/>
      <Tab.Screen name="BScreen" component={BScreen} style={{fontSize:30}}/>
    </Tab.Navigator>
  );
}

export default function navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

// import * as React from 'react';
// import 'react-native-gesture-handler';
// import {Text, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// function AScreen(){
//     return(
//         <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
//             <Text>A Screen 입니다.</Text>
//         </View>
//     );
// }
// function BScreen(){
//     return(
//         <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
//             <Text>B Screen 입니다.</Text>
//         </View>
//     );
// }

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//     return (
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     );
//   }

// export default function Navigation() {
    
//     return(
//         <div>
//             <NavigationContainer>
//                 <MyTabs />
//             </NavigationContainer>
//         </div>
//     );
// }
