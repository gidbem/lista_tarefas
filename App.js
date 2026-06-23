import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Cadastro from './src/telas/Cadastro';
import Listagem from './src/telas/Listagem';
import Sobre from './src/telas/Sobre';

import { ProdutosProvider } from './src/navegacao/Produto';

const Tab = createBottomTabNavigator();

export default function App() {

  return (

    <ProdutosProvider>

      <NavigationContainer>

        <Tab.Navigator>

          <Tab.Screen
            name="Cadastrar"
            component={Cadastro}
          />

          <Tab.Screen
            name="Lista de tarefas"
            component={Listagem}
          />

          <Tab.Screen
            name="Sobre"
            component={Sobre}
          />

        </Tab.Navigator>

      </NavigationContainer>

    </ProdutosProvider>

  );

}



