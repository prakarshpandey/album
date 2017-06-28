import React from 'react'
import { View, Text, Image, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

export default class AlbumDetail extends React.Component {
  render() {
    return (
      <View>

        <Card>

          <CardSection>
            <View style={styles.thumbnailContainerStyle}>
              <Image
                source={{uri: this.props.myAlbum.thumbnail_image}}
                style={styles.thumbnailStyle}
              />
            </View>
            <View style={styles.headerContentStyle}>
              <Text style={styles.headerTextStyle}>{this.props.myAlbum.title}</Text>
              <Text>{this.props.myAlbum.artist}</Text>
            </View>
          </CardSection>

          <CardSection>
            <Image
              source={{uri: this.props.myAlbum.image}}
              style={styles.imageStyle}
            />
          </CardSection>

          <CardSection>
            <Button onPress={() => Linking.openURL(this.props.myAlbum.url)}>
              Buy Now
            </Button>
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
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }

}