import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Button, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { set } from 'react-native-reanimated';
import axios from 'axios';

export default class Test_find extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        isLoading: true,
        items:[],    
        select_v:'Title',
        result:'',
        input_v:'',
    };
  }

  componentDidMount() {
    return (
      // fetch('https://reactnative.dev/movies.json')
      // .then(response => response.json())
      // .then(responseJson => {
      //   this.setState(
      //     {
      //       items:responseJson.movies,
      //       isLoading: false,
      //     },
      //   );
      // })
      // .catch(error => {
      //   console.error(error);
      // })
      axios({
        url:'https://reactnative.dev/movies.json',
        method:'get',
      }).then((response)=>{
        this.setState({
          items:response.data.movies,
          isLoading: false,
        });
      })
      
    )
  }

  select_click = (e) =>{
      //alert(this.state.input_v);
      if(this.state.select_v === 'Title'){
        for(let i=0;i < this.state.items.length;i++){
            // alert("타이틀"+this.state.items[i].title);
          if(this.state.items[i].title.toString()===this.state.input_v.toString()){
              setTimeout(()=>{
                  // alert('들어옴');
                  this.setState({
                      result: this.state.items[i].title + ' / ' + this.state.items[i].releaseYear
                  });
              }, 0);
              break;
          }else{
            this.setState({
              result: '검색하신 값이 없습니다.',
            });
          }
        }
        if(this.state.result===''){
            //alert('검색 값 없을때');
            this.setState({
                result:'검색하신 값이 없습니다.',
            });
        }
      }else{
        for (let i = 0; i < this.state.items.length; i++) {
            if (this.state.items[i].releaseYear.toString() === this.state.input_v.toString()) {
                
              setTimeout(()=>{
                this.setState({
                  result: this.state.items[i].title + ' / ' + this.state.items[i].releaseYear,
                });
                // alert(this.state.result);
              },1);
              break;
            }else{
              this.setState({
                result: '검색하신 값이 없습니다.',
              });
            }
          }
          if (this.state.result === '') {
            this.setState({
              result: '검색하신 값이 없습니다.',
            });
          }
      }
  }

  inputChange = (value) =>{
      this.setState({
        input_v:value,
      });
  }

  render() {
    if (this.state.isLoading) {
        return (
            <View style={{ flex: 1, padding: 20 }}>
            <ActivityIndicator />
            </View>
        );
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <Text style={{ color:'black', fontWeight:'900', fontSize: 18, paddingTop:50}}> 선택항목 </Text>
        <Picker
          selectedValue={this.state.select_v}
          onValueChange={select_v => this.setState({ select_v })}
          style={{ width: 160, postion: 'absolute',fontSize:10 }}
          mode="dropdown"
          itemStyle={{ color:'red', fontWeight:'900', fontSize: 18, padding:5}}>
          <Picker.Item label="Title" value="Title" />
          <Picker.Item label="Year" value="Year" />
        </Picker>

        <TextInput 
            onChangeText={this.inputChange} 
            style={{borderWidth:2,backgroundColor:'white',width:'70%',height:40,fontSize:15,margin:10}} 
            placeholder="검색하실 값을 입력해주세요"
        ></TextInput>

        <Button 
            type="button" 
            title="검색" 
            onPress={this.select_click}
        ></Button>

        <Text style={{padding:30}}>결과: {this.state.result}</Text>

      </View>
    );
  }
}