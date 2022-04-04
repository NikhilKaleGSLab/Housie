import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Animated } from 'react-native';
import Orientation from 'react-native-orientation';
import PlayerListComponent from '../components/PlayersListComponent';
import RandomNumberListComponent from '../components/RandomNumberListComponent';
import NumberSheetComponent from '../components/NumberSheetComponent';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 10,
            claimRow: 0,
            claimCol: 0,
            claimSheet: false,
            randomNumberList: [],
            tableData: [],
            animated: new Animated.Value(0),
        }
    }

    claimRow() {
        let flag1 = true;
        if (this.state.claimRow == 0) {
            for (let i = 0; i < 8; i++) {
                if (this.state.tableData[i].isChecked == false) {
                    flag1 = false;
                }
            }
        }

        if (this.state.claimRow == 1) {
            for (let i = 8; i < 16; i++) {
                if (this.state.tableData[i].isChecked == false) {
                    flag1 = false;
                }
            }
        }

        if (this.state.claimRow == 2) {
            for (let i = 16; i < 24; i++) {
                if (this.state.tableData[i].isChecked == false) {
                    flag1 = false;
                }
            }
        }

        if (this.state.claimRow == 3) {
            for (let i = 24; i < 32; i++) {
                if (this.state.tableData[i].isChecked == false) {
                    flag1 = false;
                }
            }
        }


        if (flag == true) { Alert.alert("Congratulations!"); }
        else { Alert.alert("oops! Some cell in row are empty."); }
    }

    claimColunm() {
        let flag = true;
        for (let i = 0; i < this.state.tableData.length; i++) {
            if (i % 8 == this.state.claimCol && this.state.tableData[i].isChecked == false) {
                flag = false;
            }
        }

        if (flag == true) { Alert.alert("Congratulations!"); }
        else { Alert.alert("oops! Some cells in column are empty."); }
    }

    claimSheet() {
        let flag = true;
        for (let i = 0; i < this.state.tableData.length; i++) {
            if (this.state.tableData[i].isChecked == false) {
                flag = false;
            }
        }

        if (flag == true) { Alert.alert("Congratulations!"); }
        else { Alert.alert("oops! Some cell in sheets are empty."); }
    }

    componentWillMount() {
        var tableData1 = [];
        for (let i = 0; i < 32; i++) {
            const rand = Math.floor(Math.random() * 90) + 1;
            tableData1.push({ value: rand, isChecked: false });
        }
        this.setState(
            {
                tableData: tableData1
            }
        );
        Orientation.lockToLandscape();
        this.startTimer();
    }

    animateTimer() {
        const { animated } = this.state;
        Animated.timing(animated, {
            toValue: 1,
            duration: 1000,
        }).start();
    }

    componentDidMount() {
        this.animateTimer();
    }

    startTimer() {
        this.animateTimer();
        this.interval = setInterval(
            () => this.setState((prevState) => ({ timer: prevState.timer - 1 })),
            1000
        );
    }

    tempFunction(index) {
        console.log("inside temp fun->" + index);
        let temp;
        const curr = this.state.randomNumberList[0]

        if (curr == this.state.tableData[index].value) {
            temp = this.state.tableData[index];
            temp.isChecked = true;
            //console.log(arr.join());
            this.state.tableData.splice(index, 1, temp);
        }
        else {
            console.log("false");
        }
    }

    componentDidUpdate() {
        if (this.state.timer === 0) {
            this.getRandomNumber();
            clearInterval(this.interval);
            this.setState(
                {
                    timer: 10
                }
            );
            this.startTimer();
        }
    }

    getRandomNumber() {

        const temp = this.state.randomNumberList;
        const rand = Math.floor(Math.random() * 90) + 1;
        temp.splice(0, 0, rand)

        this.setState({
            randomNumberList: temp,
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onClaimButtonClicked() {
        this.claimColunm();
    }

    onClaimSheetButtonClicked() {
        this.claimSheet();
    }

    render() {
        const { animated } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.containerUpper}>
                    <View style={styles.claimLayout}>
                        <AnimatedCircularProgress
                            size={50}
                            width={10}
                            fill={this.state.timer*10}
                            tintColor="#00e0ff"
                            backgroundColor="#3d5875"
                            backgroundColor="#3d5875" >
                            {
                                (fill) => (
                                    <Text>
                                        {this.state.timer}
                                    </Text>
                                )
                            }
                        </AnimatedCircularProgress>
                    </View>
                    <View style={styles.randomNumberLayout}>
                        <RandomNumberListComponent
                            data={this.state.randomNumberList}
                        />
                    </View>
                    <View style={styles.claimLayout}>
                        <TouchableOpacity
                            style={styles.claimButton}
                            onPress={() => this.onClaimSheetButtonClicked()}
                            underlayColor='#fff'>
                            <Text style={[styles.text, styles.textmargin]}>Claim Sheet</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerLower}>
                    <View style={styles.smileLayout}>
                        <PlayerListComponent />
                    </View>
                    <View style={styles.tableLayout}>
                        <NumberSheetComponent
                            tableData={this.state.tableData}
                            tempFunction={this.tempFunction.bind(this)}
                        />
                    </View>
                    <View style={styles.claimLayout}>
                        {/* <View style={styles.textInputLayout}>
                            <TextInput style={styles.TextInput}
                                placeholder="Row"
                                keyboardType={"numeric"}
                                onChangeText={(text) => this.setState({rowIndex:text})}
                                />
                            <TextInput style={styles.TextInput}
                                placeholder="Col"
                                keyboardType={"numeric"} 
                                onChangeText={(text) => this.setState({colIndex:text})}
                                />
                        </View> */}
                        <TouchableOpacity
                            style={styles.claimButton}
                            onPress={() => this.onClaimButtonClicked()}
                            underlayColor='#fff'>
                            <Text style={styles.text}>Claim</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 10,
        marginEnd: 10,
        marginStart: 10,
    },
    textInputLayout: {
        flexDirection: 'row'
    },
    TextInput: {
        height: 40,
        width: 40,
        margin: 5,
        borderColor: 'black',
        borderWidth: 1
    },
    containerUpper: {
        flex: 1,
        flexDirection: 'row',
    },
    containerLower: {
        flex: 3,
        flexDirection: 'row',
    },
    smileLayout: {
        flex: 1,
        color: 'black',
        alignContent: 'space-around',
        alignItems: 'center'
    },
    tableLayout: {
        flex: 5,
        color: 'black',
        marginEnd: 10,
        marginStart: 15
    },
    randomNumberLayout: {
        flex: 5,
        color: 'black',
        marginEnd: 10,
        paddingEnd: 20
    },
    claimButton: {
        backgroundColor: 'transparent',
        borderColor: 'black',
        borderWidth: 1,
        alignContent: "center",
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
    },
    claimLayout: {
        flex: 1,
        color: 'black',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: '#00FFFF',
        borderColor: 'black',
        borderWidth: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'black',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    listItem: {
        padding: 10,
        marginStart: 10,
        marginEnd: 10,
        borderColor: 'black',
        backgroundColor: 'pink',
        borderWidth: 1
    },
    textmargin:{
        marginLeft:15
    }
});