import { useState } from "react";
import { TextInput, View } from "react-native"
import { Picker } from '@react-native-picker/picker';
import { Estilos } from "../Theme/Estilos";

export const CadastroEquipe = () => {

    const [valor, setValor] = useState('');
    
    return(
        <View style={Estilos.containerPicker}>

             <TextInput
                placeholder="Digite seu nome"
                style={Estilos.inputCadastro}
            />

            <Picker 
            style={Estilos.picker}
            selectedValue={valor}
            onValueChange={(itemValue) => setValor(itemValue)}
            >
                <Picker.Item label="PÚBLICO" value="publico" />
                <Picker.Item label="PRIVADO" value="privado" />
            </Picker>
        
        </View>
    )
}