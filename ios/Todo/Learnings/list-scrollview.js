/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

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
    { name: 'sha1', key: '1' },
    { name: 'sha2', key: '2' },
    { name: 'sha3', key: '3' },
    { name: 'sha4', key: '4' },
    { name: 'sha5', key: '5' },
    { name: 'sha6', key: '6' },
    { name: 'sha7', key: '7' },
  ]);


  return (
    <View style={styles.container}>
      <ScrollView>
        {
          people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
          )
        }
      </ScrollView>
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