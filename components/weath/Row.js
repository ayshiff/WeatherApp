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
}