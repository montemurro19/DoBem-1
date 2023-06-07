import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Estilos } from '../Theme/Estilos';
import Logo from '../assets/logo.png'
import axios from 'axios';

const api = axios.create({baseURL: "http://localhost:8080"})

export const Login = ( {navigation} ) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  const logar = () => {

    const data = {
        email: email,
        senha: password
    };

    api.post("/api/login", JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    .then((info)=>{
        console.log(info)
    })
}

  const validateEmail = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return emailRegex.test(email)
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return passwordRegex.test(password)
  };

  return (
        <View style={Estilos.container}>
            <View style={Estilos.circle}/>
        
            <View  style={Estilos.formLogin}>
                <Image style={Estilos.logo} source={Logo}/>

                {error}
                <Text style={Estilos.label}>Email:</Text>
                <TextInput
                    style={Estilos.inputCadastro}
                    onChangeText={(text) => setEmail(text)}
                />

                <Text style={Estilos.label}>Senha:</Text>
                <TextInput
                    style={Estilos.inputCadastro}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                />

                <TouchableOpacity 
                style={Estilos.btnLogin} 
                onPress={()=>{
                    // validateEmail() && validatePassword() ? 
                    logar() 
                    // Alert.alert('Login inválido')
                    navigation.navigate('Pagina inicial')
                }}>
                    <Text style={Estilos.btnLoginText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
  );
};