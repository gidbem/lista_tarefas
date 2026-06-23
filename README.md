#Lista de Tarefas
Projeto realizado por Giovanna Rodrigues Neves de Bem
PROG MOBILE INFO-2

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
##Sobre o projeto

Este projeto foi desenvolvido como atividade prática da disciplina de Desenvolvimento Mobile utilizando React Native e Expo.

O aplicativo permite cadastrar tarefas, visualizar todas as tarefas em uma lista e removê-las quando forem concluídas. O gerenciamento dos dados é feito utilizando Context API, permitindo compartilhar as informações entre as telas.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
##Funcionalidades

- Cadastro de tarefas.
- Validação para impedir cadastro com campos em branco.
- Limpeza automática dos campos após o cadastro.
- Armazenamento das tarefas em um estado global (Context API).
- Listagem das tarefas utilizando FlatList.
- Exclusão de tarefas com atualização imediata da tela.
- Navegação entre três telas utilizando Bottom Tab Navigator.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
#Estrutura do projeto

```
src
├── navegacao
│   └── Produto.js
├── telas
│   ├── Cadastro.js
│   ├── Listagem.js
│   └── Sobre.js
App.js
```

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Como executar o projeto

1. Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

2. Entre na pasta do projeto:

```bash
cd projeto
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o aplicativo:

```bash
npx expo start
```

5. Abra o aplicativo utilizando:
- Expo Go (Android ou iPhone)
- Emulador Android
- Simulador iOS

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
#Estudo sobre useEffect

#O que é o **useEffect** e qual o seu papel no ciclo de vida de um componente?

O useEffect é um Hook do React que permite executar efeitos colaterais em componentes funcionais. Esses efeitos podem incluir chamadas para APIs, acesso ao armazenamento local, criação de temporizadores, 
atualização do título da tela e outras operações que precisam acontecer depois que o componente é renderizado.

Ele desempenha um papel semelhante aos métodos de ciclo de vida dos componentes de classe, como `componentDidMount`, `componentDidUpdate` e `componentWillUnmount`.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
#Como funciona o array de dependências?

O segundo parâmetro do useEffect é um array de dependências.

Ele informa ao React quando o efeito deve ser executado novamente.

#Sem array

```javascript
useEffect(() => {
    console.log("Executa em todas as renderizações.");
});
```

O efeito será executado sempre que o componente renderizar.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
#Array vazio ([])

```javascript
useEffect(() => {
    console.log("Executa apenas uma vez.");
}, []);
```

Quando o array está vazio, o efeito é executado apenas uma única vez, logo após o componente ser montado.

Esse comportamento é muito utilizado para carregar informações iniciais da aplicação.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
#Array com dependências

```javascript
useEffect(() => {
    console.log("Executa quando a variável mudar.");
}, [tarefa]);
```

Nesse caso, o efeito será executado sempre que o valor de `tarefa` for alterado;

