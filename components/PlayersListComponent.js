import React, { Component } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import PlayerComponent from "../components/PlayerComponent";

export default class PlayerListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numColoumns: 1,
      playerDataList: 
        [{ index: 0, name :"\u269C" , avatar:'avatar0'}, { index: 1, name :"\u26BD" , avatar:'avatar1'},{ index: 2, name :'\u26BE' , avatar:'avatar2'},{ index: 4, name :"\u26F3" , avatar:'avatar4'},{ index: 4, name :'\u265F' , avatar:'avatar4'}]
    }
  }

  render() {
    return (
      <FlatList
        data={this.state.playerDataList}
        renderItem={(itemData) => (
          <PlayerComponent index= {itemData.index}
          name ={itemData.item.name}
          />
        )}
        numColumns={this.state.numColoumns}
      />    
    );
  }
}