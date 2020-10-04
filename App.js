
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Header } from './components/Header';
import { TodoItem } from './components/TodoItem';
import { AddTodo } from './components/AddTodo';
import { useAsyncStorage } from '@react-native-community/async-storage';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width  - 50;

export default function App() {
  const [todos, setTodos] = useState([
    {key: '1', text: "Add your today todo here"},
  ]);

  
  
  // get todo locally when page load and set in variable
  useEffect(() => {
    getTodoLocal();
  }, [])

  // when todos variable change local data also changed
  useEffect(() => {
    setTodoLocal(todos);
  }, [todos])

  // save locally in device
  const setTodoLocal = async (todos) => {
    try {
      await useAsyncStorage('todos').setItem(JSON.stringify(todos));
    } catch (error) {
      console.log(error.message);
    }
  }

  // get locally from device
  const getTodoLocal = async () => {
    try {
      await useAsyncStorage('todos').getItem((err, res) =>{
        if(!err) {
          if(res != undefined && res != null){
            setTodos( JSON.parse(res));
          }
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {
    let newKey = todos.length + 1;
    console.log(text);
    setTodos((prevTodos) => {
        return [
          {text: text, key: newKey.toString()},
          ...prevTodos
        ]
    });
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
          style={styles.flatlist}
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 25,
  },
  list: {
    marginTop:40,
    alignItems: 'center',
  },
  flatlist: {

  }
});
