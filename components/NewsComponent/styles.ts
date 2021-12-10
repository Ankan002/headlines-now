import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    newsContainer: {
        height: 690,
        flex: 1,
        marginVertical: 10,
        flexDirection: 'column',
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold'
    }, 
    image: {
        width: '100%',
        height: 300,
        marginTop: 15
    }, 
    content: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
    },
    buttonContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }, 
    button: {
        backgroundColor: 'red',
        marginBottom: 10,
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    }
})

export default styles