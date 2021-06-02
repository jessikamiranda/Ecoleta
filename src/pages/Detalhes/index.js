import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';

import { Feather, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler'



export default function Detalhes() {
    navigation = useNavigation();

    function abrirPontos(){
        navigation.goBack();
    }
 return (
   <SafeAreaView style={{flex:1}}>
   <View style={styles.container}>
       <TouchableOpacity onPress={abrirPontos}>
           <Feather name="arrow-left" size={28} color="#34cb79"/>
       </TouchableOpacity>

       <Image style={styles.pointImage} source={{uri: "https://cdn.pixabay.com/photo/2012/09/18/19/56/recycle-57136_960_720.jpg"}}/>

       <Text style={styles.pointName}>Avemare</Text>
       <Text style={styles.pointItems}>Papelão e Óleo de cozinha</Text>

        <View style={styles.address}>
        <Text style={styles.addressTitle}>Endereço</Text>
        <Text style={styles.addressContent}>R. João Santana Leite, nº 417, Campo da Vila,{"\n"}Santana de Parnaíba - SP</Text>
        </View>
   </View>
   <View style={styles.footer}>
        <RectButton style={styles.button} onPress={() => {}}>
            <FontAwesome name="whatsapp" size={28} color="#fff" />
            <Text style={styles.buttonText}>WhatsApp</Text>
        </RectButton>

        <RectButton style={styles.button} onPress={() => {}}>
            <Feather name="mail" size={28} color="#fff" />
            <Text style={styles.buttonText}>E-mail</Text>
        </RectButton>
            
    </View>
   </SafeAreaView>

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 22,
        paddingTop: 80,
        backgroundColor: '#fff',
    },

    pointImage: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
        borderRadius: 10,
        marginTop: 32,
    },

    pointName: {
        color: '#322153',
        fontSize: 30,
        marginTop: 24,
        fontWeight: 'bold',
    },

    pointItems: {
        fontSize: 20,
        marginTop: 8,
        color: '#34cb79',
        fontWeight: "600",
    },

    address: {
        marginTop: 32,
    },

    addressTitle: {
        color: '#322153',
        fontSize: 16,
        fontWeight: 'bold',
    },

    addressContent: {
        marginTop: 8,
        color: '#6c6c80',
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 22,
        paddingBottom: 22,
        backgroundColor: '#fff',
    },

    button: {
        width: '48%',
        backgroundColor: '#34cb79',
        borderRadius: 10,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }, 

    buttonText: {
        marginLeft: 8,
        color: '#fff',
        fontSize: 16,
    },
})