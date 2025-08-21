import React from 'react';
import { Dimensions, Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useAppNavigation } from 'lib/navigation';

let { width, height } = Dimensions.get('window');

const TrendingMovies = ({ data }: { data: number[] }) => {
  const navigation = useAppNavigation();

  const handleClick = (item: any) => {
    navigation.navigate('Movie', item);
  };

  return (
    <View className="mb-8">
      <Text className="mx-4 mb-5 text-xl text-white">Trending</Text>
      <Carousel
        data={data}
        renderItem={({ item }) => <MovieCard item={item} handleClick={() => handleClick(item)} />}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
      />
    </View>
  );
};

export default TrendingMovies;

const MovieCard = ({ item, handleClick }: any) => {
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <Image
        source={require('../assets/movie-poster.webp')}
        style={{ width: width * 0.6, height: height * 0.4 }}
        className="rounded-3xl"
      />
    </TouchableWithoutFeedback>
  );
};
