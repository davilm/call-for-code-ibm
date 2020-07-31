import React, { useState, useEffect } from 'react';

import { Image } from 'react-native';

import styled from 'styled-components';

import response from '../../assets/response.json';

const Home: React.FC = props => {

  const { name } = props.data;
  const { description } = props.data;
  const { picture } = props.data;

  return (
    <View style={{ flex: 1, marginHorizontal: 20, marginBottom: 100 }}>
      <View style={{ height: 80, flexDirection: 'row', alignItems: 'center' }}>
        <ImageContainer>
          <Image
            style={{
              width: "100%",
              height: "100%",
            }}
            source={{ uri: `${picture}` }}
          />
        </ImageContainer>
        <View style={{ flexDirection: 'column', marginLeft: 10, justifyContent: 'flex-end' }}>
          <View>
            <Name>{name}</Name>
          </View>
          <View>
            <Description>{description}</Description>
          </View>
        </View>
      </View>
      <Hr></Hr>
    </View >

  )
}

const View = styled.View``;

const Hr = styled.View`
  margin-top: 10;
  width: 100%;
  border-top-width: .3;
  border-color: red;
`;

const ImageContainer = styled.View`
  width: 20%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Name = styled.Text`
  font-size: 16;
  color:  white;
`;

const Description = styled.Text`
  font-size: 20;
  color: white;
`;

export default Home;
