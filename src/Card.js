import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, StatusBar, Button } from 'react-native';

export class Card extends React.Component {
    render() {
        return (
            <View style={styles.card}>
                <Text>Hello World this is a lot more text and its great and stuff.</Text>
                <View style={styles.toolbar}>
                    <Button style={styles.dislikeButton} onPress={this.onDislike.bind(this)} title={"Dislike"}></Button>
                    <Button style={styles.likeButton} onPress={this.onLike.bind(this)} title={"Like"}></Button>
                </View>
            </View>
        );
    }
    onDislike() {
        store.dispatch({
            type: 'DISLIKE',
            id: this.props.id
        });
    }
    onLike() {
        store.dispatch({
            type: 'LIKE',
            id: this.props.id
        });
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