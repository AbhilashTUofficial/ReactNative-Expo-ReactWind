import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Navigator } from 'expo-router'

const Screen1 = () => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.btn} onPress={() => {
            }}>
                <Text style={styles.category}>Screen1</Text>
            </Pressable>
            <Pressable style={styles.btn}>
                <Text style={styles.category}>Screen2</Text>
            </Pressable>
            <Pressable style={styles.btn}>
                <Text style={styles.category}>Screen3</Text>
            </Pressable>
        </View>
    )
}

export default Screen1;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
    },
    btn: {
        paddingHorizontal: 10,
        borderRadius: 5,
        fontWeight: 'bold',
        textAlign: 'center',
        borderColor: 'lightgrey',
        borderWidth: 1,
        width: '100%',
        marginBottom: 12
    },

    category: {
        fontWeight: 'bold',
        padding: 24,
        textAlign: 'center',
        fontSize: 18
    },
});