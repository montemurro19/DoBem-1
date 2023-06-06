import { NavigationContainer } from '@react-navigation/native';
import { Cadastro } from './screens/Cadastro';
import { CadastroEquipe } from './screens/CadastroEquipe';
import { Login } from './screens/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './screens/Home';
import { CadastroPJ } from './screens/CadastroPJ';
import { PaginaInicial } from './screens/PaginaInicial';

export default function App() {

  const Stack = createStackNavigator();


  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="Cadastro de Pessoa jurídica" component={CadastroPJ} />
    //     <Stack.Screen name="Cadastro de Equipes" component={CadastroEquipe} />
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Cadastro" component={Cadastro} />
    //     <Stack.Screen name="Pagina inicial" component={PaginaInicial} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <CadastroPJ/>

  );
}

