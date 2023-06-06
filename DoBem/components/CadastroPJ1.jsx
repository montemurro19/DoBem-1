import { TextInput, View } from "react-native"
import { Estilos } from "../Theme/Estilos"
import { useEffect, useState } from "react"

export const CadastroPJ1 = ({salvarDados}) => {

    const [razao, setRazao] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [telefone, setTelefone] = useState('')
    const [emailPj, setEmailPj] = useState('')
    const [senha, setSenha] = useState('')

    const dadosPJ1 = {razao, cnpj, telefone, emailPj, senha}

    useEffect(()=>{
        salvarDados(dadosPJ1)
    }, [razao, cnpj, telefone, emailPj, senha])

    return(
        <View style={Estilos.container}>
            <TextInput style={Estilos.inputCadastro}
                placeholder="Razão social"
                onChange={(r)=>{
                    setRazao(r)
                }}
            />

            <TextInput style={Estilos.inputCadastro}
                placeholder="CNPJ"
                onChange={(c) => {
                    setCnpj(c)
                }}
            />

            <TextInput style={Estilos.inputCadastro}
                placeholder="Telefone"
                onChange={(t)=>{
                    setTelefone(t)
                }}
            />

            <TextInput style={Estilos.inputCadastro}
                placeholder="Email"
                onChange={(e)=>{
                    setEmailPj(e)
                }}
            />

            <TextInput style={Estilos.inputCadastro}
                placeholder="Senha"
                onChange={(s) => {
                    setSenha(s)
                }}
            />
        </View>
    )
}