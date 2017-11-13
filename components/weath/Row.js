<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import {View, Text} from 'react-native'

export default class Row extends React.Component {

    static propTypes = {
        index: React.PropTypes.number
    }

    render(){

        return (
            <View>
                <Text>{this.props.main.temp}°C</Text>
            </View>

        )
    }
=======
import React from 'react'
import {View, Text} from 'react-native'

export default class Row extends React.Component {

    static propTypes = {
        index: React.PropTypes.number
    }

    render(){

        return (
            <View>
                <Text>{this.props.main.temp}°C</Text>
            </View>

        )
    }
>>>>>>> 4f0a8f30d0c864b0906e019600f2fc1976c4d864
=======
import React from 'react'
import {View, Text} from 'react-native'

export default class Row extends React.Component {

    static propTypes = {
        index: React.PropTypes.number
    }

    render(){

        return (
            <View>
                <Text>{this.props.main.temp}°C</Text>
            </View>

        )
    }
>>>>>>> 4f0a8f30d0c864b0906e019600f2fc1976c4d864
}