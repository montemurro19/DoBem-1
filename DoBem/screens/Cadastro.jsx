import { View, Text, TouchableOpacity } from "react-native";
import { CadastroEtapa1 } from "../components/CadastroEtapa1";
import { useState } from "react";
import { Estilos } from "../Theme/Estilos";
import { CadastroEtapa2 } from "../components/CadastroEtapa2";
import { CadastroEtapa3 } from "../components/CadastroEtapa3";

export const Cadastro = ({ navigation }) => {

    const [etapa, setEtapa] = useState(1);
    const totalEtapas = 3;
    const [idUser, setIdUser] = useState(null)
  
    const avancarEtapa = () => {
      if (etapa < totalEtapas) {
        setEtapa(etapa + 1);
      }
    };
  
    const retrocederEtapa = () => {
      if (etapa > 1) {
        setEtapa(etapa - 1);
      }
    };

    const getId = (id) => {
      setIdUser(id)
    }

    const renderizarEtapa = () => {
      switch (etapa) {
        case 1:
            return <CadastroEtapa1 avancarEtapa={avancarEtapa} getId={getId}/>
        case 2:
            return <CadastroEtapa2 avancarEtapa={avancarEtapa} retrocederEtapa={retrocederEtapa} idUser={idUser}/>
        case 3:
            return <CadastroEtapa3 avancarEtapa={avancarEtapa} retrocederEtapa={retrocederEtapa} navigation={navigation} idUser={idUser}/>
        default:
          return null;
      }
    };
  
    return (
      <View style={Estilos.container}>
        <View style={Estilos.progressContainer}>
          <View style={[Estilos.barraProgresso, { width: `${(etapa / totalEtapas) * 100}%` }]} />
        </View>
         
        {renderizarEtapa()}
  
      </View>

    );
  };