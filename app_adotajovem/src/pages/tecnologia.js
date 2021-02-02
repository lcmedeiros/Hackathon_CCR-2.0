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

export default function Tecnologia() {
    const navigation = useNavigation();

    function handleNavidateToMap_Usuario() {
        navigation.navigate('Map_Usuario');
    }
    return (
        <SafeAreaView>
            <ScrollView style={styles.container.flex}>
                <View style={styles.container}>
                    <StatusBar backgroundColor="#00CC99" />
                    <View style={{ alignItems: 'center' }}>
                        <View>
                            <Text style={styles.title}>Emgenharia de Software</Text>
                        </View>

                        <View style={styles.img}>
                            <Image
                                style={{ width: 360, height: 250 }}
                                source={require('../img/engenharia.png')} />
                        </View>
                        <View style={{ top: 20 , marginBottom:20,}}>
                            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 20, marginRight: 20, marginBottom: 10, }}>
                                Este profissional tem como principal objetivo o desenvolvimento de softwares,
                                assim como de programas computacionais. Ao engenheiro de software é atribuída a
                                responsabilidade de desenhar e também testar este novo programa. Além disso, o
                                profissional fica encarregado de realizar a manutenção, assim como efetuar uma revisão
                                periódica sobre o sistema.
                            </Text>
                            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 20, marginRight: 20, marginBottom: 10, }}>
                                Neste caso, estes profissionais são encarregados pelo desenvolvimento de aplicativos,
                                plataformas digitais, sistemas, jogos, entre outros, conforme a demanda. Como exemplo,
                                podemos citar aplicativos de bancos, plataformas de estudos, sistemas desenvolvidos
                                especificamente para área médica. Casos em que o objetivo é agilizar no dia a dia a vida das
                                pessoas através da tecnologia.
                            </Text>
                            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 20, marginRight: 20, marginBottom: 10, }}>
                                Sendo assim, o engenheiro de software tem como foco desenvolver programas e mantê-los,
                                além de tempos em tempos fazer a adequação deste sistema de acordo com as necessidades
                                dos seus usuários, sempre visando maior produtividade e desempenho. Simplificando,
                                estes profissionais são responsáveis pela criação de tecnologias que utilizamos diariamente.
                        </Text>
                        </View>

                        <View style={styles.btn}>
                                <TouchableOpacity
                                    style={{ alignItems: 'center' }}
                                    activeOpacity={(0.2, 0.5)}
                                    onPress={handleNavidateToMap_Usuario}>
                                    <Text style={styles.txt}>Mapa</Text>
                                </TouchableOpacity>
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
        marginBottom: 10,
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
