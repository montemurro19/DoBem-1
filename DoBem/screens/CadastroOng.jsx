import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { Picker } from '@react-native-picker/picker';
import { Estilos } from "../Theme/Estilos";
import { useState } from "react";

export const CadastroOng = () => {


    const [valor, setValor] = useState('');
    return(
        <View style={Estilos.container}>

            <TextInput
                style={Estilos.inputCadastro}
                placeholder="Digite seu nome"
            />

            <Picker 
            style={Estilos.picker}
            selectedValue={valor}
            onValueChange={(itemValue) => setValor(itemValue)}
            >
                <Picker.Item label="São Paulo" value="Sao Paulo" />
                <Picker.Item label="Acre" value="Acre" />
                <Picker.Item label="Alagoas" value="Alagoas" />
                <Picker.Item label="Amapá" value="Amapa" />
                <Picker.Item label="Amazonas" value="Amazonas" />
                <Picker.Item label="Ceará" value="Ceara" />
                <Picker.Item label="Distrito Federal" value="Distrito Federal" />
                <Picker.Item label="Espírito Santo" value="Espirito Santo" />
                <Picker.Item label="Goiás" value="Goias" />
                <Picker.Item label="Maranhão" value="Maranhao" />
                <Picker.Item label="Mato Grosso" value="Mato Grosso" />
                <Picker.Item label="Mato Grosso do Sul" value="Mato Grosso do Sul" />
                <Picker.Item label="Minas Gerais" value="Minas Gerais" />
                <Picker.Item label="Pará" value="Para" />
                <Picker.Item label="Paraíba" value="Paraiba" />
                <Picker.Item label="Paraná" value="Parana" />
                <Picker.Item label="Pernambuco" value="Pernambuco" />
                <Picker.Item label="Piauí" value="Piaui" />
                <Picker.Item label="Rio de Janeiro" value="Rio de Janeiro" />
                <Picker.Item label="Rio Grande do Norte" value="Rio Grande do Norte" />
                <Picker.Item label="Rio Grande do Sul" value="Rio Grande do Sul" />
                <Picker.Item label="Rondônia" value="Rondonia" />
                <Picker.Item label="Roraima" value="Roraima" />
                <Picker.Item label="Santa Catarina" value="Santa Catarina" />
                <Picker.Item label="Sergipe" value="Sergipe" />
                <Picker.Item label="Tocantins" value="Tocantins" />
            </Picker>   

            <TextInput
                placeholder="Descrição"
                style={Estilos.inputCadastro}
                multiline = {true}
                numberOfLines = {4}
            />       
        </View>
    )
}