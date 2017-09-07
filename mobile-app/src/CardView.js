import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card } from './Card';

import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        card: state.currentCard
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLike(id) { return dispatch(like(id)) },
        onDislike(id) { return dispatch(dislike(id)) }
    }
}


const cardView = (props, children) => {
    let card = <Text>No cards right now!</Text>;
    console.log(props)
    if (props.card) {
        card = (
            <Card
                text={props.card.text}
                onLike={props.onLike.bind(props, props.card.id)}
                onDislike={props.onDislike.bind(props, props.card.id)}></Card>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.toolbar}></View>
            {card}
        </View>
    );
};

export const CardView = connect(mapStateToProps, mapDispatchToProps)(cardView);


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
