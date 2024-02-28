import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      
    },
    Cabecalho: {
      display: 'flex',
      width: '100%',
      backgroundColor: 'blue',
      flex:1,
    
    },
    Corpo: {
      display: 'flex',
      width: '100%',
      backgroundColor: 'red',
      flex:1,
      
    },
    Rodape: {
      display: 'flex',
      width: '100%',
      backgroundColor: 'black',
      flex:1,
      
    },
    text: {
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white',
      fontSize: 24,
      fontStyle: 'italic',
    }
    
  });