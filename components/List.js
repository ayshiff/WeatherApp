<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import {Text, ActivityIndicator,ListView } from 'react-native'
import style from '../Style'
import axios from 'axios'
import WeatherRow from './weath/Row'

export default class List extends React.Component {


    static navigationOptions = ({navigation}) => {
    return {
        title: 'Weather / ' + navigation.state.params.city
    } 
        
    }

    

    constructor (props) {
        super(props)
        this.state = {
            city: this.props.navigation.state.params.city ,
            report: null
        }
        this.fetchWeather()
    }

    fetchWeather (){
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&mode=json&units=metric&APPID=f86b66451a3da96378cc9ffd5f2b48e0`)
        .then ((response) => {
            this.setState({report: response.data})
        })
    }


    render () {
        if (this.state.report == null) {
            return (
            <ActivityIndicator color='#F68E5F' size='large'  />
            )
        } else {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return (

            <ListView
            dataSource={ds.cloneWithRows(this.state.report.list)}
            renderRow={(row, j ,k) => <WeatherRow main={row} index = {parseInt(k, 10)}  />}
          />
        )
    }
    }

=======
import React from 'react'
import {Text, ActivityIndicator,ListView } from 'react-native'
import style from '../Style'
import axios from 'axios'
import WeatherRow from './weath/Row'

export default class List extends React.Component {


    static navigationOptions = ({navigation}) => {
    return {
        title: 'Weather / ' + navigation.state.params.city
    } 
        
    }

    

    constructor (props) {
        super(props)
        this.state = {
            city: this.props.navigation.state.params.city ,
            report: null
        }
        this.fetchWeather()
    }

    fetchWeather (){
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&mode=json&units=metric&APPID=f86b66451a3da96378cc9ffd5f2b48e0`)
        .then ((response) => {
            this.setState({report: response.data})
        })
    }


    render () {
        if (this.state.report == null) {
            return (
            <ActivityIndicator color='#F68E5F' size='large'  />
            )
        } else {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return (

            <ListView
            dataSource={ds.cloneWithRows(this.state.report.list)}
            renderRow={(row, j ,k) => <WeatherRow main={row} index = {parseInt(k, 10)}  />}
          />
        )
    }
    }

>>>>>>> 4f0a8f30d0c864b0906e019600f2fc1976c4d864
=======
import React from 'react'
import {Text, ActivityIndicator,ListView } from 'react-native'
import style from '../Style'
import axios from 'axios'
import WeatherRow from './weath/Row'

export default class List extends React.Component {


    static navigationOptions = ({navigation}) => {
    return {
        title: 'Weather / ' + navigation.state.params.city
    } 
        
    }

    

    constructor (props) {
        super(props)
        this.state = {
            city: this.props.navigation.state.params.city ,
            report: null
        }
        this.fetchWeather()
    }

    fetchWeather (){
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&mode=json&units=metric&APPID=f86b66451a3da96378cc9ffd5f2b48e0`)
        .then ((response) => {
            this.setState({report: response.data})
        })
    }


    render () {
        if (this.state.report == null) {
            return (
            <ActivityIndicator color='#F68E5F' size='large'  />
            )
        } else {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return (

            <ListView
            dataSource={ds.cloneWithRows(this.state.report.list)}
            renderRow={(row, j ,k) => <WeatherRow main={row} index = {parseInt(k, 10)}  />}
          />
        )
    }
    }

>>>>>>> 4f0a8f30d0c864b0906e019600f2fc1976c4d864
}