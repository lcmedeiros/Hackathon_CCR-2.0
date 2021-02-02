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
                            <Text style={styles.txtdesc}>Estudante</Text>
                        </View>
                        <View style={styles.descrip}>
                            <Text style={styles.txtdesc}>Formação:</Text>
                            <Text style={styles.txtdesc}>Ensino Médio</Text>
                        </View>
                        <View style={styles.descrip}>
                            <Text style={styles.txtdesc}>Interesse:</Text>
                            <Text style={styles.txtdesc}>Tecnologia</Text>
                        </View>
                        <View style={styles.descrip}>
                            <Text style={styles.txtdesc}>Hobby</Text>
                            <Text style={styles.txtdesc}>Dança</Text>
                        </View>
                        <View style={styles.descrip}>
                            <Text style={styles.txtdesc}>Linkedin:</Text>
                            <Text style={styles.txtdesc}>@will-kenny</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.viewBt}>
                                <TouchableOpacity
                                    style={styles.buttonAP}
                                    activeOpacity={(0.2, 0.5)}
                                    onPress={() => Alert.alert('')}>
                                    <Text style={styles.txtbt}>Mentorar</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.viewBt}>
                                <TouchableOpacity
                                    style={styles.buttonRE}
                                    activeOpacity={(0.2, 0.5)}
                                    onPress={() => Alert.alert('')}>
                                    <Text style={styles.txtbt}>Não Mentorar</Text>
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
    buttonAP: {
        width: 100,
        height: 100,
        backgroundColor: '#A1E9C5',
        borderWidth: 1,
        borderColor: '#FFBCD4',
        borderRadius: 20,
        shadowOpacity: 0.8,
        alignContent: 'center',
        justifyContent: 'center',
    },
    buttonRE: {
        width: 100,
        height: 100,
        backgroundColor: '#FFBCD4',
        borderWidth: 1,
        borderColor: '#A1E9C5',
        borderRadius: 20,
        alignContent: 'center',
        justifyContent: 'center',
    },
});
