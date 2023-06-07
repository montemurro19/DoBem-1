import {  View, TextInput, Text, TouchableOpacity } from "react-native"
import { Estilos } from "../Theme/Estilos"
import { useState } from "react";
import axios from 'axios';

const api = axios.create({baseURL: "http://localhost:8080"})

export const CadastroPJ2 = ({retrocederEtapa, avancarEtapa, idEmpresa}) => {
    
    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')

    const salvar = () => {

        const dados = {
            cep: cep,
            logradouro: logradouro,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            numero: numero,
            complemento: complemento
        }

        api.post(`/api/empresa/endereco/${idEmpresa}`, JSON.stringify(dados), {
            headers: {
              'Content-Type': 'application/json'
            }
        })
    }

    return(
        
        <View style={Estilos.container}>
            <TextInput
                placeholder="CEP"
                style={Estilos.inputCadastro}
                value={cep}
                onChangeText={setCep}
            />

            <TextInput
                placeholder="Logradouro"
                style={Estilos.inputCadastro}
                value={logradouro}
                onChangeText={setLogradouro}
            />

            <TextInput
                placeholder="Bairro"
                style={Estilos.inputCadastro}
                value={bairro}
                onChangeText={setBairro}
            />

            <TextInput
                placeholder="Cidade"
                style={Estilos.inputCadastro}
                value={cidade}
                onChangeText={setCidade}
            />

            <TextInput
                placeholder="Estado"
                style={Estilos.inputCadastro}
                value={estado}
                onChangeText={setEstado}
            />

            <TextInput
                placeholder="Número"
                style={Estilos.inputCadastro}
                value={numero}
                onChangeText={setNumero}
            />

            <TextInput
                placeholder="Complemento"
                style={Estilos.inputCadastro}
                value={complemento}
                onChangeText={setComplemento}
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