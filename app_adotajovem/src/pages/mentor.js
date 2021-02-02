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


export default function Mentor({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container.flex}>
                <View style={styles.container}>
                    <StatusBar backgroundColor="#00CC99" />
                    <View>

                        <Text style={styles.title}>Perfil</Text>

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

                        <View style={styles.descrip}>
                            <Text style={styles.txtdesc}>Idade:</Text>
                            <Text style={styles.txtdesc}>32</Text>
                        </View>

                        <View style={styles.descrip}>
                            <Text style={styles.txtdesc}>Sexo:</Text>
                            <Text style={styles.txtdesc}>Feminino</Text>
                        </View>
                        <View style={styles.descrip}>
                            <Text style={styles.txtdesc}>Ocupação:</Text>
                            <Text style={styles.txtdesc}>Emgenheira de Software</Text>
                        </View>
                        <View style={styles.descrip}>
                            <Text style={styles.txtdesc}>Formação:</Text>
                            <Text style={styles.txtdesc}>Doutor em Emgenharia de Softwate</Text>
                        </View>
                        <View style={styles.descrip}>
                            <Text style={styles.txtdesc}>Linkedin:</Text>
                            <Text style={styles.txtdesc}>@will-kenny</Text>
                        </View>

                        <Text style={styles.title}>Datas e Horários</Text>

                        <View style={styles.hour}>
                            <Text>24/02/2021 15:00 horas</Text>
                            <Text>Disponivel</Text>
                        </View>
                        <View style={styles.hour}>
                            <Text>25/02/2021 14:00 horas</Text>
                            <Text>Disponivel</Text>
                        </View>
                        <View style={styles.hour}>
                            <Text>26/02/2021 10:00 horas</Text>
                            <Text>Disponivel</Text>
                        </View>

                        <View style={styles.viewBt}>
                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={(0.2, 0.5)}
                            onPress={() => Alert.alert('')}>
                            <Text style={styles.txtbt}>Solicitar Mentoria</Text>
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
    descrip: {
        borderWidth: 1,
        borderRadius: 20,
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,

    },
    txtdesc: {
        margin: 10,
    },
    img: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    hour: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        alignItems: 'center',
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
    viewBt: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
      },
      txtbt: {
        fontSize: 14,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
      },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 280,
        height: 40,
        backgroundColor: '#00CC99',
        borderRadius: 10,
        shadowOpacity: 0.8,
    },
});
