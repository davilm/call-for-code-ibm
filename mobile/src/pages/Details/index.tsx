import React from 'react';
import { View, Text } from 'react-native';

import Card from '../../components/card';

const Person = {
  name: "Davi Leal",
  description: "Oficial",
  picture: "https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-27.jpg"
}

const Details: React.FC = () => {

  return (
    <Card data={Person} />
  )
}


export default Details;
