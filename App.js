import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function App() {
  const [enteredText, setEnteredText] = useState('')
  const [toDoList, setToDoList] = useState([])

  function handleGoalTextInput(textInput) {
    setEnteredText(textInput)
  }

  function handleAddToDo() {
    setToDoList((currentToDoList) => [...currentToDoList, enteredText])
    setEnteredText('')
  }

  return (
    <KeyboardAwareScrollView>
    <View style={styles.appContainer}>
      <View style={styles.titleContainter}>
        <Text style={styles.titleTextStyle}>To Do List</Text>
      </View>
      <View style={styles.taskContainer}>
        < TextInput style={styles.inputStyle} placeholder='Give me tasks' onChangeText={handleGoalTextInput} value={enteredText}/>
        <Button title='Tap me!!' onPress={handleAddToDo}/>
      </View>
      <View style={styles.listContainer}>
        <Text>List:</Text>
        {toDoList.map((toDoItem, toDoIndex) => <Text key={toDoIndex}>{toDoItem}</Text>)}
      </View>
    </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: '10%',
    padding: '5%'
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
