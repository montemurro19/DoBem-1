import { NavigationContainer } from '@react-navigation/native';
import { Cadastro } from './screens/Cadastro';
import { CadastroEquipe } from './screens/CadastroEquipe';
import { Login } from './screens/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './screens/Home';
import { CadastroPJ } from './screens/CadastroPJ';
import { PaginaInicial } from './screens/PaginaInicial';
import { CadastroOng } from './screens/CadastroOng';
import { ListaEquipes } from './screens/Equipes';
import { useState } from 'react'

export default function App() {

  const Stack = createStackNavigator();

  const [id, setId] = useState(null)
  const [token, setToken] = useState(null)  

  const buscarId = (paramId)=> {
    setId(paramId)
  }

  const buscarToken = (paramToken)=> {
    setToken(paramToken)
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Cadastro de Pessoa jurídica" component={CadastroPJ}/>
        <Stack.Screen name="Cadastro de Equipes">
          {props => <CadastroEquipe {...props} id={id} token={token} navigation={props.navigation} />}
        </Stack.Screen>
        <Stack.Screen name="Login">
          {props => <Login {...props} buscarId={buscarId} buscarToken={buscarToken} navigation={props.navigation} />}
        </Stack.Screen>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Pagina inicial" component={PaginaInicial}/>
        <Stack.Screen name="Cadastro Ong">
        {props => <CadastroOng {...props} token={token} navigation={props.navigation} />}
        </Stack.Screen>
        <Stack.Screen name="Equipes">
          {props => <ListaEquipes {...props} token={token} navigation={props.navigation} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

