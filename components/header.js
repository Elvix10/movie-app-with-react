import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
    return (
      <View style={styles.header}>
         <Text>TodoList</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    header: {
      flex: 1,
      height:30,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });