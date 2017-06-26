import React from 'react'
import { AppRegistry } from 'react-native'
import Header from './src/components/Header'

class App extends React.Component {
  render () {
    return (
      <Header headerText={'Albums'}/>
    )
  }
}

AppRegistry.registerComponent('albums', () => App)

