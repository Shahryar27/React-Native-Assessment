import {
    Dimensions,
    } from "react-native"
    import AsyncStorage from '@react-native-community/async-storage'
    
    export const screenHeight = Dimensions.get('window').height;
    export const screenWidth = Dimensions.get('window').width;
    
export const baseUrl = 'http://192.168.3.59:3000'

export function getToken(){
    return new Promise(async (resolve,reject)=>{
        let token = await AsyncStorage.getItem('name')
        if(token !== null){
            resolve({token: token})
        }else{
            reject({token: null})
        }
    })
}