import { FlatList, StyleSheet, Text, View } from "react-native"

function ToDoList(props) {
    return (
        <View style={styles.toDoListContainer}>
            <Text style={styles.toDoListTitleStyle}>List:</Text>
            <FlatList
                data={props.toDoList}
                renderItem={(itemData) => {
                    return (
                        <View style={styles.toDoListItemContainer}>
                            <Text style={styles.toDoListTextStyle}>{itemData.item}</Text>
                        </View>
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