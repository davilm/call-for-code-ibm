import React, { useEffect, useState } from 'react';

import { View, ScrollView, TouchableOpacity } from 'react-native';

import { Feather as Icon } from '@expo/vector-icons';

import styled from 'styled-components';

import Card from '../../components/card';

import { useNavigation, useRoute } from '@react-navigation/native'

import api from '../../services/api';

interface Data {
  id: string;
  title: string;
  role: string;
  api: string;
}

const ListMembers: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { id } = route.params;
  const { title } = route.params;
  const { description } = route.params;

  let { location } = '';
  let { preTitle } = '';
  let { inThisMission } = '';

  if (route.params.preTitle) {
    preTitle = route.params.preTitle;
  }

  if (route.params.location) {
    location = route.params.location;
  }
  if (route.params.inThisMission) {
    inThisMission = route.params.inThisMission;
  }


  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    // api.get(`/missions/${id}`).then(response => {
    api.get(`/${route.params.api}`).then(response => {
      setData(response.data);
      console.log(data);
    });
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#2d2d2d' }}>
      <View style={{ marginTop: 30 }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 20, marginTop: 7, alignSelf: 'flex-start' }}>
          <Icon name="arrow-left" size={20} color='red' />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
          <Text title style={{ color: 'red' }}>{preTitle}</Text><Text title>{title}</Text>
        </View>
        {location &&
          <View>
            <Text style={{ marginLeft: 20, fontSize: 14, color: 'white', marginBottom: 40 }}>Address: {location}</Text>
          </View>
        }
        {inThisMission &&
          <View>
            <Text style={{ marginLeft: 20, fontSize: 18, color: 'white', marginBottom: 40 }}>in This Mission</Text>
          </View>
        }
        <View style={{ marginBottom: 200 }}>
          {data.map(response => (
            <Card data={response} key={response.id} />
          ))}
        </View>
      </View>

    </ScrollView>
  )
}

const Text = styled.Text`

  color: white;
  margin-bottom: 40;

  ${(props) => {
    switch (true) {
      case props.title:
        return (
          "font-size: 24px; align-self: center"
        );
      default:
        return (
          "font-size: 18px;"
        );
    }
  }}
`;
export default ListMembers;
