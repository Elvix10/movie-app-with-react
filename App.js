 
import React, {useState, useEffect} from 'react';
import {StyleSheet, TouchableWithoutFeedback,Keyboard, View, Alert, Text,ScrollView} from 'react-native';
import Header from './components/header'

import TaskToDo from './components/taskToDo'
import AddTaskToDo from './components/addTaskToDo'
import {database} from './Fire'

export default function App() {

  const[todos,setTodos]= useState([])

  useEffect(()=>{

        database.collection('todos').onSnapshot((query)=>{
        const list=[]        
        query.forEach((doc)=>{

            const newTask=doc.data()
            newTask.id=doc.id
            list.push(newTask)            
        })
        setTodos(list)
    })
  },[])
  
  const pressHandler= (id)=>{

    setTodos((prevTodos) =>{      
      return prevTodos.filter(todo=> todo.id !=id)
    })
  }
  const submitHandler= (text) => {

    if(text.length>3 && text.length<100){
      setTodos((prevTodos)=> {
        return[
          {task: text, },
          ...prevTodos]
    })
    } else {
      Alert.alert('Wrong Input','your must be between 3 and 100 character',[
        {text:'OK!', onPress:()=>console.log('alert close')}
      ])
    }  
  }

  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTaskToDo submitHandler={submitHandler}/>

        <View style={styles.divider}/>

        <Text style={styles.title}> Tasks
            <Text style={{fontWeight:'300', color: '#40E0D0'}}>List</Text>
        </Text>

        <View style={styles.divider}/>

          <View style={styles.list}>

              <ScrollView>
                {todos.map((todo)=>{
                  return (
                    <TaskToDo 
                      item={todo} 
                      pressHandler={pressHandler}
                    />
                    )
                })}

              </ScrollView>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40, 
  },
  list:{
    marginTop: 20, 
  },
  divider: {
    backgroundColor: '#40E0D0',
    height:1,
    flex:1,
    alignSelf:'center'
  }, 
  title: {
    fontSize:38,
    fontWeight:'800',
    color: 'black',
    paddingHorizontal: 64
  },
  item: {  
    padding:16,  
    paddingTop: 16,
    borderColor: 'green',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10
  },
});
