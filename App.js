import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {
  const [enteredText, setEnteredText] = useState('')
  const [toDoList, setToDoList] = useState([])

  function handleGoalTextInput(textInput) {
    setEnteredText(textInput)
  }

  function handleAddToDo() {
    if (enteredText != '') {
      setToDoList((currentToDoList) => [...currentToDoList, enteredText])
      setEnteredText('')
    }

  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainter}>
        <Text style={styles.titleTextStyle}>To Do List</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.inputTaskContainer}>
          < TextInput style={styles.inputStyle} placeholder='Give me tasks' onChangeText={handleGoalTextInput} value={enteredText} />
          <Button title='Tap me!!' onPress={handleAddToDo} />
        </View>
        <View style={styles.listContainer}>
          <Text style={{ fontSize: 25, paddingBottom: '5%' }}>List:</Text>
          <FlatList
            data={toDoList}
            renderItem={(itemData) => {
              return (
                <View style={styles.toDoListViewContainer}>
                  <Text style={styles.toDoListTextStyle}>{itemData.item}</Text>
                </View>
              )
            }} />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: '10%',
    padding: '5%'
  },
  titleContainter: {
    flex: 1,
    alignItems: 'center',
    padding: '5%'
  },
  titleTextStyle: {
    fontSize: 30
  },
  contentContainer: {
    flex: 15,
    justifyContent: ''
  },
  inputTaskContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    marginBottom: '5%'
  },
  inputStyle: {
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: '2%'
  },
  listContainer: {
    flex: 12,
  },
  toDoListViewContainer: {
    backgroundColor: 'darkblue',
    borderWidth: 1,
    marginVertical: 5,
    padding: 5,
    borderRadius: 5
  },
  toDoListTextStyle: {
    color: 'white'
  }
});
