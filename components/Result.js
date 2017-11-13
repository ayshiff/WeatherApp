<<<<<<< HEAD
import React from 'react'
import { Text, View, Image } from 'react-native'

export default class Result extends React.Component {

    static navigationOptions = {
        tabBarIcon: () => {
            return  <Image source={require('./img/umbrella.png')} style={{width:20, height:20}}/>
        }
    }

    render(){
        return (
            <View>
                 <Text>  zerzerz</Text>
            </View>
        )
    }
=======
import React from 'react'
import { Text, View, Image } from 'react-native'

export default class Result extends React.Component {

    static navigationOptions = {
        tabBarIcon: () => {
            return  <Image source={require('./img/umbrella.png')} style={{width:20, height:20}}/>
        }
    }

    render(){
        return (
            <View>
                 <Text>  zerzerz</Text>
            </View>
        )
    }
>>>>>>> 4f0a8f30d0c864b0906e019600f2fc1976c4d864
}