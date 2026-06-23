import { useContext, useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";

import { Produtos } from "../navegacao/Produto";

export default function Cadastro(){

    const { adicionarTarefa } = useContext(Produtos);

    const [titulo,setTitulo] = useState("");
    const [descricao,setDescricao] = useState("");
    const [prioridade,setPrioridade] = useState("");
    const [tempo,setTempo] = useState("");

    function salvar(){

        if(!titulo || !descricao || !prioridade || !tempo){
            Alert.alert("Preencha todos os campos!");
            return;
        }

        adicionarTarefa({
            id: Date.now().toString(),
            titulo,
            descricao,
            prioridade,
            tempo
        });

        setTitulo("");
        setDescricao("");
        setPrioridade("");
        setTempo("");

        Alert.alert("Tarefa cadastrada!");
    }

    return(

        <View style={styles.container}>

            <TextInput
                placeholder="Título"
                value={titulo}
                onChangeText={setTitulo}
                style={styles.input}
            />

            <TextInput
                placeholder="Descrição"
                value={descricao}
                onChangeText={setDescricao}
                style={styles.input}
            />

            <TextInput
                placeholder="Prioridade"
                value={prioridade}
                onChangeText={setPrioridade}
                style={styles.input}
            />

            <TextInput
                placeholder="Tempo estimado"
                value={tempo}
                onChangeText={setTempo}
                keyboardType="numeric"
                style={styles.input}
            />

            <Button
                title="Cadastrar"
                onPress={salvar}
            />

        </View>

    );

}

const styles = StyleSheet.create({

container:{
    flex:1,
    padding:20,
    justifyContent:"center",
},

input:{
    borderWidth:1,
    marginBottom:10,
    padding:10,
    borderRadius: 10,
    backgroundColor: 'pink'
}

});