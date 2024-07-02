import { Pressable, StyleSheet, Text, View } from "react-native"

function ToDoItem(props) {
    return (
        <Pressable onPress={() => props.onPress(props.id)}>
            <View style={styles.toDoListItemContainer}>
                <Text style={styles.toDoListTextStyle}>{props.text}</Text>
            </View>
        </Pressable>
    )
}

export default ToDoItem

const styles = StyleSheet.create({
    toDoListItemContainer: {
        backgroundColor: 'darkblue',
        borderWidth: 1,
        marginVertical: 5,
        padding: 5,
        borderRadius: 5
    },
    toDoListTextStyle: {
        color: 'white'
    }
})