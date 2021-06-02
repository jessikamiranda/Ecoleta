import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import { Feather } from '@expo/vector-icons';

import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';


export default function Pontos() {

    navigation = useNavigation();

    function abrirHome(){
        navigation.goBack();
    }

    function abrirDetalhes(){
        navigation.navigate('Detalhes');
    }

 return (

   <>
   <View style={styles.container}>
       <TouchableOpacity onPress={abrirHome}>
           <Feather name="arrow-left" size={28} color="#34cb79"/>
       </TouchableOpacity>

       <Text style={styles.title}>Bem Vindo</Text>
       <Text style={styles.description}>Encontre no mapa um ponto de coleta</Text>

       <View style={styles.mapContainer}>
           <MapView style={styles.map} initialRegion={{
               latitude: -23.4429636,
               longitude: -46.9227014,
               latitudeDelta: 0.014,
               longitudeDelta: 0.014
           }}>

               <Marker onPress={abrirDetalhes} style={styles.mapMarker} coordinate={{
                   latitude: -23.44533841352426,
                   longitude: -46.916707857448756, 
                }}>
                

                <View style={styles.mapMarkerContainer}>
                    <Image style={styles.mapMarkerImage} source={{uri: "https://cdn.pixabay.com/photo/2019/07/23/17/19/trash-4358272_960_720.jpg"}}/>
                    <Text style={styles.mapMarkerTitle}>Seven Resíduos</Text>
                </View>

               </Marker>

               <Marker onPress={abrirDetalhes} style={styles.mapMarker} coordinate={{
                   latitude: -23.442838852017708,
                   longitude: -46.92424106033503, 
                }}>
                

                <View style={styles.mapMarkerContainer}>
                    <Image style={styles.mapMarkerImage} source={{uri: "https://cdn.pixabay.com/photo/2012/09/18/19/56/recycle-57136_960_720.jpg"}}/>
                    <Text style={styles.mapMarkerTitle}>Avemare</Text>
                </View>

               </Marker>

           </MapView>
       </View>
   </View>

   <View style={styles.itemsContainer}>
       <ScrollView horizontal showsHorizontalScrollIndicator={false}>

           <TouchableOpacity style={styles.item}>
               <Image width={42} height={42} source={require('../../assets/icones/baterias.png')}/>
               <Text>Baterias</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.item}>
               <Image width={42} height={42} source={require('../../assets/icones/eletronicos.png')}/>
               <Text>Eletrônicos</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.item}>
               <Image width={42} height={42} source={require('../../assets/icones/lampadas.png')}/>
               <Text>Lâmpadas</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.item}>
               <Image width={42} height={42} source={require('../../assets/icones/oleo.png')}/>
               <Text>Óleo</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.item}>
               <Image width={42} height={42} source={require('../../assets/icones/organicos.png')}/>
               <Text>Orgânico</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.item}>
               <Image width={42} height={42} source={require('../../assets/icones/papeis-papelao.png')}/>
               <Text>Papéis</Text>
           </TouchableOpacity>

       </ScrollView>
   </View>
   </>

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 22,
        paddingTop: 80,
        backgroundColor: '#fff',
    },

    title: {
        fontSize: 20,
        marginTop: 24,
        fontWeight: "700",
    },

    description: {
        fontSize: 16,
        marginTop: 4,
        color: "#6c6c80",
    },

    mapContainer: {
        flex: 1,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 16,
    },

    map: {
        width: '100%',
        height: '100%',
    },

    itemsContainer: {
        backgroundColor: '#fff',
        paddingTop: 22,
        paddingBottom: 22,
        paddingLeft: 22,
    },

    item: {
        backgroundColor: '#dcf9eb',
        height: 120,
        width: 120,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 16,
        marginRight:8,
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
    },

    mapMarker: {
        width: 90,
        height: 80,
    },

    mapMarkerContainer: {
        width: 90,
        height: 70,
        backgroundColor: '#34CB79',
        flexDirection: 'column',
        borderRadius: 8,
        alignItems: 'center',
    },

    mapMarkerImage: {
        width: 90,
        height: 45,
        resizeMode: 'cover',
    },

    mapMarkerTitle: {
        flex: 1,
        color: '#FFF',
        fontSize: 11,
        lineHeight: 25,
    }
});