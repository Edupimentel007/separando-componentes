import {styles} from './src/styles/Styles'
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Cabecalho from './src/componentes/Cabecalho';
import Corpo from './src/componentes/Corpo';
import Rodape from './src/componentes/Rodape';


export default function App() {

  return (
    <View style={styles.container}>
     
     {/* Cabeçalho */}
      <Cabecalho/>       
      
      {/* Corpo */}
      <Corpo/>
      
      {/* Rodapé */}
      <Rodape/>

      <Text>Separando Componentes</Text>
      <StatusBar style="auto" />
    </View>
  );
}

