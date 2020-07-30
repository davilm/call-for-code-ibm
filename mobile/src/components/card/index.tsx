import React, { useState, useEffect } from 'react';

import { Image } from 'react-native';

import styled from 'styled-components';

import response from '../../assets/response.json';

const Home: React.FC = () => {
  const [name, setName] = useState('Nome Sobrenome');
  const [description, setDescription] = useState('Cargo');
  const [image, setImage] = useState('Cargo');

  useEffect(() => {
    const { name, description, picture } = response;

    const { title, first, last } = name;

    const fullName = title.concat(" ", first, " ", last);

    setName(fullName);
    setDescription(description);
    setImage(picture);

  }, []);

  return (

    <View style={{ flex: 1, marginHorizontal: 20, marginTop: 20 }}>
      <View style={{ height: 80, flexDirection: 'row', alignItems: 'center', borderWidth: 1 }}>
        <View style={{
          width: '20%',
          height: '100%',
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: 'black',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={{ uri: `${image}` }}
          />
        </View>
        <View style={{ flexDirection: 'column', marginLeft: 10, justifyContent: 'flex-end' }}>
          <View>
            <Name>{name}</Name>
          </View>
          <View>
            <Description>{description}</Description>
          </View>
        </View>
      </View>
    </View >

  )
}

const View = styled.View``;

const Text = styled.Text``;

const Name = styled.Text`
  font-size:16;
  color:black;
`;

const Description = styled.Text`
  font-size:20;
  color:black;
`;

export default Home;
