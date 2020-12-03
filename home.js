import React from 'react';
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';

const Home = ({navigation}) => {
  return(
    <View style={{flex: 1,marginTop: 23}}>
      <View style={{flex: 0.8, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>
        <Text style={{color: 'white', fontSize:20}}>Treinos para hipertrofia</Text>
      </View>
      <View style={{flex: 4, flexDirection: 'row', alignItems: 'stretch'}}>
        <View style={{flex: 1, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('frango')} style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width:150, height:150}} source={require('./img/frango.png')} /> 
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Frango</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('iniciante')} style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width:150, height:150}} source={require('./img/iniciante.png')} />
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white'}}>Iniciante</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flex: 4, flexDirection: 'row', alignItems: 'stretch'}}>
        <View style={{flex: 1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('carcacinha')} style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width:150, height:150}} source={require('./img/medio.png')} />
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white'}}>Carcacinha</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('monstro')} style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width:150, height:170}} source={require('./img/monstro.png')} />
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white'}}>Monstro</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>
        <Button 
          title="Sobre"
          onPress={() => navigation.navigate('sobre')}
        />
      </View>
    </View>
  );
}

export default Home;