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
    TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro_Usuario() {
    const navigation = useNavigation();

    function handleNavidateToCadastro_Usuario_Perfil() {
        navigation.navigate('Cadastro_Usuario_Perfil');
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar backgroundColor="#00CC99" />

                    <View style={{ margin: 20}}>
                        <Text style={styles.txt}>Nome:</Text>
                        <TextInput style={styles.txtarea}></TextInput>
                    </View>

                    <View style={{ margin: 20}}>
                        <Text style={styles.txt}>CPF:</Text>
                        <TextInput style={styles.txtarea}></TextInput>
                    </View>

                    <View style={{ margin: 20}}>
                        <Text style={styles.txt}>Contato:</Text>
                        <TextInput style={styles.txtarea}></TextInput>
                    </View>

                    <View style={{ margin: 20}}>
                        <Text style={styles.txt}>Endereço:</Text>
                        <TextInput style={styles.txtarea}></TextInput>
                    </View>

                    <View style={{ margin: 20}}>
                        <Text style={styles.txt}>Ocupação:</Text>
                        <TextInput style={styles.txtarea}></TextInput>
                    </View>

                    <View style={{ margin: 20}}>
                        <Text style={styles.txt}>Facebook:</Text>
                        <TextInput style={styles.txtarea}></TextInput>
                    </View>

                    <View style={{ margin: 20}}>
                        <Text style={styles.txt}>Linkedin:</Text>
                        <TextInput style={styles.txtarea}></TextInput>
                    </View>

                    <View style={{ margin: 20}}>
                        <Text style={styles.txt}>Instagram:</Text>
                        <TextInput style={styles.txtarea}></TextInput>
                    </View>

                    <View style={styles.viewBt}>
                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={(0.2, 0.5)}
                            onPress={handleNavidateToCadastro_Usuario_Perfil}>
                            <Text style={styles.txtbt}>Proximo</Text>
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
    },
    txt: {
        fontSize: 14,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#8FA7B2',
        textAlign: 'left',
        marginBottom: 10,
    },
    txtarea: {
        borderColor: 'gray',
        borderWidth: 1,
        width: 325,
        height: 60,
        borderRadius: 20,
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
