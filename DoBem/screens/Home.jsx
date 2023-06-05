
import { Text, View } from 'react-native'
import { Estilos } from '../Theme/Estilos'
import { TouchableOpacity } from 'react-native'
    export const Home = ({ navigation }) => {
    return(
        <View>
            <Text>Olá</Text>
            <TouchableOpacity style={Estilos.btnCadastro} 
            onPress={()=>{
              navigation.navigate('Cadastro')
            }}>
                <Text>Cadastro</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Estilos.btnCadastro} 
            onPress={()=>{
              navigation.navigate('Login')
            }}>
                <Text>Login</Text>
          </TouchableOpacity>
        </View>
    )
}