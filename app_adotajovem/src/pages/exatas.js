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
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Exatas() {
    const navigation = useNavigation();

    function handleNavidateEngenharia() {
        navigation.navigate('Engenharia');
    }
    function handleNavidateToTecnologia() {
        navigation.navigate('Tecnologia');
    }
    function handleNavidateToFinanceiro() {
        navigation.navigate('Financeiro');
    }
    return (
        <SafeAreaView>
            <ScrollView style={styles.container.flex}>
                <View style={styles.container}>
                    <StatusBar backgroundColor="#00CC99" />
                    <View style={{ alignItems: 'center' }}>
                        <View>
                            <Text style={styles.title}>Vamos descobrir que o gosta de fazer</Text>
                        </View>

                        <View style={styles.img}>
                            <Image
                                style={{ width: 300, height: 250 }}
                                source={require('../img/img_usuario.png')} />
                        </View>
                        <View style={styles.quadro}>
                            <Text style={{ top: 20, fontSize: 20, textAlign: 'center', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal', }}>Qual área gosta?</Text>
                            <View style={styles.btn}>
                                <TouchableOpacity
                                    style={{ alignItems: 'center' }}
                                    activeOpacity={(0.2, 0.5)}
                                    onPress={handleNavidateEngenharia}>

                                    <Text style={styles.txt}>Engenharia</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.btn}>
                                <TouchableOpacity
                                    style={{ alignItems: 'center' }}
                                    activeOpacity={(0.2, 0.5)}
                                    onPress={handleNavidateToTecnologia}>

                                    <Text style={styles.txt}>Tecnologia</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.btn}>
                                <TouchableOpacity
                                    style={{ alignItems: 'center' }}
                                    activeOpacity={(0.2, 0.5)}
                                    onPress={handleNavidateToFinanceiro}>

                                    <Text style={styles.txt}>Financeiro</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    title: {
        marginTop: 35,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 23,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
    },
    img: {
        alignItems: 'center',
        marginBottom: 40,
    },
    quadro: {
        flex: 1,
        top: -10,
        width: 300,
        height: 270,
        elevation: 5,
        backgroundColor: '#FFF',
        borderRadius: 20,
        alignItems: 'center'
    },
    btn: {
        top: 50,
        marginBottom: 30,
        width: 175,
        height: 30,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderRadius: 20,
        alignContent: 'center',
        justifyContent: 'center',
    },
    txt: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
    },
    txtbuton: {
        fontSize: 14,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },
    button: {
        width: 175,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 0.8,
        borderColor: '#000',
        borderRadius: 10,
        marginBottom: 10,
    },
});
