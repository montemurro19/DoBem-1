import { View, Text, TextInput } from "react-native"
import { Estilos } from "../Theme/Estilos"
import { useState } from "react"

export const CadastroEtapa2 = () => {

    const [idEstrangeiro, setIdEstrangeiro] = useState('')
    const [cpf, setCpf] = useState('')
    const [rg, setRg] = useState('')

    return(
        <View style={Estilos.container}>
            <Text>Etapa 2</Text>

            <TextInput
                placeholder="ID Estrangeiro"
                style={Estilos.inputCadastro}
            />

            <TextInput
                placeholder="CPF"
                style={Estilos.inputCadastro}
            />

            <TextInput
                placeholder="RG"
                style={Estilos.inputCadastro}
            />
        </View>
    )
}