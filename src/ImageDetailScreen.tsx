import React from 'react';
import {useRoute} from '@react-navigation/core';
import {Image} from 'react-native';

const ImageDetailScreen: React.FC = () => {
  const routes = useRoute();
  const {photoUrl} = routes.params;

  return (
    <>
      <Image source={{uri: photoUrl}} style={{aspectRatio: 1}} />
    </>
  );
};

export default ImageDetailScreen;
