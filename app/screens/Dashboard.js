import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Dashboard extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <Text style={styles.text}>This page is dhashboard </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: 'black',
    },
    text: {
        color: 'white',
        fontSize: 15,
    }
});