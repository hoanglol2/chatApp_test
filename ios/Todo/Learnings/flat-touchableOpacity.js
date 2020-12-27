/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



// learning InputType
export default function App() {

  const [people, setPeople] = useState([
    { name: 'sha1', id: '1' },
    { name: 'sha2', id: '2' },
    { name: 'sha3', id: '3' },
    { name: 'sha4', id: '4' },
    { name: 'sha5', id: '5' },
    { name: 'sha6', id: '6' },
    { name: 'sha7', id: '7' },
  ]);

  const pressHandler = (id) => {
    // console.log(id);
    // sử dụng filter để trả về 1 mảng các dữ liệu thỏa mãn dk.
    // nhờ ứng dụng đó mà ta set lại value.
    setPeople((prevPeople) => { // prevPeople là dữ liệu gốc.
      // trong filter này có dk là id(click) != id của nó, nên dữ liệu sẽ không phù hợp.
      return prevPeople.filter(person => person.id != id);
    });
  }

  return (
    <View style={styles.container}>

      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id} // lấy id => chuyển đổi sang key của component.
        data={people} // list.
        renderItem={({ item }) => ( // các phần tử sau khi duyệt. {ở đây là các obj}
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}></FlatList>

      {/* <ScrollView>
        {
          people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
          )
        }
      </ScrollView> */}
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});


