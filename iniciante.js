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
    color: 'gray',
    
  },

 

    item: {
    padding: 10,
    fontSize: 18,
    height: 44
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
    backgroundColor: 'gray'
  },
});

const iniciante = ({navigation}) => {
  return(
    <View style={estilos.container}>
      <View style={{flex: 2, backgroundColor: 'black', justifyContent: 'center'}}>
        <Text style={estilos.titulo}> Treino de iniciante </Text>
      </View>
      <View style={{flex: 7, backgroundColor: 'white'}}>
      <SectionList 
        sections={[
          {title: 'Bíceps',
           data: ['Rosca inversa cross 3x10', 'Bíceps inverso cross 3x12' ]},

          {title: 'Costas',
           data: ['Remada alta 3x12 + 8', 'Crucifixoposterior no voador 3x12']},

          {title: 'Pernas',
           data: ['Agachamento 3x10', 'Cadeira extensora 3x12']},

          {title: 'Peito',
           data: ['Supino inclinado halteres 3x10', 'Supino reto 3x8', 'Voador 3x12']},

           {title: 'Tríceps',
           data: ['Tríceps no cross invertido 3x12', 'Tríceps testa 3x12', 'Tríceps corda 3x12']},

          {title: 'Ombro',
           data: ['Elevação lateral 3x12', 'Elevação frontal alternado 3x12']},

    
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
            color="gray"
            onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

export default iniciante;