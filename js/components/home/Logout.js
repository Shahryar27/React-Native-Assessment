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
    Alert,
    Image,
    ImageBackground,
    Dimensions
} from 'react-native';
import Spinner from "react-native-loading-spinner-overlay";
import { baseUrl, getToken } from "../../commons/constant";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import AsyncStorage from '@react-native-community/async-storage'

export default class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserName: '',
            UserEmail: '',
            UserAge: '',
            UserAddress: '',
            UserPassword: '',
            UserId: 0,
            newDate: '',
            loading: false,
            token: ''
        }
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="account" size={25} style={{ color: tintColor }} />
        )
    }

    async UNSAFE_componentWillMount() {
        getToken()
            .then(response => {
                console.log(response)
                console.log(response.token)
                // JSON.parse(console.log(response.token))
                console.log(JSON.parse(response.token))
                this.setState({ UserName: JSON.parse(response.token) })
            })
    }

    Logout = () => {
        AsyncStorage.removeItem('name')
        AsyncStorage.removeItem('save')
        this.props.navigation.navigate('Login')
    }


    render() {
        return (
            <View style={styles.mainContainer}>
                <Spinner
                    visible={this.state.loading}
                    textContent={'Please wait...'}
                    textStyle={styles.spinnerTextStyle}
                />
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
                                Hello, {this.state.UserName}
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

                                {/* <View>
                                    <Text>Logout</Text>
                                </View> */}

                                <View style={{ flex: 1, marginTop: 100, justifyContent: 'flex-end', }}>

                                    <TouchableOpacity
                                        style={styles.ButtonStyle}
                                        activeOpacity={0.5}
                                        onPress={this.Logout}
                                    >
                                        <Text
                                            style={{
                                                color: '#FFFFFF',
                                                paddingVertical: 10,
                                                fontSize: 16,
                                            }}
                                        >
                                            LOGOUT
                                 </Text>
                                    </TouchableOpacity>
                                </View>

                            </KeyboardAvoidingView>
                        </View>
                    </ScrollView>
                </View>
            </View>



        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    container: {
        flex: 1.5,
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