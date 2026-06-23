import { useContext } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";

import { Produtos } from "../navegacao/Produto";

export default function Listagem(){

    const { tarefas, removerTarefa } = useContext(Produtos);

    return(

        <FlatList

            data={tarefas}

            keyExtractor={(item)=>item.id}

            renderItem={({item})=>(

                <View style={styles.card}>

                    <Text>Tarefa: {item.titulo}</Text>

                    <Text>Descrição: {item.descricao}</Text>

                    <Text>Prioridade: {item.prioridade}</Text>

                    <Text>Tempo: {item.tempo} hora(s)</Text>

                    <Button
                        title="Remover"
                        onPress={()=>removerTarefa(item.id)}
                    />

                </View>

            )}

        />

    );

}

const styles = StyleSheet.create({

card:{
    margin:10,
    padding:15,
    borderWidth:1,
    borderRadius:10,
    marginTop: 13,
    backgroundColor: 'pink'
}

});