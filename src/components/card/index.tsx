import React, { useState, useEffect } from 'react';

import { Image } from 'react-native';

import styled from 'styled-components';

import response from '../../assets/response.json';

const Card: React.FC = props => {

  const { name } = props.data;
  let description = props.data.location;
  const { picture } = props.data;

  if (props.data.description) {
    description = props.data.description;
  }
  if (props.data.location) {
    description = props.data.location;
  }
  if (props.data.role) {
    description = props.data.role;
  }

  return (
    <View style={{ flex: 1, marginHorizontal: 20 }}>
      <View style={{ height: 80, flexDirection: 'row', alignItems: 'center' }}>
        <ImageContainer>
          <Image
            style={{
              width: "100%",
              height: "100%",
              // borderRadius: '50'
            }}
            source={{ uri: `${picture}` }}
          />
        </ImageContainer>
        <View style={{ flexDirection: 'column', marginLeft: 10, justifyContent: 'flex-end' }}>
          <View>
            <Text name >{name}</Text>
          </View>
          <View>
            <Text description>{description}</Text>
          </View>
        </View>
      </View>
      <Hr />
    </View >

  )
}

const View = styled.View``;

const Hr = styled.View`
  margin-top: 10;
  width: 100%;
  border-top-width: .3;
  border-color: red;
  margin-bottom: 10;
`;

const ImageContainer = styled.View`
  width: 20%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: white;

  ${(props) => {
    switch (true) {
      case props.name:
        return (
          "font-size: 16px;"
        );
      case props.description:
        return (
          "font-size: 20px;"
        );
      default:
        return (
          "color: red"
        );
    }
  }}
`;
export default Card;
