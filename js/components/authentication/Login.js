import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Keyboard,
    KeyboardAvoidingView,
    BackHandler,
    Alert,
    Image
} from 'react-native';
import Spinner from "react-native-loading-spinner-overlay";
import { baseUrl, getToken } from "../../commons/constant";
// import Axios from "axios";
// var jwtDecode = require('jwt-decode');
import AsyncStorage from '@react-native-community/async-storage'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserName: '',
            loading: false,
            token: ''
        }
    }

    async UNSAFE_componentWillMount() {
        getToken()
        .then(response => {
            console.log(response)
            console.log(response.token)
            console.log('login ho agay jao')
            if (response.token !== null) {
                this.props.navigation.navigate('Input')
            }
        })
        .catch(error => {
            // alert(error)
            console.log(error)
        })
    }

    Login = () => {
        let { UserName } = this.state
        if (this.state.UserName.length == '') {
            alert('Please Enter a Name')
        }
        else {
                this.setState({ loading: true })
                console.log(this.state.UserName)

                const saveName = AsyncStorage.setItem('name', JSON.stringify(this.state.UserName))
                        console.log(saveName)
                        this.props.navigation.navigate('Input')
                        this.setState({ loading: false })
                this.setState({
                    UserName: ''
                })
            // }
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <Spinner
                    visible={this.state.loading}
                    textContent={'Please wait...'}
                    textStyle={styles.spinnerTextStyle}
                />
                <ScrollView keyboardShouldPersistTaps='handled'>
                    <View style={{ marginTop: 150, marginBottom: 20, flex: 8, justifyContent: 'space-between' }}>
                        <KeyboardAvoidingView enabled>

                        <View style={{ flex: 4, justifyContent: 'space-between' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../../commons/images/logo.png')}
                                />
                                <View style={{ marginTop: 0 }}>
                                <Text style={{ fontSize: 18 }}>Todo</Text>
                                </View>
                            </View>

                            <View style={{ flex: 4, marginTop: 100 }}>
                            <View style={styles.SectionStyle}>
                                <TextInput
                                    style={{ flex: 1, color: '#413E4F' }}
                                    onChangeText={UserName => this.setState({ UserName })}
                                    value={this.state.UserName}
                                    underlineColorAndroid="#413E4F"
                                    placeholder="Name"
                                    placeholderTextColor="#413E4F"
                                    autoCapitalize="words"
                                    keyboardType="default"
                                    ref={ref => {
                                        this._nameinput = ref;
                                    }}
                                    returnKeyType="next"
                                    onSubmitEditing={Keyboard.dismiss}
                                    blurOnSubmit={false}
                                />
                            </View>

                            <TouchableOpacity
                                style={styles.ButtonStyle}
                                activeOpacity={0.5}
                                onPress={this.Login}
                            >
                                <Text
                                    style={{
                                        color: '#FFFFFF',
                                        paddingVertical: 10,
                                        fontSize: 16,
                                    }}
                                >
                                    LOGIN
                                </Text>
                            </TouchableOpacity>
                            </View>
                            </View>

                        </KeyboardAvoidingView>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
    }
})