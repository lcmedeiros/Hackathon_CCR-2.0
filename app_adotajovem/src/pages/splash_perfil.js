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

export default function Splash_Perfil() {
    const navigation = useNavigation();

    function handleNavidateToCadastro_Usuario() {
        navigation.navigate('Cadastro_Usuario');
    }
    function handleNavidateToCadastro_Mentor() {
        navigation.navigate('Cadastro_Mentor');
    }
    function handleNavidateToCadastro_Empresa() {
        navigation.navigate('Cadastro_Empresa');
    }
    function handleNavidateToCadastro_Ongs() {
        navigation.navigate('Cadastro_Ongs');
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar backgroundColor="#00CC99" />

                    <View style={{ flex: 1, backgroundColor: '#00CC99', alignItems: 'center' }}>

                        <View>
                            <TouchableOpacity
                                style={styles.button}
                                activeOpacity={(0.2, 0.5)}
                                onPress={handleNavidateToCadastro_Usuario}>
                                <Text style={styles.txtbt}>Usuário</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity
                                style={styles.button}
                                activeOpacity={(0.2, 0.5)}
                                onPress={handleNavidateToCadastro_Mentor}>
                                <Text style={styles.txtbt}>Mentor</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity
                                style={styles.button}
                                activeOpacity={(0.2, 0.5)}
                                onPress={handleNavidateToCadastro_Empresa}>
                                <Text style={styles.txtbt}>Empresa</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity
                                style={styles.button}
                                activeOpacity={(0.2, 0.5)}
                                onPress={handleNavidateToCadastro_Ongs}>
                                <Text style={styles.txtbt}>Ongs</Text>
                            </TouchableOpacity>
                        </View>
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
    txtbt: {
        fontSize: 50,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    button: {
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 0.8,
    },
});
