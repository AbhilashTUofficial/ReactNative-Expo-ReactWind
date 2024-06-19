import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const _layout = () => {
    return (
        <View style={styles.slotCont}>
            <Text style={styles.txt}>_layout</Text>
        </View>
    )
}

export default _layout

const styles = StyleSheet.create({
    slotCont: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
        backgroundColor: 'orange',
        width: '100%',
        height: 200,

    },
    txt: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
    }
})