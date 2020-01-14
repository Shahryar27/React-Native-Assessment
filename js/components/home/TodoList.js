import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Dimensions,
    KeyboardAvoidingView,
    TouchableHighlight
} from 'react-native';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import { add_Todo, delete_Todo, edit_Todo, update_Todo } from './store/action/action'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // todoText: '',
            // todoArray: [],
            todoedit: false,
            editText: ''
        }
    }

    deleteTodo = (ind) => {
        this.props.deleteTodos(ind)
    }

    saveTodo = () => {
        const saveTodo = AsyncStorage.setItem('todo', JSON.stringify(val.todoItem))
        console.log(saveTodo)
    }

    render() {
        let { todoArray } = this.state
        return (


            <View style={styles.mainContainer}>
                {/* <View style={styles.container}> */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'green' }}>
                    <View style={{ alignItems: 'flex-start', justifyContent: 'center', marginLeft: 25 }}>
                        <Text
                            style={{
                                color: '#FFFFFF',
                                paddingVertical: 10,
                                fontSize: 16,
                            }}
                        >
                            Todo
                            </Text>
                    </View>
                    <View style={{ alignItems: 'flex-end', justifyContent: 'center' }} >
                    </View>
                </View>
                {/* </View> */}
                <View style={{ flex: 8 }}>
                    <ScrollView keyboardShouldPersistTaps='handled'>
                        <View style={{ marginTop: 30, marginBottom: 30, }}>
                            <KeyboardAvoidingView enabled>



                                <View>
                                    <View>
                                        {
                                            (this.props.reduxState.length == 0) ?
                                                <View>
                                                    <Text>
                                                        No Todo Here!
                                                    </Text>
                                                </View>
                                                :
                                                <View>
                                                    <ScrollView>
                                                        {
                                                            this.props.reduxState.map((val, ind) => {
                                                                return (
                                                                    <View key={ind} style={{ flexDirection: 'row' }}>

                                                                        <View style={{ margin: 10 }}>
                                                                            <TouchableOpacity onPress={() => { this.deleteTodo(ind) }}>
                                                                                <Text>
                                                                                    Dlelte
                                                                                </Text>
                                                                            </TouchableOpacity>
                                                                        </View>
                                                                        

                                                                        <View style={{ margin: 10 }}>
                                                                            <Text>
                                                                                {ind + ' ' + val.todoItem}
                                                                            </Text>
                                                                        </View>



                                                                        <View style={{ margin: 10 }}>
                                                                            <TouchableOpacity onPress={() => { this.saveTodo(ind) }}>
                                                                                <Text>
                                                                                    Save
                                                                                </Text>
                                                                            </TouchableOpacity>
                                                                        </View>
                                                                    </View>
                                                                    // <SwipeListView
                                                                    //     data={val.todoItem}
                                                                    //     renderItem={ data => (
                                                                    //         <TouchableHighlight onPress={() => this.deleteTodo(ind)}>
                                                                    //             <View>
                                                                    //                 <Text>{data.item}</Text>
                                                                    //             </View>
                                                                    //         </TouchableHighlight>
                                                                    //     )}
                                                                    //     renderHiddenItem={(data, rowMap) => (
                                                                    //         <View style={styles.rowBack}>
                                                                    //             <Text>Left</Text>
                                                                    //             <Text>Right</Text>
                                                                    //         </View>
                                                                    //     )}
                                                                    //     leftOpenValue={75}
                                                                    //     rightOpenValue={-75}
                                                                    // />
                                                                )
                                                            })
                                                        }
                                                    </ScrollView>
                                                </View>
                                        }
                                    </View>
                                </View>

                            </KeyboardAvoidingView>
                        </View>
                    </ScrollView>
                </View>
            </View>

        );
    }
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps todolist', mapStateToProps)
    return {
        reduxState: state.root.todo
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('map dispatch to props in updated', dispatch)
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        // width: '100%',
        backgroundColor: '#FFFFFF',
    },
    spinnerTextStyle: {
        flex: 1,
    },
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    ButtonStyle: {
        backgroundColor: "green",
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: 'green',
        height: 40,
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 30,
    },
})