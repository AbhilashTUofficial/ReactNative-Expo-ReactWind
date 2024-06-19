import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen name="screen1/index" options={{}} />
            <Stack.Screen name="screen2/index" options={{}} />
            <Stack.Screen name="screen3/index" options={{}} />
        </Stack>
    )
}

export default _layout