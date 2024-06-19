import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const asChild = () => {
    return (
        <View style={styles.container}>
            <Link href="navigation/home" asChild >
                {/* <View style={styles.linkCont}> */}
                <Pressable style={styles.btn}>
                    <Text style={styles.txt} >asChild</Text>
                </Pressable>
                {/* </View> */}
            </Link>
        </View>
    )
}

export default asChild;

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
    },
    linkCont: {
        padding: 32,
        backgroundColor: "tomato",
        borderRadius: 6
    },
    txt: {
        color: "white"
    }
})