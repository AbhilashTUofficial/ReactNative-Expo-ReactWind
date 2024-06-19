import { View, Text, StyleSheet, Pressable, Animated } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Link } from 'expo-router';

const Home = () => {

    const BasicNavigation = () => {
        const [open, setOpen] = useState(false);
        const animation = new Animated.Value(0);

        useEffect(() => {

            if (open) {
                Animated.timing(animation, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: false,
                }).start();
            } else {
                Animated.timing(animation, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: false,
                }).start();
            }
        }, [open]);

        const dropdownHeight = animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 400],
        });

        return (
            <Pressable onPress={() => setOpen(!open)} style={styles.dropdownCont}>
                <Text style={styles.category}>Basic Navigation</Text>
                <Animated.View style={[styles.dropdown, { height: dropdownHeight }]}>
                    <Link style={styles.btn} href='home'>Navigate to Static page</Link>
                    <Link style={styles.btn} href="users/123">Navigate to Dynamic page</Link>
                    <Link style={styles.btn} href="navigation/page1">Navigate to Nested page</Link>
                    <Link style={styles.btn} href="navigation/asChild">asChild Prop</Link>
                    <Link replace style={styles.btn} href="navigation/page1">Replace Navigation</Link>
                    <Link style={styles.btn} href="navigation/imperative">Imperative navigation</Link>
                </Animated.View>
            </Pressable>
        )
    }

    const AdvancedNavigation = () => {
        const [open, setOpen] = useState(false);
        const animation = new Animated.Value(0);

        useEffect(() => {

            if (open) {
                Animated.timing(animation, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: false,
                }).start();
            } else {
                Animated.timing(animation, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: false,
                }).start();
            }
        }, [open]);

        const dropdownHeight = animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 400],
        });

        return (
            <Pressable onPress={() => setOpen(!open)} style={styles.dropdownCont}>
                <Text style={styles.category}>Advanced Navigation</Text>
                <Animated.View style={[styles.dropdown, { height: dropdownHeight }]}>
                    <Link style={styles.btn} href='navigation/layoutRoutes'>Layout routes Navigation</Link>
                    <Link style={styles.btn} href="navigation/stacksRoutes">Stack Navigation</Link>
                    <Link style={styles.btn} href="navigation/page1">Navigate to Nested page</Link>
                    <Link style={styles.btn} href="navigation/asChild">asChild Prop</Link>
                    <Link replace style={styles.btn} href="navigation/page1">Replace Navigation</Link>
                    <Link style={styles.btn} href="navigation/imperative">Imperative navigation</Link>
                </Animated.View>
            </Pressable>
        )
    }

    return (
        <View style={styles.container}>
            <BasicNavigation />
            <AdvancedNavigation />
        </View>
    );
}

export default Home;

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
});
