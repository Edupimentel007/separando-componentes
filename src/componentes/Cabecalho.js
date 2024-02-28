import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {styles} from '../styles/Styles'

export default function Cabecalho() {
  
  return (
    <View style={styles.Cabecalho}>
    
     <Text style={styles.text}>Cabeçalho</Text>
      <StatusBar style="auto" />
    </View>
  );
}

