import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ListaItens from './src/components/ListaItens'

export default class react_native_http_request extends Component {
  render() {
    return (
      <ListaItens/>
    );
  }
}

AppRegistry.registerComponent('react_native_http_request', () => react_native_http_request);
