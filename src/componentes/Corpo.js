import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {styles} from '../styles/Styles'

export default function Corpo() {
  
  return (
    <View style={styles.Corpo}>
    
      <Text style={styles.text}>Corpo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

