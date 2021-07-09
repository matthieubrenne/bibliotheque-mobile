import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { SearchBar } from 'react-native-elements';
import axios from 'axios';
import { ListItem } from 'react-native-elements';

export default function LibraryScreen({ navigation }) {

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=harry+potter:keyes&key=AIzaSyDMtLP8uWcm6BAj8TQUbstRYlWeUEDCQbk&maxResults=20`)
        .then(res => {
            setBooks(res.data.items);
        })
    }, [])

    function goToDetail(book) {
        navigation.navigate("Détail d'un livre", {
            book:book
        })
      }

    const [books,setBooks] = useState([]);

    return (
        <View style={styles.container}>
            <View style={styles.listBooks}>
                    <FlatList
                    data={books}
                    renderItem= {({ item }) => (
                        <ListItem bottomDivider onPress={()=> goToDetail(item)}>
                            <ListItem.Content>
                            <ListItem.Title>{item.volumeInfo.title}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron/>
                        </ListItem>
                    )}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    />
            </View>
            <View style={styles.searchBarView}>
            {/* <SearchBar
                placeholder="Rechercher"
                onChangeText={filter}
                platform="android"
                lightTheme
            /> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f9f9ec',
    },
    searchBarView: {
        width: 300,
        height: 40,
        marginBottom: 40,
    },
    listBooks: {
        marginBottom:30
    }
  });

//   https://www.googleapis.com/books/v1/volumes?q=harry+potter:keyes&key=AIzaSyDMtLP8uWcm6BAj8TQUbstRYlWeUEDCQbk
