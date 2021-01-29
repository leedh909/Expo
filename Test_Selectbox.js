import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker'

export default class Test_Selectbox extends Component {
    
  state = {
    position: '탑',
    champion: '',  
  }

  select_champion(){
    if(this.state.position === "탑"){
        return(
            <Picker 
                selectedValue={this.state.champion}
                onValueChange={champion=>this.setState({champion})}
                style={{ width: 160, postion: 'absolute',fontSize:10 }}
                mode="dropdown"
                itemStyle={{ color:'red', fontWeight:'900', fontSize: 18, padding:5}}>
                <Picker.Item label="다리우스" value="다리우스" />
                <Picker.Item label="가렌" value="가렌" />
            </Picker>
        );
    }else if(this.state.position === "정글"){
        return(
            <Picker 
                selectedValue={this.state.champion}
                onValueChange={champion=>this.setState({champion})}
                style={{ width: 160, postion: 'absolute',fontSize:10 }}
                mode="dropdown"
                itemStyle={{ color:'red', fontWeight:'900', fontSize: 18, padding:5}}>
                <Picker.Item label="리신" value="리신" />
                <Picker.Item label="녹턴" value="녹턴" />
            </Picker>
        );
    }else if(this.state.position === "미드"){
        return(
            <Picker 
                selectedValue={this.state.champion}
                onValueChange={champion=>this.setState({champion})}
                style={{ width: 160, postion: 'absolute',fontSize:10 }}
                mode="dropdown"
                itemStyle={{ color:'red', fontWeight:'900', fontSize: 18, padding:5}}>
                <Picker.Item label="루시안" value="루시안" />
                <Picker.Item label="제드" value="제드" />
            </Picker>
        );
    }else if(this.state.position === "봇"){
        return(
            <Picker 
                selectedValue={this.state.champion}
                onValueChange={champion=>this.setState({champion})}
                style={{ width: 160, postion: 'absolute',fontSize:10 }}
                mode="dropdown"
                itemStyle={{ color:'red', fontWeight:'900', fontSize: 18, padding:5}}>
                <Picker.Item label="케이틀린" value="케이틀린" />
                <Picker.Item label="베인" value="베인" />
            </Picker>
        );
    }else if(this.state.position === "서폿"){
        return(
            <Picker 
                selectedValue={this.state.champion}
                onValueChange={champion=>this.setState({champion})}
                style={{ width: 160, postion: 'absolute',fontSize:10 }}
                mode="dropdown"
                itemStyle={{ color:'red', fontWeight:'900', fontSize: 18, padding:5}}>
                <Picker.Item label="레오나" value="레오나" />
                <Picker.Item label="블크" value="블크" />
            </Picker>
        );
    }
  }
  
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <Text style={{ color:'black', fontWeight:'900', fontSize: 18, paddingTop:50}}> 포지션 </Text>
        <Picker
          selectedValue={this.state.position}
          onValueChange={position => this.setState({ position })}
          style={{ width: 160, postion: 'absolute',fontSize:10 }}
          mode="dropdown"
          itemStyle={{ color:'red', fontWeight:'900', fontSize: 18, padding:5}}>
          <Picker.Item label="탑" value="탑" />
          <Picker.Item label="정글" value="정글" />
          <Picker.Item label="미드" value="미드" />
          <Picker.Item label="봇" value="봇" />
          <Picker.Item label="서폿" value="서폿" />
        </Picker>

        <Text style={{ color:'black', fontWeight:'900', fontSize: 18, paddingTop:50}}> 챔피언 </Text>
            {this.select_champion()}
      </SafeAreaView>
    );
  }
}












// class SelectBox extends Component{
//     constructor(){
//         super();
//         this.state={
//           text:'',
//         };
//       }
    
//     render(){
        
//         return (
//             <View style={style.root}>
//                 <Text style={{marginTop:20}}>포지션:</Text>
//                 {/* <RNPickerSelect
//                     onValueChange={(value) => console.log(value)}
//                     items={[
//                         { label: '탑', value: '탑' },
//                         { label: '정글', value: '정글' },
//                         { label: '미드', value: '미드' },
//                         { label: '봇', value: '봇' },
//                         { label: '서폿', value: '서폿' },
//                     ]} 
//                     style={{fontSize:20}}
//                 /> */}

//                 <Picker 
//                     selectedValue={selectedValue}
//                     style={{height:50,width:150}}
//                     onValueChange={(itemValue, itemIndex)=> setSelectedValue(itemValue)}
//                 >
//                     <Picker.Item label="탑" value="탑"/>
//                     <Picker.Item label="정글" value="정글"/>
//                 </Picker>

              
//             </View>
//           );
//     }

//     changeText= (value)=>{
//         this.setState({text:value});
//     }

//     position (){
//         if(this.state.text==='탑'){
//             return <View></View>
//         }
//     }

  
      
// }    
    
// const style= StyleSheet.create({
//     root:{
//         flex:1,
//         padding:20,
//     },
    
//     TextInput:{
//         borderWidth:2,
//         backgroundColor:'white',
//         height:40,
//         fontSize:15,
//     },

//     plaintText:{
//         marginTop:20,
//         fontWeight:'bold',
//         marginTop:15,
//     },

// });

// export default SelectBox;