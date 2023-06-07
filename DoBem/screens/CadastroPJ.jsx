import { View, TouchableOpacity, Text } from "react-native"
import { Estilos } from "../Theme/Estilos"
import { useState } from "react";
import { CadastroPJ1 } from "../components/CadastroPJ1";
import { CadastroPJ2 } from "../components/CadastroPJ2";

export const CadastroPJ = () => {

    const [etapa, setEtapa] = useState(1);
    const totalEtapas = 2;
    const [idEmpresa, setIdEmpresa] = useState(null)
  
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
      setIdEmpresa(id)
    }

    const renderizarEtapa = () => {
        switch (etapa) {
          case 1:
              return <CadastroPJ1 avancarEtapa={avancarEtapa} getId={getId}/>
          case 2:
              return <CadastroPJ2 avancarEtapa={avancarEtapa} retrocederEtapa={retrocederEtapa} idEmpresa={idEmpresa}/>
          default:
            return null;
        }
      };
    
    return(
        <View style={Estilos.container}>
        <View style={Estilos.progressContainer}>
          <View style={[Estilos.barraProgresso, { width: `${(etapa / totalEtapas) * 100}%` }]} />
        </View>
  
        
        {renderizarEtapa()}
      </View>
    )
}