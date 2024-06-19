import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router } from 'expo-router'

const imperative = () => {
    useEffect(() => {
        setTimeout(() => {
            router.replace('/navigation/home')
        }, 1000)
    }, [])

    return (
        <View style={styles.container}>
            <Text>bye bye</Text>
        </View>
    )
}

export default imperative

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