import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const ToggleButton = ({ title, select, setSelect }) => {
    return (
        <TouchableOpacity onPress={setSelect} style={select ? styles.fullWidthButton : styles.fullWidthButton1}>
            <Text style={styles.buttonText1}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ToggleButton

const styles = StyleSheet.create({
    fullWidthButton: {
        backgroundColor: '#0c573a',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 30,
        alignItems: 'center',
        borderColor: '#139e56',
        borderWidth: 2,
        flexDirection: 'row', // Added flexDirection
    },
    buttonText: {
        fontSize: 19,
        fontWeight: "700",
        color: 'white',
    },
    fullWidthButton1: {
        backgroundColor: 'black',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 30,
        alignItems: 'center',
        borderColor: '#3d453c',
        borderWidth: 2,
        flexDirection: 'row', // Added flexDirection
    },
    buttonText1: {
        fontSize: 19,
        fontWeight: "700",
        color: 'white',
    },
})