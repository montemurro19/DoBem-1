import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Estilos } from '../Theme/Estilos';
import Logo from '../assets/logo.png'

export const Login = ( {navigation} ) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailRegex.test(email)) {
      setEmailError('Email inválido');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError(
        'Senha inválida'
        //A senha deve conter uma letra maiúscula, uma letra minúscula, um número e ter entre 6 e 20 caracteres
      );
    } else {
      setPasswordError('');
    }
  };

  const handleLogin = () => {
    validateEmail()
    validatePassword()
    // fazer a lógica de autenticação
  };

  return (
        <View style={Estilos.container}>

            <View style={Estilos.circle}/>
        
            <View  style={Estilos.formLogin}>
                <Image style={Estilos.logo} source={Logo}/>
                <Text style={Estilos.label}>Email:</Text>
                <TextInput
                    style={Estilos.input}
                    onChangeText={(text) => setEmail(text)}
                />
                {emailError ? <Text style={Estilos.error}>{emailError}</Text> : null}

                <Text style={Estilos.label}>Senha:</Text>
                <TextInput
                    style={Estilos.input}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                />
                {passwordError ? <Text style={Estilos.error}>{passwordError}</Text> : null}

                <TouchableOpacity 
                style={Estilos.btnLogin} 
                onPress={()=>{
                    handleLogin()
                }}>
                    <Text style={Estilos.btnLoginText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
  );
};