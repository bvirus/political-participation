import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export class Card extends React.Component {
    render() {
        return (
            <View style={styles.card}>
                <Text>Hello World this is a lot more text and its great and stuff.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: "#CCC",
        justifyContent: "center"
    }
});