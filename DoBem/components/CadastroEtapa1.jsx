import { View, TextInput, Text } from "react-native"
import { Estilos } from "../Theme/Estilos"
import { useEffect, useState } from "react"

export const CadastroEtapa1 = ({salvarDados}) => {

    const [nome, setNome] = useState('')
    const [tel, setTel] = useState('')
    const [dtNasc, setDtNasc] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confEmail, setConfEmail] = useState('')
    const [confPass, setConfPass] = useState('')

    const dadosEtapa1 = {nome, tel, dtNasc, email, pass}

    useEffect( ()=> {
        salvarDados(dadosEtapa1)
    },[nome, tel, dtNasc, email, pass])
    return(

        <View style={Estilos.container}>

            <Text>Etapa 1</Text>

            <TextInput
                placeholder="Digite seu nome"
                style={Estilos.inputCadastro}
                onChange={(n)=>{
                    setNome(n)
                }}
            />


            <TextInput
                placeholder="Digite seu telefone"
                style={Estilos.inputCadastro}
                onChange={(t)=>{
                    setTel(t)
                }}
            />

            <TextInput
                placeholder="Digite sua data de nascimento"
                style={Estilos.inputCadastro}
                onChange={(dt)=>{
                    setDtNasc(dt)
                }}
            />

            <TextInput
                placeholder="Digite seu E-mail"
                style={Estilos.inputCadastro}
                onChange={(e)=>{
                    setEmail(e)
                }}
            />

            <TextInput
                placeholder="Confirmação de E-mail"
                style={Estilos.inputCadastro}
                onChange={(e)=>{
                    setConfEmail(e)
                }}
            />

            <TextInput
                placeholder="Crie uma senha"
                style={Estilos.inputCadastro}
                onChange={(p)=>{
                    setPass(p)
                }}
            />

            <TextInput
                placeholder="Confirmação de senha"
                style={Estilos.inputCadastro}
                onChange={(p)=>{
                    setConfPass(p)
                }}
            />
        </View>
    )
}