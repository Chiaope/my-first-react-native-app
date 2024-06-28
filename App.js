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
      <View style={styles.listContainer}>
        <Text>List:</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginVertical: '15%',
    margin: '5%'
  },
  titleContainter: {
    // flex: 1,
    alignItems: 'center',
    padding: '5%'
  },
  titleTextStyle: {
    fontSize: 30
  },
  taskContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1%',
    borderBottomWidth: 1,
    marginBottom: '5%'
  },
  inputStyle: {
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: '2%'
  },
  listContainer: {
    flex: 15
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
