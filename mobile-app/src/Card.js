import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, StatusBar, Button } from 'react-native';

export class Card extends React.Component {
    render() {
        return (
            <View style={styles.card}>
                <Text>{this.props.text}</Text>
                <View style={styles.toolbar}>
                    <Button style={styles.dislikeButton} onPress={this.props.onDislike} title={"Dislike"}></Button>
                    <Button style={styles.likeButton} onPress={this.props.onLike} title={"Like"}></Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: "#CCC"
    },
    toolbar: {
        flexDirection: "row",
        justifyContent: "center"
    },
    dislikeButton: {
        backgroundColor: "red"
    },
    likeButton: {
        backgroundColor: "green"
    }
});