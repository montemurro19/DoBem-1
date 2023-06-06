
import { Text, View } from 'react-native'
import { Estilos } from '../Theme/Estilos'
import { TouchableOpacity } from 'react-native'
    export const Home = ({ navigation }) => {
    return(
        <View style={Estilos.container}>
            <Text style={Estilos.title}>"Alimente o Mundo, Compartilhe Sabor: Doe com Nosso App!"</Text>
            <TouchableOpacity style={Estilos.btnLogin} 
            onPress={()=>{
              navigation.navigate('Cadastro')
            }}>
                <Text style={Estilos.btnLoginText}>Cadastro</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Estilos.btnLogin} 
            onPress={()=>{
              navigation.navigate('Login')
            }}>
                <Text style={Estilos.btnLoginText}>Login</Text>
          </TouchableOpacity>
        </View>
    )
}