import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {NEXT} from '../../assets/images';
import {ChatUserList} from '../../store/actions/chatActions';



const BoxSendMsg = () => {
  const text = useFormInput('');
  const submit = useSubmit(text.value);

  return (
    <View style={styles.container}>
      <TextInput {...text} placeholder="Gõ tin nhắn của bạn..." style={styles.input} />
      <TouchableOpacity {...submit} style={styles.boxIcon}>
        <Image style={styles.icon} source={NEXT} />
      </TouchableOpacity>
    </View>
  )
};

export default BoxSendMsg;

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChangeText(text) {
    setValue(text);
  }
  return {
    value,
    onChangeText: handleChangeText
  }
}

function useSubmit(value) {
  function handleSubmit() {
    ChatUserList(value);
  }
  return {
    onPress: handleSubmit
  }
}





const row = {
  flexDirection: 'row',
  alignItems: 'center',
};

const alignCenter = {
  alignItems: 'center',
  justifyContent: 'center',
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 65,
    backgroundColor: '#f7f7f8',
    position: 'absolute',
    bottom: 30,
    left: 30,
    borderRadius: 30,
    ...row,
    justifyContent: 'space-between',
  },
  icon: {
    width: 25,
    height: 25,
  },
  input: {
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 25,
  },
  boxIcon: {
    ...alignCenter,
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 15,
    backgroundColor: '#5b61b9',
  },
});
