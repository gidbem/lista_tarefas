import { createContext, useState } from "react";

export const Produtos = createContext();

export function ProdutosProvider({ children }) {

    const [tarefas, setTarefas] = useState([]);

    function adicionarTarefa(tarefa){
        setTarefas([...tarefas, tarefa]);
    }

    function removerTarefa(id){
        setTarefas(tarefas.filter(item => item.id !== id));
    }

    return(
        <Produtos.Provider
            value={{
                tarefas,
                adicionarTarefa,
                removerTarefa
            }}
        >
            {children}
        </Produtos.Provider>
    )
}