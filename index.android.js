import React from 'react'
import { Text, AppRegistry } from 'react-native'

class App extends React.Component {
  render () {
    return (
      <Text> Some text </Text>
    )
  }
}

AppRegistry.registerComponent('albums', () => App)

