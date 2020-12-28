import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import BoxChat from '../BoxChat/BoxChat';
import {AVATAR1, AVATAR2, AVATAR3, AVATAR4, AVATAR5} from '../../assets/images';

const users = [
  {
    _id: '1',
    source: AVATAR1,
    title: 'Ahoang Nguyễn',
    time: '18:32',
    text: 'Tối sang nhà tao ăn cơm nhé...',
  },
  {
    _id: '2',
    source: AVATAR2,
    title: 'Ngọc Trinh',
    time: '4:00',
    text: 'Anh hoàng ơi cho em xin số điện thoại...',
  },
  {
    _id: '3',
    source: AVATAR3,
    title: 'Sơn tùng MTP',
    time: '8:00',
    text: 'Em hát xong anh em mình đi uống bia...',
  },
  {
    _id: '4',
    source: AVATAR4,
    title: 'Kiều Linh',
    time: '14:00',
    text: 'Oki anh ơi...',
  },
  {
    _id: '5',
    source: AVATAR5,
    title: 'Gia Bảo',
    time: '9:44',
    text: 'Nhất trí...',
  },
];

const UserContent = ({onPress}) => {
  const [loadUsers, setLoadUsers] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadUsers(true);
    }, 1200);
  }, []);

  return (
    <View style={styles.container}>
      {loadUsers ? (
        <>
          {users.length > 0 ? (
            <FlatList
              keyExtractor={({_id}) => _id.toString()}
              showsVerticalScrollIndicator={false}
              data={users}
              numColumns={1}
              renderItem={({item: {_id, source, title, time, text}}) => (
                <>
                  <BoxChat {...{_id, source, title, time, text, onPress}} />
                </>
              )}
            />
          ) : (
            <View>
              <Text>Không có tin nhắn nào?</Text>
            </View>
          )}
        </>
      ) : (
        <ActivityIndicator size="large" color="#00ff00" />
      )}
    </View>
  );
};

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
