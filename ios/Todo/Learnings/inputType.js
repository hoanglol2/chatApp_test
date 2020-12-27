// // learning InputType
// export default function App() {

//   const [name, setName] = useState('shaun');
//   const [age, setAge] = useState(22);

//   const handleChangeName = (val) => {
//     setName(val);
//   }

//   const handleChangeAge = (val) => {
//     setAge(val);
//   }

//   // onChangeText={(val) => { setName(val) } | inline function
//   return (
//     <View style={styles.container}>
//       <Text>Enter name:</Text>
//       <TextInput
//         multiline
//         style={styles.input}
//         placeholder='e.g. John Doe'
//         onChangeText={handleChangeName}></TextInput>

//       <Text>Enter age:</Text>
//       <TextInput
//         keyboardType='numeric'
//         style={styles.input}
//         placeholder='e.g. 99'
//         onChangeText={handleChangeAge}></TextInput>
//       <Text>name: {name}, age: {age}</Text>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#777',
//     padding: 8,
//     margin: 10,
//     width: 200,
//   }

// });


