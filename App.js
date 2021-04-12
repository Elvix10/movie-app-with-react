
import React, {useState} from 'react';
import { FlatList, StyleSheet, TouchableWithoutFeedback,Keyboard, View, Alert, TouchableNativeFeedbackComponent} from 'react-native';
import Header from './components/header'
import TaskToDo from './components/taskToDo'
import AddTaskToDo from './components/addTaskToDo'

export default function App() {

  const[todos,setTodos]= useState([{ text:'plan a trip', 
  key:1},{ text:'study for', 
  key: 2},{text:'train for', 
  key: 3}])

  const pressHandler= (key)=>{
    setTodos((prevTodos) =>{
      return prevTodos.filter(todo=> todo.key !=key)
    })
  }


  const submitHandler= (text) => {

    if(text.length>3 && text.length<100){
      setTodos((prevTodos)=> {
        return[
          {text: text, key:Math.random().toString()},
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
          <View style={styles.list}>

            <FlatList
                data={todos}
                renderItem={({item})=>(
                    <TaskToDo item={item} pressHandler={pressHandler}/>
                )}         
            />
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

    
  }
});
