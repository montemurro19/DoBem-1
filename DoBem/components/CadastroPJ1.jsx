import { TextInput, View } from "react-native"
import { Estilos } from "../Theme/Estilos"

export const CadastroPJ1 = () => {
    return(
        <View style={Estilos.container}>
            <TextInput style={Estilos.inputCadastro}
                placeholder="Razão social"
            />

            <TextInput style={Estilos.inputCadastro}
                placeholder="CNPJ"
            />

            <TextInput style={Estilos.inputCadastro}
                placeholder="Telefone"
            />

            <TextInput style={Estilos.inputCadastro}
                placeholder="Email"
            />

            <TextInput style={Estilos.inputCadastro}
                placeholder="Confirme o seu Email"
            />

            <TextInput style={Estilos.inputCadastro}
                placeholder="Senha"
            />

            <TextInput style={Estilos.inputCadastro}
                placeholder="Confirme sua senha"
            />
        </View>
    )
}