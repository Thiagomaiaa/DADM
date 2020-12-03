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
    color: 'yellow',
    
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
    backgroundColor: 'yellow'
  },
});

const frango = ({navigation}) => {
  return(
    <View style={estilos.container}>
      <View style={{flex: 2, backgroundColor: 'black', justifyContent: 'center'}}>
        <Text style={estilos.titulo}> Treino de frango </Text>
      </View>
      <View style={{flex: 7, backgroundColor: 'white'}}>
      <SectionList 
        sections={[
          {title: 'Bíceps',
           data: ['Rosca direta 3x10', 'Rosca concentrada 3x10', 'Rosca inversa no cross 3x10']},

          {title: 'Costas',
           data: ['Puxada para frente 3x8', 'Remada baixa 3x10']},

          {title: 'Pernas',
           data: ['Agachamento 3x10', 'Leg press horizontal 3x8', 'Panturilha no leg press 3x20']},

          {title: 'Peito',
           data: ['Supino reto 3x10', 'Flexão de braços', 'Voador 3x10']},

           {title: 'Tríceps',
           data: ['Francês unilateral HBC 3x12', 'Tríceps corda no cross 3x10']},

          {title: 'Ombro',
           data: ['Elevação de ombros com anilha 3x10', 'Elevação lateral 3x10']},

    
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
            color="yellow"
            onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

export default frango;