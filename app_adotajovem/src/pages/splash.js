/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    StatusBar,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Splash() {
    const navigation = useNavigation();

    function handleNavidateToSplash_Perfil() {
        navigation.navigate('Splash Perfil');
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar backgroundColor="#00CC99" />

                    <View style={{ flex: 1, backgroundColor: '#00CC99' , alignItems: 'center'}}>

                        <Text style={styles.txTitulo}>AdotaJovem</Text>

                            <TouchableOpacity
                                style={styles.button}
                                activeOpacity={(0.2, 0.5)}
                                onPress={handleNavidateToSplash_Perfil}
                                >
                                <Text style={styles.txTitulo}>Acesso</Text>
                            </TouchableOpacity>

                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        height: 680
    },
    txTitulo: {
        fontSize: 50,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 0.8,
    },
});
