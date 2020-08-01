import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';

import styled from 'styled-components';

import Details from '../ListMembers';
import Card from '../../components/card';

import api from '../../services/api';

import { useNavigation } from '@react-navigation/native';


const AllMembers = (name, picture, navigation) => {
  return (
    <View style={{ marginTop: 0 }}>
      <TouchableOpacity onPress={() => navigation.navigate('ListMembers', {
        title: name,
        description: name,
        api: name,
        preTitle: "Department's "
      })}>
        <Card data={{ 'description': "Department's " + name, 'picture': picture }} />
      </TouchableOpacity>
    </View>
  );
};

interface Data {
  id: string;
  name: string;
  location: string;
}

const Home: React.FC = () => {
  const navigation = useNavigation();

  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    api.get('/missions').then(response => {
      setData(response.data);
    });
  }, []);

  function onPress() {
    navigation.navigate('Detail', {

    });
  }
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#2d2d2d' }}>
      <View style={{ margin: 20 }} >
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
          <Text title style={{ color: 'red' }}>Fire </Text><Text title>Department</Text>
        </View>
        <View>
          <Text>Operations</Text>
        </View>
        <View style={{ marginTop: 0 }}>
          {data.map(response => (
            <TouchableOpacity key={response.id} onPress={() => navigation.navigate('ListMembers', {
              id: response.id,
              title: response.name,
              location: response.location,
              api: `missions/${response.id}`,
              inThisMission: true
            })}>
              <Card data={response} />
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ flexDirection: 'row', marginTop: 40 }}>
          <Text style={{ color: 'red' }}>Our </Text><Text>Department</Text>
        </View>
        {AllMembers(
          'Firefighters ',
          'https://img.firehouse.com/files/base/cygnus/fhc/image/2020/05/16x9/Quincy_Firefighter_Recruits__MA_.5ec00a544ffc6.png?auto=format&fit=max&w=1200',
          navigation,
        )}
        {AllMembers(
          'Animals ',
          'https://babyanimalzoo.com/wp-content/uploads/2012/08/260dalmatianfirestation.ashx_.jpg',
          navigation,
        )}
        {AllMembers(
          'Vehicles ',
          'https://highways.today/wp-content/uploads/2020/03/IAGP6185-scaled-e1583266092592.jpg',
          navigation,
        )}


      </View>
    </ScrollView >
  )
}

const Text = styled.Text`

  color: white;
  margin-bottom: 40;

  ${(props) => {
    switch (true) {
      case props.title:
        return (
          "font-size: 24px;align-self: center;"
        );
      default:
        return (
          "font-size: 18px;"
        );
    }
  }}
`;

export default Home;
