import React from 'react';
import { View, StyleSheet, Text, SectionList, Button } from 'react-native';



const estilos = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 23
  },
  titulo: {
     textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },



    item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    
  },
  tituloSecao: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'black',
    backgroundColor: 'red'
  },
});

const monstro = ({navigation}) => {
  return(
    <View style={estilos.container}>
      <View style={{flex: 2, backgroundColor: 'black', justifyContent: 'center'}}>
        <Text style={estilos.titulo}> Treino de monstro </Text>
      </View>
      <View style={{flex: 7, backgroundColor: 'white'}}>
      <SectionList 
        sections={[
          {title: 'Bíceps',
           data: ['Rosca direta 4x12','Rosca martelo 4x8', 'Rosca inversa no cross 4x12']},

          {title: 'Costas',
           data: ['Pulldown 4x10', 'Crucifixo no cross 4x10', 'Remada baixa 4x12']},

          {title: 'Pernas',
           data: ['Cadeira adutora 4x12', 'Panturrilha no leg 4x12', 'Cadeira extensora 4x12', 'Leg press 4x12']},

          {title: 'Peito',
           data: ['Supino 30° 4x8', 'Voador 4x12', 'Supino reto 4x8', 'Pullover 4x8']},

           {title: 'Tríceps',
           data: ['Tríceps no cross invertido 4x12', 'Tríceps testa 4x12', 'Tríceps corda 4x12']},

          {title: 'Ombro',
           data: ['Elevação de ombros com anilha 4x10', 'Elevação lateral 4x10','Elevação frontal alternado 4x12']},

    
        ]}

        renderItem={
          ({item}) => <Text style={estilos.item}>{item}</Text>
        }

        renderSectionHeader={
          ({section}) => <Text style={estilos.tituloSecao}>{section.title}</Text>
        }
      />

      </View>
      <View>
      <Button 
            title="Voltar"
            color="red"
            onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

export default monstro;