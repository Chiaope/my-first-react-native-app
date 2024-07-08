import { Button, Modal, StyleSheet, Text, View } from "react-native"

function ToDoListDeleteItemModal(props) {
    function closeModal() {
        props.setModalVisible(false)
    }

    function deleteItem(id) {
        console.log(id)
        props.setToDoList((currentToDoList) => currentToDoList.filter((toDoItem) => { return (toDoItem.id !== id) }))
        closeModal()
    }

    return (
        <Modal visible={props.modalVisible} animationType="fade" transparent={true}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View style={styles.modalView}>
                    <Text style={styles.textStyle}>Confirm delete?</Text>
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonView}>
                            <Button title="Delete" onPress={() => { deleteItem(props.id) }} />
                        </View>
                        <View style={styles.buttonView}>
                            <Button title="Cancel" onPress={closeModal} />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ToDoListDeleteItemModal

const styles = StyleSheet.create({
    modalView: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        padding: "5%",
        borderRadius: 10,
        backgroundColor: "rgba(255, 255, 255, 0.9)"
    },
    textStyle: {
        fontSize: 25,
        margin: "2%"
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    buttonView: {
        margin: "1%",
    }
})