import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TouchableNativeFeedback } from "react-native";



export default class CellComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
            <TouchableNativeFeedback
            background ={TouchableNativeFeedback.Ripple('#D6EAF8')}
            onPress = {() => this.props.itemClickHandler(this.props.index)}>
                <View style={styles(this.props.isChecked).listItem}>
                    <Text style={styles(this.props.isChecked).btnText}>{this.props.value}</Text>
                </View>
            </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = (isChecked) => StyleSheet.create({
    listItem: {
        padding: 10,
        borderColor: 'black',
        backgroundColor: isChecked == false ? '#ffff' : '#D6EAF8',
        borderWidth: 1,
        height: 45,
        width: 55
    },
    btnText: {
        textAlign: 'center',
        color: '#000000',
    }
});