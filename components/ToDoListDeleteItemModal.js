import { Button, Modal, StyleSheet, View } from "react-native"

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
                <View style={styles.buttonView}>
                    <Button title="Cancel" onPress={closeModal} />
                </View>
                <View style={styles.buttonView}>
                    <Button title="Delete" onPress={() => {deleteItem(props.id)}}/>
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
    buttonView: {
        margin: "2%",
        width: "50%",
    }
})