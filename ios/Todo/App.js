/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Headerx from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


// learning Todo app
export default function App() {

  const [todos, setTodos] = useState([
    { text: 'Buy coffe', key: '1' },
    { text: 'Buy tea', key: '2' },
    { text: 'Buy water', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => { // prevTodos danh sách gốc.
      return prevTodos.filter(todo => todo.key != key); // todo là các obj.
    });
  }

  const submitHandler = (text) => {

    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [ // trả về 1 mảng mới.
          { text: text, key: Math.random().toString() }, // key là random && chuyển sang kiểu string.
          ...prevTodos // express... là coppy nguyên thành phần của danh sách.
        ]
      });
    } else {
      Alert.alert('Rất tiếc', 'Vui lòng nhập trên 3 kí tự', [
        { text: 'Đóng', onPress: () => console.log('Đã đóng') }
      ])
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        // console.log('Dismissed keyboard')
      }}>
      <View style={styles.container}>
        {/* header */}
        <Headerx />
        <View style={styles.content}>
          {/* to form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler}></TodoItem>
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
    padding: 40
  }

});


