import { View, Text, TextInput } from "react-native"
import { Estilos } from "../Theme/Estilos"

export const CadastroEtapa3 = () => {
    return(
        <View style={Estilos.container}>
            <Text>Etapa 3</Text>
            <TextInput
                placeholder="CEP"
                style={Estilos.inputCadastro}
            />

            <TextInput
                placeholder="Logradouro"
                style={Estilos.inputCadastro}
            />

            <TextInput
                placeholder="Bairro"
                style={Estilos.inputCadastro}
            />

            <TextInput
                placeholder="Cidade"
                style={Estilos.inputCadastro}
            />

            <TextInput
                placeholder="Estado"
                style={Estilos.inputCadastro}
            />

            <TextInput
                placeholder="Número"
                style={Estilos.inputCadastro}
            />

            <TextInput
                placeholder="Complemento"
                style={Estilos.inputCadastro}
            />
        </View>
    )
}