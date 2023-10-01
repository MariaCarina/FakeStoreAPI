import React, { useState } from "react";
import { getFakeStore } from "./getFakeStore";
import { View, Text, TextInput, ActivityIndicator, Image, TouchableOpacity } from "react-native";

export default function VerFakeStore() {
    const [produto, setProduto] = useState();
    const [id, setId] = useState("");

    async function carregaFakeStore() {
        try {
            const resultado = await getFakeStore(id);
            if (id === '' || id === null) {
                setProduto(null)
            } else {
                setProduto(resultado.data);
            }
        } catch (error) {
            console.log(error);
            setProduto(null);
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 10, backgroundColor: 'black' }}>
            {produto ? (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Image source={{ uri: produto.image }} style={{ width: 100, height: 100, margin: 10 }} />
                    <Text style={{ textAlign: 'center', color: 'white' }}>Nome: {produto.title}</Text>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Preço: R${produto.price}</Text>
                </View>
            ) : (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <ActivityIndicator size="large" color="white" />
                    <Text style={{ textAlign: 'center', color: 'white' }}>Nome: Inválido</Text>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Preço: Inválido</Text>
                </View>
            )}

            <TextInput
                placeholder="ID do produto"
                value={id}
                onChangeText={(text) => setId(text)}
                style={{ borderWidth: 1, width: 200, height: 30, padding: 5, color: 'white', borderColor: 'white', margin: 10 }}
            />
            <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", backgroundColor: '#7b15e8', borderRadius: 15, padding: 10 }} onPress={carregaFakeStore}>
                <Text style={{ color: 'white', fontFamily: 'Arial', fontWeight: 'bold' }}>Carregar Produto</Text>
            </TouchableOpacity>
        </View>
    );
}
