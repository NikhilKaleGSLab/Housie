import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import RandomNumberItem from "../components/RandomNumberItemComponent";

export default class RandomNumberListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp:props.temp,
            tableData: props.data,
            reverseTableData :props.reverse,
        }
    }

    componentWillUpdate()
    {
    }

    render() {
        return (
            <FlatList
                style={styles.flatList}
                data={this.state.tableData.slice(0,8)}
                horizontal={true}
                scrollEnabled ={false}
                maxToRenderPerBatch={7}
                renderItem={(itemData) => (
                    <RandomNumberItem index={itemData.index}
                        value={itemData.item}
                        size={this.state.tableData.length}
                    />
                )}
            />
        );
    }
}

const styles = StyleSheet.create({
    flatList: {
        padding: 10,
        marginStart: 21,
    }
});