import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';


export default class ListaItens extends Component {

  render() {

    return (
        <View style={styles.item}>
            <View style={styles.foto}>
                <Image style={{height: 100, width: 100}} source={{uri: this.props.item.foto}}/>
            </View>
            <View style={styles.detelheItens}>
                <Text style={styles.txtTitulo }>{this.props.item.titulo}</Text>
                <Text>R$ {this.props.item.valor}</Text>
                <Text>Local: {this.props.item.local_anuncio}</Text>
                <Text>Dt. pub: {this.props.item.data_publicacao}</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    item: {
       borderWidth: 0.5,
       borderColor: '#999',
       margin: 10,
       padding: 10,
       flexDirection: 'row'
    },
    foto:{
        height:102,
        width:102
    },
    detelheItens:{
        marginLeft: 20,
        flex: 1
    },
    txtTitulo:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    txtValor:{
        fontSize: 14,
        fontWeight: 'bold'
    }

})