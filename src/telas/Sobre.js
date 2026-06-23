import { View, Text, StyleSheet } from "react-native";

export default function Sobre(){

    return(

        <View style={styles.container}>

            <Text style={styles.titulo}>Lista de Tarefas</Text>

            <Text>
                Aplicativo desenvolvido para cadastrar,
                listar e remover tarefas utilizando. Por Giovanna de Bem.
            </Text>

        </View>

    );

}

const styles = StyleSheet.create({

container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    padding:20
},

titulo:{
    fontSize:22,
    fontWeight:"bold",
    marginBottom:20
}

});