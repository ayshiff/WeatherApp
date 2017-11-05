import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default class Search extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            city: 'Paris'
        }
    }


    setCity(city){
        this.setState({city})
    }

    render(){
        return (
            <TextInput
            underlineColorAndroid='transparent'
            onChangeText={(text)=> this.setCity(text) }
            style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 40}}
            value={this.state.city}
          />


        )
    }




}
