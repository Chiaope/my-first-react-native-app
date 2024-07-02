import { Pressable, StyleSheet, Text, View } from "react-native"

function ToDoItem(props) {
    return (
        <View style={styles.toDoListItemContainer}>
            <Pressable onPress={() => props.onPress(props.id)} android_ripple={{ color: 'grey' }}>
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
    }
})