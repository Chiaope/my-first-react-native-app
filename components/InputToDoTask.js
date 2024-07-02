import { useState } from "react"
import { StyleSheet, View, TextInput, Button } from "react-native"

function InputToDoTask(props) {
    const [enteredText, setEnteredText] = useState('')

    function handleGoalTextInput(textInput) {
        setEnteredText(textInput)
    }

    function handleAddToDo() {
        if (enteredText != '') {
            props.updateList((currentToDoList) => [...currentToDoList, {text: enteredText, id: Math.random()}])
            setEnteredText('')
        }
    }

    return(
        <View style={styles.inputTaskContainer}>
            < TextInput style={styles.inputStyle} placeholder='Give me tasks' onChangeText={handleGoalTextInput} value={enteredText} />
            <Button title='Tap me!!' onPress={handleAddToDo} />
        </View>
    )
}

export default InputToDoTask

const styles = StyleSheet.create({
    inputTaskContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingBottom: '2%'
    },
    inputStyle: {
        borderWidth: 1,
        width: '80%',
        height: '80%',
        paddingHorizontal: '2%'
    },
})