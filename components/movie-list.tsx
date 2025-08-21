import { useAppNavigation } from 'lib/navigation';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { styles } from 'theme';

let { width, height } = Dimensions.get('window');

const MovieList = ({ title, data }: any) => {
  const navigation = useAppNavigation();
  let movieName = 'Ant man and the wasp';

  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 mb-4 flex-row items-center justify-between">
        <Text className="text-xl text-white">{title}</Text>
        <TouchableOpacity>
          <Text style={styles.text} className="text-lg">
            See All
          </Text>
        </TouchableOpacity>
      </View>

      {/* movie row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}>
        {data.map((item: any, index: number) => (
          <TouchableWithoutFeedback key={index} onPress={() => navigation.navigate('Movie', item)}>
            <View className="mr-4 space-y-1">
              <Image
                source={require('../assets/movie-poster-02.webp')}
                className="rounded-3xl"
                style={{ width: width * 0.33, height: height * 0.22 }}
              />
              <Text className="ml-1 text-neutral-300">
                {movieName.length > 14 ? movieName.slice(0, 14) + '...' : movieName}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
};

export default MovieList;
