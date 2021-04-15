import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TextBox = props => {
    return (
        <Text style={{ ...s.textBox, ...props.style }}>{props.children}</Text>
    )
}

const s = StyleSheet.create({
    textBox: {
        fontSize: 17,
        color: 'black'
    }
});


export default TextBox