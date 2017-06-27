import React from 'react'
import { Text, View } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'
export default class AlbumList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      albums: []
    }
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.data)
      .then(data => this.setState({
        albums: data
      }))
  }

  renderAlbums() {
    return this.state.albums.map((album) =>
     <AlbumDetail myAlbum={album} key={album.title} />
    )
  }

  render() {
    console.log(this.state)
    return (
      <View>
        {this.renderAlbums()}
      </View>
    )
  }


}