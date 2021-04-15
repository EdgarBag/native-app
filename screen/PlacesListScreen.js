import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import TextBox from './../components/TextBox'

const PlaceListScreen = props => {
    return <View>
        <Text>Places Screen</Text>
        <TextBox style={s.text}>This is text box</TextBox>
    </View>
}

PlaceListScreen.navigationOptions = {
    headerTitle: 'All Places',
    // color:'black'
}

const s = StyleSheet.create({
    text: {
        // fontSize: 20
    }
})

export default PlaceListScreen