import React, { Component } from 'react';
import { Text, View, StyleSheet, Animated} from "react-native";

export default class RandomNumberItemComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animated : new Animated.Value(0)
        }
    }

    componentDidMount()
    {
        const {animated} = this.state;
        Animated.timing(animated,{
            toValue:1,
            duration:1000,
        }).start();
    }

    render() {
        const {animated} = this.state;
        return (
            <Animated.View style={[ 0 == this.props.index ? styles(this.props.size, this.props.index, animated).lastOval : styles(this.props.size, this.props.index, animated).oval]}>
                <Text style={styles(this.props.size, this.props.index, animated).text}>{this.props.value}</Text>
            </Animated.View>
        );
    }
}

const styles = (size, index, animated) =>  StyleSheet.create({
    oval: {
              padding: 10,
                borderColor: 'black',
                borderWidth: 1,
                height: 40,
                width: 40,
                borderRadius: 50,
                margin: 4,
                backgroundColor: 0 == index ? '#FFF1C1' : '#ffff'
    },
    lastOval:{
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        height: 50,
        width: 50,
        borderRadius: 50,
        margin: 4,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        transform:[
            {  scale : animated
            }
          ],
        backgroundColor: 0 == index ? '#FFF1C1' : '#ffff'
    },

    text: {
        textAlign: 'center',
        color: '#000000',
    }
});