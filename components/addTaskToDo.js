import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput ,TouchableOpacity} from 'react-native';


export default function AddTaskToDo({submitHandler}){
    const[task,setTask]=useState('')

    const changeHandler = (val)=>{
        setTask(val)
    }

    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder= 'put your task here'
                onChangeText={changeHandler}
            />
            <TouchableOpacity 
                style={[styles.create, {backgroundColor: '#00FF7F'}]}
                onPress={()=>submitHandler(task)}
                 >
                    <Text style={{color:'white', fontWeight: '600'}}>Create!!</Text>
                </TouchableOpacity>
        </View>
    )
}


const styles= StyleSheet.create({
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#20B2AA',
        borderRadius: 6,
        height: 50,
        marginTop: 8,
        paddingHorizontal: 16,
        fontSize: 18
    },
    create: {
        marginTop:24,
        height: 50,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
})