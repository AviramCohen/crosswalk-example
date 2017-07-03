/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CrosswalkWebview from 'react-native-webview-crosswalk';

export default class Crosswalk extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CrosswalkWebview style={styles.webview} source={{uri: 'https://www.google.com'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  webview: {
    width: '100%',
    height: '100%'
  }
});

AppRegistry.registerComponent('Crosswalk', () => Crosswalk);
