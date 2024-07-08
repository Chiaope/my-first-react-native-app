import { Button, Modal, StyleSheet, Text, View } from "react-native"

function ToDoListDeleteItemModal(props) {
    function closeModal() {
        props.setModalVisible(false)
    }

    function deleteItem(id) {
        console.log(id)
        props.setToDoList((currentToDoList) => currentToDoList.filter((toDoItem) => {return (toDoItem.id !== id)}))
        closeModal()
    }

    return (
        <Modal visible={props.modalVisible} animationType="slide">
            <View style={styles.modalView}>
                <Text style={styles.textStyle}>Confirm delete?</Text>
                <View style={styles.buttonView}>
                    <Button title="Delete" onPress={() => {deleteItem(props.id)}}/>
                </View>
                <View style={styles.buttonView}>
                    <Button title="Cancel" onPress={closeModal} />
                </View>
            </View>
        </Modal>
    )
}

export default ToDoListDeleteItemModal

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textStyle: {
        fontSize: 25,
        margin: "2%"
    },
    buttonView: {
        margin: "1%",
        width: "50%",
    }
})