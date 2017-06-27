import React from 'react'
import { View, Text, Image } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'

export default class AlbumDetail extends React.Component {
  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <View>
              <Image
                source={{uri: this.props.myAlbum.thumbnail_image}}
                style={styles.thumbnailStyle}
              />
            </View>
            <View style={styles.headerContentStyle}>
              <Text>{this.props.myAlbum.title}</Text>
              <Text>{this.props.myAlbum.artist}</Text>
            </View>
          </CardSection>
        </Card>
      </View>
    )
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
}