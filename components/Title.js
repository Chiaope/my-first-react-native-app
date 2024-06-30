import { StyleSheet, View, Text } from "react-native"

function Title(props) {
    return (
        <View style={styles.titleContainter}>
            <Text style={styles.titleTextStyle}>{props.title}</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    titleContainter: {
        flex: 1,
        alignItems: 'center',
        padding: '5%'
    },
    titleTextStyle: {
        fontSize: 30
    },
})