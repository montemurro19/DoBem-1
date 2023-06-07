import { Text, TouchableOpacity, View } from 'react-native'
import { Estilos } from '../Theme/Estilos'

export const PaginaInicial = ({ navigation }) => {
    return(
        <View style={Estilos.container}>
            <Text>Página inicial</Text>

            <TouchableOpacity 
            style={Estilos.btnLogin}
            onPress={()=>{
                navigation.navigate('Cadastro de Pessoa jurídica')
            }}
            >
                <Text style={Estilos.btnLoginText}>Cadastrar Empresa</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={Estilos.btnLogin}
            onPress={()=>{
                navigation.navigate('Cadastro de Equipes')
            }}
            >
                <Text style={Estilos.btnLoginText}>Criar Equipe</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={Estilos.btnLogin}
            onPress={()=>{
                navigation.navigate('Cadastro Ong')
            }}
            >
                <Text style={Estilos.btnLoginText}>Cadastrar ONG's</Text>
            </TouchableOpacity>
        </View>
    )
}