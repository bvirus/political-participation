import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Card} from './src/Card';
import { createStore } from 'redux';
import { List, Map, fromJS } from 'immutable';


let store = createStore(function reducer(state = fromJS({ cards: {}, currentCard: null }), action) {
    switch (action.type) {
        case 'LIKE':
            let card = state.cards.get(action.id);
            return state.set('cards', state.cards.set(action.id, card.set('liked', true)));
    }
});


export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.toolbar}></View>
                <Card></Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: "2%",
        marginRight: "2%",
        flexDirection: 'row'
    },
    toolbar: {
        paddingTop: 20,
    }
});
