import React from 'react'
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { useFonts } from 'expo-font';

export default function SplashScreen({ navigation }) {

    let [fontsloaded] = useFonts({
        'AlfaSlabOne': require('../assets/fonts/AlfaSlabOne-Regular.ttf')
    })

    function goToLibrary() {
        navigation.navigate('Mes livres')
      }

    if(!fontsloaded) {
        return <View><Text>Loading...</Text></View>
    } else {
        return (
            <View style={styles.container}>
    
                <View style={styles.logoView}>
                    <Image
                        style={styles.Logo}
                        source={require('../assets/img/logo.png')}
                        style={{ width: 250, height: 250 }}
                    />  
                    <Text style={styles.title}> App' Books</Text>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={goToLibrary}
                    >
                    <Text style={styles.btnTitle}>Commencer</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f9f9ec',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    title: {
        textAlign: 'center',
        paddingVertical: 40,
        color: 'grey',
        fontSize: 35,
        fontFamily: 'AlfaSlabOne'
    },
    logoView: {
        marginTop: 140
    },
    button: {
        alignItems: "center",
        backgroundColor: '#f1f1c8',
        padding: 10,
        borderRadius: 50,
        width: 200,
        height: 60,
    },
    btnTitle: {
        fontSize: 25,
        color: 'grey'
    }

  });
