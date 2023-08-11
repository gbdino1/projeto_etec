import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Texto from "../componentes/Texto";

import Topo from "./Cesta/componentes/Topo";
import Detalhes from "./Cesta/componentes/Detalhes";
import Item from "./Cesta/componentes/Item";

export default function Cesta({ topo, detalhes, itens }) {
    return <>
        <FlatList //O flatlist serve para rederizar e fazer a rolar itens grades em tela, como objetos de APIs.
        //pode ser usado também o <ScrollView></ScrollView> para colocar scroll na tela
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({nome}) => nome}
            ListHeaderComponent={() => {
                return <> 
                    <Topo {...topo}/>
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes}/>
                        <Texto style={estilos.titulo}>{ itens.titulo}</Texto>
                    </View>
                </>
            }}
        />
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});