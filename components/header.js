import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
    return (
      <View style={styles.header}>
         <Text style={styles.title}>TodoList</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    header: {     
      height:80,
      paddingTop: 38,
      backgroundColor: 'red',
    },
    title:{
        textAlign: 'center',
        fontSize:20,
        fontWeight: '800',
        color: 'black',
        
        marginBottom: 16
    }
  });