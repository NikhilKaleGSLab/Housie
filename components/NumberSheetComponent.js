import React, { Component } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import CellComponent from "../components/CellComponent";

export default class NumberSheetComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numColoumns: 8,
      tableData: props.tableData,
    }
  }

  itemClickHandler = (index) => {
    this.props.tempFunction(index);    
  }

  render() {
    return (
      <FlatList
        data={this.state.tableData}
        renderItem={(itemData) => {
          return (
            <CellComponent
              index={itemData.index}
              value={itemData.item.value}
              isChecked={itemData.item.isChecked}
              itemClickHandler={this.itemClickHandler}
            />
          );
        }
        }
        numColumns={this.state.numColoumns}
      />
    );
  }
}