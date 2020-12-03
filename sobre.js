import React from 'react';
import { Text, View, Image, Button } from 'react-native';

const sobre = ({ navigation }) => {
  return(
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>Séries</Text>
        <Text>Versão 1.0</Text>
        <Text style={{marginTop: 30, fontWeight: 'bold'}}>Desenvolvido por:</Text>
     
        
        <Text style={{marginBottom: 30}}>Thiago Maia</Text>

        <Button 
            title="Voltar"
            onPress={() => navigation.goBack()}
        />
    </View>
  )
}

export default sobre;