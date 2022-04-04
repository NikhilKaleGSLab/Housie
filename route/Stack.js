import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import GameMenusScreen from '../screens/GameMenusScreen'
import Game from '../screens/Game'
const screens = {
    GameMenusScreen: {
        screen: GameMenusScreen,
        navigationOptions: {
            header: null,
        }
    },
    Game: {
        screen: Game,
        navigationOptions: {
            header: null,
        }
    }
}

const Stack = createStackNavigator(screens);
export default createAppContainer(Stack);