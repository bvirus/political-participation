import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from './src/Card';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
        <View style={styles.container}>
          <View>
              <Card></Card>
          </View>
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
      marginLeft: "5%",
      marginRight: "5%",
  },
});
