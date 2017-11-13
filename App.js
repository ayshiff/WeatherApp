import React from 'react';
import Search from './components/Search'
import Result from './components/Result'
import {StatusBar, View} from 'react-native'
import {TabNavigator} from 'react-navigation'

const Tabs = TabNavigator({ 
  Search : {screen: Search},
  Result: {screen: Result}
}, {
  tabBarPosition: 'bottom',
  tabBarOptions :{
    showIcon:true,
    showLabel: false,
    pressColor: '#437C90',
    indicatorStyle: {
      height: 2,
      backgroundColor: '#A98743'
    },
    style: {
      backgroundColor: '#EEEBD3',

    }
  }
})


export default class App extends React.Component {



  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={true} />
      <Tabs />
     
      </View>
    )
  }
}
