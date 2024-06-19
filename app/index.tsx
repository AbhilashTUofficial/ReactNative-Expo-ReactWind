import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
    return (
        <View style={styles.container}>
            <Link style={styles.btn} href={'navigation/home'}>
                <Text style={styles.category}>Navigation</Text></Link>
            <Link style={styles.btn} href={'navigation/home'}>
                <Text style={styles.category}>Images</Text></Link>
            <Link style={styles.btn} href={'navigation/home'}>
                <Text style={styles.category}>Files</Text></Link>
        </View>
    )
}

export default index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
    },
    btn: {
        paddingVertical: 18,
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
