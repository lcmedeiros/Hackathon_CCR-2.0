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


export default function List_Mentor({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container.flex}>
                <View style={styles.container}>
                    <StatusBar backgroundColor="#00CC99" />
                    <View>
                        <View>
                            <Text style={styles.title}>Lista</Text>
                        </View>

                        <View style={styles.img}>
                            <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    style={{ width: 65, height: 65, marginRight: 20, }}
                                    source={require('../img/james.png')} />
                                <View>
                                    <Text>James</Text>
                                    <Text>Professor de Banco de Dados</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.img}>
                            <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    style={{ width: 65, height: 65, marginRight: 20, }}
                                    source={require('../img/beth.png')} />
                                <View>
                                    <Text>Beth Williams</Text>
                                    <Text>Emgenheira de Software</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.img}>
                            <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    style={{ width: 65, height: 65, marginRight: 20, }}
                                    source={require('../img/rev.png')} />
                                <View>
                                    <Text>Rev Shawn</Text>
                                    <Text>Gerente de Tecnologia da Informação</Text>
                                </View>
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
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,

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
