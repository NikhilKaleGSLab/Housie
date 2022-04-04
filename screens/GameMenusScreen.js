import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native';

export default class GameMenusScreen extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = (navigation) => {
        return {
            title: 'Game Menu Screen',
        }
    };

    startGameButtonClicked = () => {
        const { navigate } = this.props.navigation;
        navigate('Game');
        //console.log("inside->"+initial);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerChild}>
                    <Button
                        title="Start Game"
                        onPress={this.startGameButtonClicked} />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center'
    },
    containerChild: {
        padding: 10,
        margin: 20,
    }
});