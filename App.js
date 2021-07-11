import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama:'',
      email:'',
      password:'',
    };
  }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor:'#212121',
        justifyContent:'center'
      }}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <Text style={{textAlign:'center', fontSize:22, fontWeight:'bold', color:'#ffffff', marginBottom:20}}>Register</Text>

      <TextInput placeholder='Masukkan nama' placeholderTextColor='#ffffff' value={this.state.nama} onChangeText={text => this.setState({nama: text})}
      style={{
        borderBottomWidth:1,
        marginBottom:10,
        marginHorizontal:20,
        color:'#ffffff',
        borderBottomColor:'#ffffff'
      }}
       />
      <TextInput placeholder='Email' placeholderTextColor='#ffffff' value={this.state.email} onChangeText={text => this.setState({email: text})} 
        style={{
        borderBottomWidth:1,
        marginBottom:10,
        marginHorizontal:20,
        color:'#ffffff',
        borderBottomColor:'#ffffff'
      }}
      />
      <TextInput placeholder='Password' placeholderTextColor='#ffffff' value={this.state.password} secureTextEntry onChangeText={text => this.setState({password: text})} 
        style={{
        borderBottomWidth:1,
        marginBottom:10,
        marginHorizontal:20,
        color:'#ffffff',
        borderBottomColor:'#ffffff'
      }}
      />


      <TouchableOpacity
      style={{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2196f3',
        marginHorizontal:20,
        paddingVertical: 10,
        borderRadius:6,
        elevation: 3,
        marginTop:20,

      }}>
        <Text style={{color:'#ffffff'}}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2196f3',
        marginHorizontal:20,
        paddingVertical: 10,
        borderRadius:6,
        elevation: 3,
        marginTop:10
      }}>
        <Text style={{color:'#ffffff'}}>Login</Text>
      </TouchableOpacity>

      </View>
    );
  }
}
