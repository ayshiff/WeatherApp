<<<<<<< HEAD
import React from 'react';
import {TextInput, StyleSheet, Image, View, Button} from 'react-native';
import style from '../Style'
import { StackNavigator} from 'react-navigation'
import List from './List'


class Search extends React.Component {

    search (){
        this.props.navigation.navigate('Resultat', {city: this.state.city})
      }

    constructor (props) {
        super(props)
        this.state = {
            city: 'Paris'
        }
    }

  

    static navigationOptions = {
        title: 'Search a city',
        tabBarIcon: () => {
            return  <Image source={require('./img/home.png')} style={{width:20, height:20}}/>
        }
    }


    setCity(city){
        this.setState({city})
    }

    render(){
        return (
            <View style={style.container}>
            <TextInput
            underlineColorAndroid='transparent' 
            onChangeText={(text)=> this.setCity(text) }
            style={style.input}
            value={this.state.city}
          />
           <Button color={style.color} onPress={()=>this.search()} title = "Search" />
           </View>

        )
    }

}

const navigationOptions = {
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle
}


export default StackNavigator ({
    Search: {
        screen: Search,
        navigationOptions
    },
    Resultat: {
        screen: List,
        navigationOptions
    }

})
=======
import React from 'react';
import {TextInput, StyleSheet, Image, View, Button} from 'react-native';
import style from '../Style'
import { StackNavigator} from 'react-navigation'
import List from './List'


class Search extends React.Component {

    search (){
        this.props.navigation.navigate('Resultat', {city: this.state.city})
      }

    constructor (props) {
        super(props)
        this.state = {
            city: 'Paris'
        }
    }

  

    static navigationOptions = {
        title: 'Search a city',
        tabBarIcon: () => {
            return  <Image source={require('./img/home.png')} style={{width:20, height:20}}/>
        }
    }


    setCity(city){
        this.setState({city})
    }

    render(){
        return (
            <View style={style.container}>
            <TextInput
            underlineColorAndroid='transparent' 
            onChangeText={(text)=> this.setCity(text) }
            style={style.input}
            value={this.state.city}
          />
           <Button color={style.color} onPress={()=>this.search()} title = "Search" />
           </View>

        )
    }

}

const navigationOptions = {
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle
}


export default StackNavigator ({
    Search: {
        screen: Search,
        navigationOptions
    },
    Resultat: {
        screen: List,
        navigationOptions
    }

})
>>>>>>> 4f0a8f30d0c864b0906e019600f2fc1976c4d864
