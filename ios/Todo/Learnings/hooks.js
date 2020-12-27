// // learning Hooks.

// export default function App() {

//   const [name, setName] = useState('shaun');
//   const [person, setPerson] = useState({ name: 'mario', age: 40 });

//   const clickHandle = () => {
//     setName('Chun-li');
//     setPerson({ name: 'Duy Hoàng', age: 22 })
//   }

//   return (
//     <View style={styles.container}>
//       <Text>My name is {name}</Text>
//       <Text>His name is {person.name} and his age is {person.age}</Text>

//       <View style={styles.buttonContainer}>
//         <Button title="Update state" onPress={clickHandle}></Button>
//       </View>
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
//   buttonContainer: {
//     marginTop: 20
//   }
// });