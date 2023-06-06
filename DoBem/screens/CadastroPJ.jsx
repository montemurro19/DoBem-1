import { View, TouchableOpacity, Text } from "react-native"
import { Estilos } from "../Theme/Estilos"
import { useState } from "react";
import { CadastroPJ1 } from "../components/CadastroPJ1";
import { CadastroPJ2 } from "../components/CadastroPJ2";

export const CadastroPJ = () => {

    const [etapa, setEtapa] = useState(1);
    const [dados, setDados] = useState({});
    const totalEtapas = 2;
  
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
  
    const salvarDados = (novosDados) => {
      setDados({ ...dados, ...novosDados });
    };

    const renderizarEtapa = () => {
        switch (etapa) {
          case 1:
              return <CadastroPJ1 salvarDados={salvarDados}/>
          case 2:
              return <CadastroPJ2/>
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
        
  
        <View style={Estilos.buttonContainer}>
          {etapa > 1 && (
            <TouchableOpacity style={Estilos.btnCadastro} onPress={retrocederEtapa}>
              <Text style={Estilos.btnLoginText}>◀ voltar</Text>
            </TouchableOpacity>
          )}
  
          <TouchableOpacity style={Estilos.btnCadastro} onPress={avancarEtapa}>
            <Text style={Estilos.btnLoginText}>{etapa === totalEtapas ? 'Finalizar' : 'próximo ▶'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}