import { View, TextInput, Text, TouchableOpacity } from "react-native"
import { Estilos } from "../Theme/Estilos"
import { useEffect, useState } from "react"
import axios from 'axios';

const api = axios.create({baseURL: "http://localhost:8080"})

export const CadastroEtapa1 = ({avancarEtapa, getId}) => {

    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [dtNascimento, setDtNascimento] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const salvar = () => {

        const data = {
            nome: nome,
            telefone: telefone,
            dtNascimento: dtNascimento,
            email: email,
            senha: senha
        };

        api.post("/api/registrar", JSON.stringify(data), {
            headers: {
              'Content-Type': 'application/json'
            }
          })
        .then((info)=>{
            getId(info.data.codigo);
        })
    }

    const verificarDados = () => {
        return 
    }

    return(

        <View style={Estilos.container}>

            <TextInput
                placeholder="Digite seu nome"
                style={Estilos.inputCadastro}
                value={nome}
                onChangeText={setNome}
            />


            <TextInput
                placeholder="Digite seu telefone"
                style={Estilos.inputCadastro}
                value={telefone}
                onChangeText={setTelefone}
            />

            <TextInput
                placeholder="Data de nascimento (AA/MM/DD)"
                style={Estilos.inputCadastro}
                value={dtNascimento}
                onChangeText={setDtNascimento}
            />

            <TextInput
                placeholder="Digite seu E-mail"
                style={Estilos.inputCadastro}
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                placeholder="Crie uma senha"
                style={Estilos.inputCadastro}
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