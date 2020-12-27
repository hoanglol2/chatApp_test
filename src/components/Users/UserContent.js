import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import BoxChat from '../BoxChat/BoxChat';
import {AVATAR1, AVATAR2, AVATAR3, AVATAR4, AVATAR5} from '../../assets/images';

const contentBoxChat = [
  {
    src: AVATAR1,
    name: 'Ahoang Nguyễn',
    time: '18:32',
    text: 'Tối sang nhà tao ăn cơm nhé...',
  },
  {
    src: AVATAR2,
    name: 'Ngọc Trinh',
    time: '4:00',
    text: 'Anh hoàng ơi cho em xin số điện thoại...',
  },
  {
    src: AVATAR3,
    name: 'Sơn tùng MTP',
    time: '8:00',
    text: 'Em hát xong anh em mình đi uống bia...',
  },
  {
    src: AVATAR4,
    name: 'Kiều Linh',
    time: '14:00',
    text: 'Oki anh ơi...',
  },
  {
    src: AVATAR5,
    name: 'Gia Bảo',
    time: '9:44',
    text: 'Nhất trí...',
  },
];

const UserContent = ({onPress}) => (
  <View style={styles.container}>
    <ScrollView>
      {contentBoxChat.map(({src, name, time, text}, index) => (
        <BoxChat
          onPress={onPress}
          key={index}
          source={src}
          title={name}
          time={time}
          text={text}
        />
      ))}
    </ScrollView>
  </View>
);

export default UserContent;

const styles = StyleSheet.create({
  container: {
    flex: 7,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
});
