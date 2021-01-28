import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';

class Input extends Component{
    constructor(){
        super();
        this.state={
          text:'',
        };
      }
    render(){
        return (
            <View style={style.root}>
              <Text style={{marginTop:30,fontSize:20}}>입력1</Text><TextInput style={style.TextInput} onChangeText={this.changeText}></TextInput>
              <Text style={style.plaintText}>입력1의값:{this.state.text}</Text>
            </View>
          );
    }

    changeText= (value)=>{
        this.setState({text:value});
    }
      
}    
    
const style= StyleSheet.create({
    root:{
        flex:1,
        padding:20,
    },
    
    TextInput:{
        borderWidth:2,
        backgroundColor:'white',
        height:40,
        fontSize:15,
    },

    plaintText:{
        marginTop:20,
        fontWeight:'bold',
        marginTop:15,
    },

});


export default Input;