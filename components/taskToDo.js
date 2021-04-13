import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function TaskToDo({item, pressHandler}){
    return(
        <TouchableOpacity onPress = {()=> pressHandler(item.key)}>

            <Text style={styles.item}>{item.task}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    item: {  
      padding:16,  
      paddingTop: 16,
      borderColor: 'green',
      borderWidth: 1,
      borderStyle: 'dashed',
      borderRadius: 10
    },
    title:{
        textAlign: 'center',
        fontSize:20,
        fontWeight: '800',
        color: 'black',
        
        marginBottom: 16
    }
  });
