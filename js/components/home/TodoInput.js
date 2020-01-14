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
    KeyboardAvoidingView
} from 'react-native';
import TodoList from './TodoList'
import DatePicker from 'react-native-datepicker';
import { add_Todo, delete_Todo, edit_Todo, update_Todo } from './store/action/action'
import { connect } from 'react-redux'

class TodoInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoText: '',
            date: ''
            // todoArray: [],
            // // todoedit: false,
            // // editText: ''
        }
    }

    addTodo = () => {
        if (this.state.todoText == '') {
            alert('Please Enter Todo')
        }
        else {
            // let arr = [...this.state.todoArray]
            let arr = [...this.props.reduxState]
            let obj = {
                todoItem: this.state.todoText,
                edit: false
            }
            // arr.push(obj)
            this.props.isAdd_Todo(obj, arr)
            console.log('add redux state', this.props.reduxState)
            this.setState({
                todoText: '',
                // todoArray: arr
            })
        }
    }

    deleteTodo = (ind) => {
        let arr = [...this.props.reduxState]
        this.props.isDelete_Todo(ind, arr)
        // let arr = [...this.state.todoArray]
        // arr.splice(ind, 1)
        // this.setState({
        //     todoArray: arr
        // })
    }

    editTodo = (ind) => {
        let arr = [...this.props.reduxState]
        this.props.isEdit_Todo(ind, arr)
        // let arr = [...this.state.todoArray]
        // // let obj = {
        // //     todoItem: this.state.todoText,
        // //     edit: true
        // // }
        // // arr.push(obj)
        // arr[ind]['edit'] = true
        // this.setState({
        //     todoArray: arr
        // })
    }

    // updateTodo = (ind) => {
    //     if (this.state.editText == '') {
    //         alert('Please Enter to Update Todo')
    //     }
    //     else {
    //         let arr = [...this.state.todoArray]
    //         // let obj = {
    //         //     todoItem: this.state.editText,
    //         //     edit: false
    //         // }
    //         // arr.push(obj)
    //         arr[ind].todoItem = this.state.editText
    //         arr[ind]['edit'] = false
    //         this.setState({
    //             todoArray: arr
    //         })

    //     }
    // }

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
                            Add
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
                                    <View style={styles.SectionStyle}>
                                        <TextInput
                                            multiline={true}
                                            numberOfLines={4}
                                            placeholder="Enter Todo ..."
                                            onChangeText={(todoText) => this.setState({ todoText })}
                                            value={this.state.todoText}
                                        />
                                        {/* <TextInput
                                            style={{ flex: 1, color: '#413E4F' }}
                                            onChangeText={(todoText) => this.setState({ todoText })}
                                            value={this.state.todoText}
                                            underlineColorAndroid="#413E4F"
                                            placeholder="Enter Todo"
                                            placeholderTextColor="#413E4F"
                                            autoCapitalize="words"
                                            multiline={true}
                                            numberOfLines={4}
                                            keyboardType="default"
                                            ref={ref => {
                                                this._nameinput = ref;
                                            }}
                                            returnKeyType="next"
                                            onSubmitEditing={Keyboard.dismiss}
                                            blurOnSubmit={false}
                                        /> */}
                                    </View>

                                    <View style={styles.SectionStyle1}>
                                        <View style={{
                                            justifyContent: 'center',
                                        }}>
                                            <DatePicker
                                                style={{ marginLeft: 0, width: '100%', marginRight: 0, margin: 10 }}
                                                date={this.state.date}
                                                mode="datetime"
                                                placeholder="When is it due?"
                                                format="DD-MM-YYYY"
                                                minDate="01-01-2016"
                                                // maxDate="01-01-2019"
                                                confirmBtnText="Confirm"
                                                cancelBtnText="Cancel"
                                                customStyles={{
                                                    dateIcon: {
                                                        position: 'absolute',
                                                        left: 0,
                                                        top: 4,
                                                        marginLeft: 0
                                                    },
                                                    dateInput: {
                                                        // marginLeft: 36
                                                    }
                                                }}
                                                onDateChange={(date) => { this.setState({ date: date }) }}
                                            />
                                            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, }}></View>
                                        </View>
                                    </View>


                                    <TouchableOpacity
                                        style={styles.ButtonStyle}
                                        activeOpacity={0.5}
                                        onPress={this.addTodo}
                                    >
                                        <Text
                                            style={{
                                                color: '#FFFFFF',
                                                paddingVertical: 10,
                                                fontSize: 16,
                                            }}
                                        >
                                            Add
                                        </Text>
                                    </TouchableOpacity>

                                    {/* <TodoList myTodos={this.state.todoArray} deleteTodos={this.deleteTodo} editTodos={this.editTodo} /> */}

                                    {/* agr myTodos ko yha per aesy rakhty to todolist me let arr = this.props.myTodos rakh skty thy */}
                                    {/* <TodoList myTodos={this.props.reduxState} deleteTodos={this.deleteTodo} editTodos={this.editTodo} /> */}



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
    console.log('mapStateToProps todoInput', mapStateToProps)
    return {
        reduxState: state.root.todo
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('mapDispatchToProps', dispatch)
    return {
        isAdd_Todo: (addition, localArray) => {
            dispatch(add_Todo(addition, localArray))
        },
        isDelete_Todo: (deletedIndex, allStateArray) => {
            dispatch(delete_Todo(deletedIndex, allStateArray))
        },
        isEdit_Todo: (editedIndex, allStateArray) => {
            dispatch(edit_Todo(editedIndex, allStateArray))
        },
        // isUpdate_Todo: () => {
        //     dispatch(update_Todo())
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);


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
        // height: 100,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
        borderWidth: 1,
        borderColor: 'grey'
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
    SectionStyle1: {
        flexDirection: 'column',
        height: 40,
        marginTop: 10,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
})