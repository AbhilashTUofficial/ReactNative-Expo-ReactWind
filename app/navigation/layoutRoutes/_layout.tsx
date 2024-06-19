import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router';

const layoutRoutes = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerCont} />
            <Slot />
            <View style={styles.footerCont} />
        </View>
    )
}

export default layoutRoutes;

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
        borderTopColor: 'lightgrey',
        borderTopWidth: 1,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        width: '100%',
    },
    dropdownCont: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'darkgrey',
        overflow: 'hidden',
        marginBottom: 12
    },
    dropdown: {
        overflow: 'hidden',
    },
    category: {
        fontWeight: 'bold',
        padding: 24,
        textAlign: 'center',
        fontSize: 18
    },
    headerCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        backgroundColor: 'limegreen',
        width: '100%',
        height: 200
    },
    footerCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        backgroundColor: 'yellow',
        width: '100%',
        height: 200
    }
});
