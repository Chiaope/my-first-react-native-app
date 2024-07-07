import { Button, Modal, View } from "react-native"

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
            <View>
                <View>
                    <Button title="Cancel" onPress={closeModal}/>
                </View>
                <View>
                    <Button title="Delete" onPress={() => {deleteItem(props.id)}}/>
                </View>
            </View>
        </Modal>
    )
}

export default ToDoListDeleteItemModal