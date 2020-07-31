import React from 'react';
import { View, Text } from 'react-native';

import Card from '../../components/card';

const Person = [
  {
    name: "Davi Leal",
    description: "Oficial",
    picture: "https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-27.jpg",
  },
  {
    name: "Davi Leal",
    description: "Oficial",
    picture: "https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-27.jpg",
  }
];
const Details: React.FC = () => {

  return (
    <View style={{ flex: 1, backgroundColor: '#2d2d2d', flexDirection: 'column' }}>
      <View style={{ marginTop: 20 }}>
        {Person.map(response => (
          <Card data={response} />
        ))}
      </View>

    </View>
  )
}


export default Details;
