import React from 'react';
import { View, Text } from 'react-native';
import Details from '../Details';
import styled from 'styled-components';

const Home: React.FC = () => {

  return (
    <View style={{ backgroundColor: '#92370f' }}>
      <View>
        <Text style={{ margin: 40, fontSize: 24, color: '#e7a385', marginBottom: 40 }}>Corpo de Bombeiros</Text>
      </View>
      <View style={{
        height: 200,
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
      }}>
        <Text style={{
          marginTop: 30,
          marginLeft: 40,
          fontSize: 20,
          color: 'brown',
          marginBottom: 20
        }}>
          Operações Em Andamento
        </Text>

        <View style={{
          height: 35,
          marginHorizontal: 40,
          justifyContent: 'center',
          marginBottom: 40,
          backgroundColor: '#ffe8d6',

          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,

          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>

          <Text style={{
            marginTop: 0,
            marginLeft: 20,
            fontSize: 20,
            color: 'brown',
          }}>
            Incêndio Florestal
          </Text>

        </View>
      </View>
    </View>
  )
}

export default Home;
