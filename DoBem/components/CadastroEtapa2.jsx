import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { Estilos } from "../Theme/Estilos"
import { useState } from "react"
import axios from 'axios';

const api = axios.create({baseURL: "http://localhost:8080"})

export const CadastroEtapa2 = ({avancarEtapa, retrocederEtapa, idUser}) => {

    const [idEstrangeiro, setIdEstrangeiro] = useState('')
    const [cpf, setCpf] = useState('')
    const [rg, setRg] = useState('')

    const salvar = () => {

        const data = {
            idEstrangeiro: idEstrangeiro,
            cpf: cpf,
            rg: rg
        }

        api.post(`/api/login/usuario/documento/${idUser}`, JSON.stringify(data), {
            headers: {
              'Content-Type': 'application/json'
            }
        })
    }

    return(
        <View style={Estilos.container}>
            <Text style={Estilos.title}>Estamos quase finalizando...</Text>

            <TextInput
                placeholder="ID Estrangeiro"
                style={Estilos.inputCadastro}
                value={idEstrangeiro}
                onChangeText={setIdEstrangeiro}
            />

            <TextInput
                placeholder="CPF"
                style={Estilos.inputCadastro}
                value={cpf}
                onChangeText={setCpf}
            />

            <TextInput
                placeholder="RG"
                style={Estilos.inputCadastro}
                value={rg}
                onChangeText={setRg}
            />

            <View style={Estilos.buttonContainer}>
                <TouchableOpacity
                    style={Estilos.btnCadastro}
                    onPress={()=> {
                        retrocederEtapa()
                    }}
                >
                    <Text style={Estilos.btnLoginText}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={Estilos.btnCadastro}
                    onPress={()=> {
                        salvar()
                        avancarEtapa()
                    }}
                >
                    <Text style={Estilos.btnLoginText}>Próximo</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}