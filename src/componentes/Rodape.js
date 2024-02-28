import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {styles} from '../styles/Styles'

export default function Rodape() {
  
  return (
    <View style={styles.Rodape}>

     <Text style={styles.text}>Rodapé</Text>
      <StatusBar style="auto" />
    </View>
  );
}

