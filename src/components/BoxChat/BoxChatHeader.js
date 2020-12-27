import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TopDirectionTab from '../TopDirectionTab/TopDirectionTab';
import TopInfoTab from '../TopInfoTab/TopInfoTab';

const BoxChatHeader = ({onPress}) => (
  <View style={styles.container}>
    <TopDirectionTab onPress={onPress} />
    <TopInfoTab />
  </View>
);

export default BoxChatHeader;

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
});
