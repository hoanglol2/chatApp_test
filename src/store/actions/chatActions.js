import IO from 'socket.io-client';
import {API_URI} from './types';
import React, {useState} from 'react';

// socket config
export const socket = IO(`${API_URI}`, {
  forceNew: true,
});

socket.on('connection', () => console.log('connected'));

// export const socket = IO(`${API_URI}`, {
//   forceNew: true,
// });
// export const ChatUserList = (data) => {
//   socket.emit('getUsers', data);
// };
// export const ClearActiveMsgs = () => async (dispatch) => {};
// export const SentMsg = () => {
//   const [data, setData] = useState('');

//   socket.on('server-send-data', (data) => {
//     setData(data);
//   });
//   return data;
// };

export const ChatUserList = () => {
  socket.emit('getUsers');
};

export const LoadMessage = () => async (dispatch) => {};
export const UniqueUserChat = () => async (dispatch) => {};
export const OniqueUserChat = () => async (dispatch) => {};
export const HandleDispatchMsg = () => async (dispatch) => {};
export const LoadRoomMsgs = () => async (dispatch) => {};
