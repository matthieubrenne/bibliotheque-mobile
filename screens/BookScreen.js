import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';
import { useFonts } from 'expo-font';



export default function BookScreen({ route }) {

    const book = route.params.book;

    let [fontsloaded] = useFonts({
        'AlfaSlabOne': require('../assets/fonts/AlfaSlabOne-Regular.ttf')
    })

    if(!fontsloaded) {
        return <View><Text>Loading...</Text></View>
    } else {
        return (
            <Card style={styles.card}>
                <ScrollView>
                    <View style={styles.booksInfo}> 
                        <Text style={styles.title}>{book.volumeInfo.title}</Text>   
                        <Text style={styles.subtitle}>{book.volumeInfo.subtitle}</Text> 
                        <Text style={styles.auteur}>Auteur(s) : {book.volumeInfo.authors}</Text>
                        <Text style={styles.description}>Description : {book.volumeInfo.description}</Text> 
                        <Image
                            style={styles.img}
                            source={{uri:book.volumeInfo.imageLinks.thumbnail}}
                        />  
                        <Text style={styles.date}>Date de parution: {book.volumeInfo.publishedDate}</Text>
                         
                    </View>
                </ScrollView>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    img: {
        width:200,
        height:300,
        marginVertical: 20,
        marginHorizontal: 45
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 20,
        fontFamily: 'AlfaSlabOne'
    },
    subtitle: {
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'AlfaSlabOne'

    }, 
    date: {
        textAlign: 'center',
        fontStyle: 'italic',
        fontFamily: 'AlfaSlabOne'
    },
    auteur: {
        textAlign: 'center',
        marginVertical: 15
    },
    description: {
        color: 'grey'
    }
  });
