import React from 'react';
import {View, StyleSheet, ScrollView, Text, Image} from 'react-native';
import BoxSendMsg from '../BoxSendMsg/BoxSendMsg';
import {AVATAR1} from '../../assets/images';

// import {SentMsg} from '../../store/actions/chatActions';

const dataMessages = [
  {status: true, avatar: AVATAR1, message: 'Xin chào bạn?', time: '18: 35'},
  {status: false, avatar: AVATAR1, message: 'Ơi tôi đây!', time: '18: 39'},
  {
    status: true,
    avatar: AVATAR1,
    message: 'Rất vui được làm quen với bạn!',
    time: '18: 39',
  },
];

{
  /* <ScrollView>
      {dataMessages.map(({status, avatar, message, time}, index) => (
        <View key={index}>
          {status ? (
            <View style={styles.wrapBoxMsg}>
              <View style={styles.wrapImage}>
                <Image style={styles.image} source={avatar} />
                <Text style={styles.text}>{message}</Text>
              </View>
              <Text style={styles.textTime}>{time}</Text>
            </View>
          ) : (
            <View style={styles.wrapBoxMsg}>
              <Text style={styles.textTime}>{time}</Text>
              <Text style={styles.textMessage}>{message}</Text>
            </View>
          )}
        </View>
      ))}
    </ScrollView> */
}

const BoxChatMain = () => {
  // const data = SentMsg();

  // console.log(data);

  return (
    <View style={styles.container}>
      {/* {data == "" ? null : (<View style={styles.wrapBoxMsg}>
        <View style={styles.wrapImage}>
          <Image style={styles.image} source={AVATAR1} />
          <Text style={styles.text}>{data}</Text>
        </View>
        <Text style={styles.textTime}>13: 00</Text>
      </View>)} */}

      {/* {data == '' ? null : (
        <View style={styles.wrapBoxMsg}>
          <Text style={styles.textTime}>14: 00</Text>
          <Text style={styles.textMessage}>{data}</Text>
        </View>
      )} */}
      <Text>cho du lieu</Text>

      <BoxSendMsg />
    </View>
  );
};

export default BoxChatMain;

const row = {
  flexDirection: 'row',
  alignItems: 'center',
};

const align = {
  alignItems: 'center',
  justifyContent: 'center',
};

const styles = StyleSheet.create({
  container: {
    flex: 7,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 40,
    position: 'relative',
  },
  wrapBoxMsg: {
    ...row,
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  wrapImage: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  image: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  text: {
    height: 67,
    backgroundColor: '#f7f7f8',
    lineHeight: 67,
    paddingHorizontal: 15,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    fontSize: 16,
    fontWeight: '600',
  },
  textTime: {
    fontSize: 13,
    color: '#333',
    fontWeight: '600',
  },
  textMessage: {
    height: 67,
    backgroundColor: '#f7f7f8',
    lineHeight: 67,
    paddingHorizontal: 15,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50,
    fontSize: 16,
    fontWeight: '600',
  },
});
