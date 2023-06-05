
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { CadastroEtapa1 } from "../components/CadastroEtapa1";
import { useState } from "react";
import { Estilos } from "../Theme/Estilos";
import { CadastroEtapa2 } from "../components/CadastroEtapa2";
import { CadastroEtapa3 } from "../components/CadastroEtapa3";

export const Cadastro = () => {

    const [etapa, setEtapa] = useState(1);
    const [dados, setDados] = useState({});
    const totalEtapas = 3;
  
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

    const verificarEtapa1 = () => {
      return dados.nome ? true : false
    }

    const renderizarEtapa = () => {
      switch (etapa) {
        case 1:
            return <CadastroEtapa1 salvarDados={salvarDados}/>
        case 2:
            return <CadastroEtapa2/>
        case 3:
            return <CadastroEtapa3/>
        default:
          return null;
      }
    };
  
    return (
      <View style={Estilos.container}>
        <View style={Estilos.progressContainer}>
          <View style={[Estilos.barraProgresso, { width: `${(etapa / totalEtapas) * 100}%` }]} />
        </View>
  
        <View style={Estilos.etapas}>
            {renderizarEtapa()}
        </View>
  
        <View style={Estilos.buttonContainer}>
          {etapa > 1 && (
            <TouchableOpacity style={Estilos.btnCadastro} onPress={retrocederEtapa}>
              <Text style={Estilos.btnLoginText}>◀ voltar</Text>
            </TouchableOpacity>
          )}
  
          <TouchableOpacity style={Estilos.btnCadastro} 
            onPress={()=>{
              avancarEtapa()
            }}>
            
            <Text style={Estilos.btnLoginText}>{etapa === totalEtapas ? 'Finalizar' : 'próximo ▶'}</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  };