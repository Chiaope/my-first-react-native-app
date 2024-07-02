import { FlatList, Pressable, StyleSheet, Text, View } from "react-native"
import ToDoItem from "./ToDoItem"

function ToDoList(props) {
    return (
        <View style={styles.toDoListContainer}>
            <Text style={styles.toDoListTitleStyle}>List:</Text>
            <FlatList
                data={props.toDoList}
                renderItem={(itemData) => {
                    return (
                        <ToDoItem onPress={props.onPress} id={itemData.item.id} text={itemData.item.text} />
                    )
                }} />
        </View>
    )

}

export default ToDoList

const styles = StyleSheet.create({
    toDoListContainer: {
        flex: 1
    },
    toDoListTitleStyle: {
        fontSize: 25,
        paddingBottom: '5%'
    },
})