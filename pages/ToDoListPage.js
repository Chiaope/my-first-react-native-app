import { StyleSheet, View } from "react-native";
import Title from "../components/Title";
import InputToDoTask from "../components/InputToDoTask";
import ToDoList from "../components/ToDoList";
import { useState } from "react";

function ToDoListPage() {
    const [toDoList, setToDoList] = useState([])

    function deleteItem(id) {
        console.log(id)
        setToDoList((currentToDoList) => currentToDoList.filter((toDoItem) => {return (toDoItem.id !== id)}))
    }

    return (
        <View style={styles.appContainer}>
            <Title title='To Do List' />
            <View style={styles.contentContainer}>
                <InputToDoTask updateList={setToDoList} />
                <View style={styles.toDoListContainer}>
                    <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
                </View>
            </View>

        </View>
    );
}

export default ToDoListPage

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: '10%',
        padding: '5%'
    },
    contentContainer: {
        flex: 15,
        justifyContent: ''
    },
    toDoListContainer: {
        flex: 12,
    },
});