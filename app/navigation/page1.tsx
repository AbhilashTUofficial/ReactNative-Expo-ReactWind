import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const page1 = () => {
    return (
        <View>
            <Text>page1</Text>
        </View>
    )
}

export default page1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        width: 200,
        margin: 12
    }
})