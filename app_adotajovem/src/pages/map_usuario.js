/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    StatusBar,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Alert,
    TextInput,
} from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

import Local from '../img/Local.png';

export default function Splash() {
    const navigation = useNavigation();

    function handleNavidateToList_Mentor() {
        navigation.navigate('List_Mentor');
    }
    function handleNavidateToMentor() {
        navigation.navigate('Mentor');
    }
    return (
        <View>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: -12.7231931,
                    longitude: -38.3047545,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                }}
            >
                <Marker
                    icon={Local}
                    calloutAnchor={{ 
                        x: 2.7,
                         y: 0.8 }}
                    coordinate={{
                        latitude: -12.7231931,
                        longitude: -38.3047545,
                    }}
                >
                    <Callout tooltip={true} onPress={handleNavidateToMentor}>
                        <Text>Rev</Text>
                    </Callout>
                </Marker>

                <View>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={(0.2, 0.5)}
                        onPress={handleNavidateToList_Mentor}>
                        <TextInput>List_Mentor</TextInput>
                    </TouchableOpacity>
                </View>

            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});
