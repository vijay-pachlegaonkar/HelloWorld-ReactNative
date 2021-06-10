import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View} from 'react-native';  
  
type Props = {};  
export default class App extends Component<Props> {  
  render() {  
    return (  
      <View>  
        <Text style={styles.welcome}>Hello World</Text>  
        <Text style={styles.welcome}>This is first react native app</Text>  
      </View>  
    );  
  }  
}  
const styles = StyleSheet.create({  
  welcome: {  
    fontSize: 20,  
    textAlign: 'center',  
    margin: 10,  
  }  
}); 
