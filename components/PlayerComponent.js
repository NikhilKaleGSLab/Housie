import React, { Component } from 'react';
import { Text, View, StyleSheet } from "react-native";

export default class PlayerComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.listItem}>
                <Text style={styles.text}>{this.props.name}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        borderColor: 'black',
        backgroundColor:  '#ffff' ,
        borderWidth: 1,
        height: 40,
        width: 40
    },
    text: {
        textAlign: 'center',
        color: '#000000',
    }
});