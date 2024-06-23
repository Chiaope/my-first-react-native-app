import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainter}>
        <Text style={styles.titleTextStyle}>To Do List</Text>
      </View>
      <View style={styles.taskContainer}>
        < TextInput style={styles.inputStyle} placeholder='Give me tasks'/>
        <Button title='Tap me!!' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    marginVertical: '15%',
    margin: '5%'
  },
  titleContainter: {
    alignItems: 'center',
    padding: '5%'
  },
  titleTextStyle: {
    fontSize: 30
  },
  taskContainer: {
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1%'
  },
  inputStyle: {
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: '2%'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
