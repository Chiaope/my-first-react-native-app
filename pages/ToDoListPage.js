import { Dimensions, Image, StyleSheet, View } from "react-native";
import Title from "../components/Title";
import InputToDoTask from "../components/InputToDoTask";
import ToDoList from "../components/ToDoList";
import { useState } from "react";

function ToDoListPage() {
    const [toDoList, setToDoList] = useState([])
    const _width = Dimensions.get('screen').width * 0.2

    function deleteItem(id) {
        console.log(id)
        setToDoList((currentToDoList) => currentToDoList.filter((toDoItem) => { return (toDoItem.id !== id) }))
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.titleHeaderContainer}>
                <View style={styles.imageContainter}>
                    <Image source={require('../assets/to-do-list-icon.png')} style={{ height: _width, width: _width }} />
                </View>
                <View style={styles.titleContainer}>
                    <Title title='To Do List' />
                </View>
                <View style={{flex: 1}}/>
            </View>
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
    titleHeaderContainer: {
        flexDirection: 'row',
        marginBottom: '3%'
    },
    imageContainter: {
        flex: 1,
        alignItems:"flex-start", 
    },
    titleContainer: {
        flex: 2,
    },
    contentContainer: {
        flex: 15,
    },
    toDoListContainer: {
        flex: 12,
    },
});