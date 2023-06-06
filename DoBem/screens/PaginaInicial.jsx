import { Text, TouchableOpacity, View } from 'react-native'
import { Estilos } from '../Theme/Estilos'

export const PaginaInicial = () => {
    return(
        <View style={Estilos.container}>
            <Text>Página inicial</Text>

            <TouchableOpacity style={Estilos.btnLogin}><Text style={Estilos.btnLoginText}>Criar Equipe</Text></TouchableOpacity>
        </View>
    )
}