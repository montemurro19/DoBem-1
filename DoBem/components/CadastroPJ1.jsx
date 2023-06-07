import {  View, TextInput, Text, TouchableOpacity } from "react-native"
import { Estilos } from "../Theme/Estilos"
import { useEffect, useState } from "react"
import axios from 'axios';

const api = axios.create({baseURL: "http://localhost:8080"})

export const CadastroPJ1 = ({ avancarEtapa, retrocederEtapa, getId }) => {

    const [razao, setRazao] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [telefone, setTelefone] = useState('')
    const [emailPj, setEmailPj] = useState('')
    const [senha, setSenha] = useState('')

    const salvar = () => {
        const dados = {
            razaoSocial: razao,
            cnpj: cnpj,
            telefone: telefone,
            email: emailPj,
            senha: senha,
        }

        api.post("/api/empresa", JSON.stringify(dados), {
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then((info)=>{
            getId(info.data.codigo);
        })
    }

    return(
        <View style={Estilos.container}>
            <TextInput style={Estilos.inputCadastro}
                placeholder="Razão social"
                value={razao}
                onChangeText={setRazao}
            />

            <TextInput style={Estilos.inputCadastro}
                placeholder="CNPJ"
                value={cnpj}
                onChangeText={setCnpj}
            />

            <TextInput style={Estilos.inputCadastro}
                placeholder="Telefone"
                value={telefone}
                onChangeText={setTelefone}
            />

            <TextInput style={Estilos.inputCadastro}
                placeholder="Email"
                value={emailPj}
                onChangeText={setEmailPj}
            />

            <TextInput style={Estilos.inputCadastro}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
            />

            <TouchableOpacity style={Estilos.btnLogin} 
                onPress={
                    ()=>{
                        salvar()
                        avancarEtapa()
                    }}
                >
                    <Text style={Estilos.btnLoginText}>Próximo</Text>
                </TouchableOpacity>

        </View>
    )
}