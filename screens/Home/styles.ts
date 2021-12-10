import { StyleSheet, Platform, StatusBar } from 'react-native'

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        padding: 15
    },
    bodyContent: {
        flexGrow: 1,
        marginTop: 20
    }
})

export default styles