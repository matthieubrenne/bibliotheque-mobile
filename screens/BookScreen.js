import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Card } from 'react-native-elements';


export default function BookScreen({ route }) {

    const book = route.params.book;

    return (
        <Card style={styles.card}>
            
                <View> 
                    <Text>{book.volumeInfo.title}</Text>   
                    <Text>{book.volumeInfo.subtitle}</Text> 
                    <Text>Description : {book.volumeInfo.description}</Text>   
                    <Text>Date de parution: {book.volumeInfo.publishedDate}</Text>
                    <Image
                        style={styles.img}
                        source={book.volumeInfo.imageLinks.smallThumbnail}
                    /> 
                </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    img: {
        width:200,
        height:200
    }
  });
