import { View, Text, TextInput, Alert } from "react-native"
import { Estilos } from "../Theme/Estilos"
import { useEffect, useState } from "react"

export const CadastroEtapa2 = ({salvarDados}) => {

    const [idEstrangeiro, setIdEstrangeiro] = useState('')
    const [cpf, setCpf] = useState('')
    const [rg, setRg] = useState('')

    const dadosEtapa2 = {idEstrangeiro, cpf, rg}

    useEffect(()=>{
       salvarDados(dadosEtapa2)
    }, [idEstrangeiro, cpf, rg])
    return(
        <View style={Estilos.container}>
            <Text style={Estilos.title}>Estamos quase finalizando...</Text>

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