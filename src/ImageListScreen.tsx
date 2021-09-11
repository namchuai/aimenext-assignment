import {useNavigation} from '@react-navigation/core';
import React, {useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

const ROW_COUNT = 10000;
const PHOTO_URL =
  'https://logoeps.com/wp-content/uploads/2011/05/arsenal-logo-vector.png';

/**
 * Model which will hold the data.
 */
type SampleModel = {
  index: number;
  photoUrl: string;
};

/**
 * Item component.
 *
 * @param id: Title.
 * @param photoUrl: Leading image.
 *
 * @returns React component for item in list.
 */
const Item = ({
  id,
  photoUrl,
  onPress,
}: {
  id: string;
  photoUrl: string;
  onPress: (string) => void;
}) => {
  return (
    <TouchableOpacity style={styles.item} onPress={() => onPress(photoUrl)}>
      <Image source={{uri: photoUrl}} style={styles.leadingImage} />
      <Text style={styles.title}>{id}</Text>
    </TouchableOpacity>
  );
};

const Separator = () => <View style={styles.separator} />;

const ImageListScreen: React.FC = () => {
  const navigation = useNavigation();

  const data = useMemo<Array<SampleModel>>(() => {
    const models: Array<SampleModel> = [];
    for (var i = 0; i < ROW_COUNT; i++) {
      models.push({index: i, photoUrl: PHOTO_URL});
    }
    return models;
  }, []);

  const onItemPress = (photoUrl: string) => {
    navigation.navigate('ImageDetailScreen', {photoUrl: photoUrl});
  };

  const renderItem = ({item}: {item: SampleModel}) => (
    <Item
      id={item.index.toString()}
      photoUrl={item.photoUrl}
      onPress={onItemPress}
    />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.index.toString()}
      ItemSeparatorComponent={() => <Separator />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  leadingImage: {
    width: 52,
    height: 52,
  },
  item: {
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    marginLeft: 16,
    fontSize: 32,
    alignSelf: 'center',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#000',
  },
});

export default ImageListScreen;
