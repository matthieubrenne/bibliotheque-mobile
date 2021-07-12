import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
import { SearchBar } from 'react-native-elements';
import axios from 'axios';
import { ListItem } from 'react-native-elements';

export default function LibraryScreen({ navigation }) {

    const [books,setBooks] = useState([]);
    const [search,setSearch] = useState("");

    const apiKey= "AIzaSyDMtLP8uWcm6BAj8TQUbstRYlWeUEDCQbk";
    const maxResult = 30;
    
    function searchBook() {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}:keyes&key=${apiKey}&maxResults=${maxResult}`)
        .then(res => {
            setBooks(res.data.items);
        })
    }

    function goToDetail(book) {
        navigation.navigate("Détail d'un livre", {
            book:book
        })
    }   
    
    return (
        <View style={styles.container}>

            <View style={styles.searchBarView}>
                <View style={styles.searchbar}>
                    <SearchBar
                    placeholder="Rechercher un livre"
                    onChangeText={(text) => {setSearch(text)}}
                    value={search}
                    platform="android"
                    lightTheme
                />
                </View>
                <View style={styles.btn}>
                    <Button color= '#f5f5bb' title="ok" onPress={searchBook}/>
                </View>
            </View>

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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f9f9ec',
    },
    searchBarView: {
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    searchbar: {
        width: '80%',
        marginVertical: 5
    },
    btn: {
        margin: 18
    }
  });

//   https://www.googleapis.com/books/v1/volumes?q=harry+potter:keyes&key=AIzaSyDMtLP8uWcm6BAj8TQUbstRYlWeUEDCQbk
