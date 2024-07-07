import { Pressable, StyleSheet, Text, View } from "react-native"
import ToDoListDeleteItemModal from "./ToDoListDeleteItemModal"
import { useState } from "react"

function ToDoItem(props) {
    const [modalVisible, setModalVisible] = useState(false)

    function showModal() {
        setModalVisible(true)
    }

    return (
        <View style={styles.toDoListItemContainer}>
            <ToDoListDeleteItemModal modalVisible={modalVisible} setModalVisible={setModalVisible} setToDoList={props.setToDoList} id={props.id}/>
            <Pressable onPress={showModal} android_ripple={{color: 'grey'}} style={(pressData) => {pressData.pressed && console.log('pressed')}}>
                <Text style={styles.toDoListTextStyle}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

export default ToDoItem

const styles = StyleSheet.create({
    toDoListItemContainer: {
        backgroundColor: 'darkblue',
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: 5
    },
    toDoListTextStyle: {
        color: 'white',
        padding: 5,
    },
    pressedStyle: {
        color: "red"
    }
})