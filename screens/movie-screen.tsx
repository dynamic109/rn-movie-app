import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
  Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useAppNavigation } from 'lib/navigation';
import { styles, theme } from 'theme';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from 'components/cast';

let { height, width } = Dimensions.get('window');
const ios = Platform.OS === 'ios';

const topMargin = ios ? '' : 'mt-3';

const MovieScreen = () => {
  const { params: item } = useRoute();
  const navigation = useAppNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  let movieName = 'Ant Man and the Wasp: Quantumania';
  const [cast, setCast] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    //fetch movie details
    console.log(item);
  }, [item]);
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className=" flex-1 bg-neutral-900">
      <View className="w-full">
        <SafeAreaView
          className={`absolute z-20 w-full flex-row items-center justify-between px-4 ${topMargin}`}>
          <TouchableOpacity
            style={styles.background}
            className="rounded-xl p-1 "
            onPress={() => navigation.goBack()}>
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
            <HeartIcon size="35" color={isFavorite ? theme.background : '#ffffff'} />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={require('../assets/movie-poster-02.webp')}
            style={{ width, height: height * 0.55 }}
          />
          <LinearGradient
            colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
            style={{
              width,
              height: height * 0.4,
            }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>
      </View>

      {/* movie details */}
      <View style={{ marginTop: -(height * 0.09) }} className="gap-3">
        <Text className="text-center text-3xl font-bold tracking-wider text-white ">
          {movieName}
        </Text>
        <Text className="text-center text-base font-semibold text-neutral-400">
          Realeased • 2020 • 170 min
        </Text>
        <View className="mx-4 flex-row justify-center gap-2">
          <Text className="text-center text-base font-semibold text-neutral-400">Action • </Text>
          <Text className="text-center text-base font-semibold text-neutral-400">Thrill • </Text>
          <Text className="text-center text-base font-semibold text-neutral-400">Comedy </Text>
        </View>
        <Text className="mx-4 text-justify tracking-wide text-neutral-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam sed quis saepe temporibus
          commodi, reiciendis aut vel iusto harum adipisci unde rerum ut nulla, doloremque
          voluptatibus suscipit fugiat sunt non.
        </Text>
      </View>

      {/* cast */}
      <Cast cast={cast} />
    </ScrollView>
  );
};

export default MovieScreen;
