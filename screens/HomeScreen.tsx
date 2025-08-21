import { Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { styles } from 'theme';
import TrendingMovies from 'components/trending-movies';
import { useState } from 'react';
import MovieList from 'components/movie-list';

const ios = Platform.OS === 'ios';

const HomeScreen = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([4, 5, 6]);
  const [topRated, setTopRated] = useState([7, 8, 9]);
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className={ios ? '-mb-2' : 'mb-3'}>
        <StatusBar style="light" />
        <View className="mx-4 flex-row items-center justify-between">
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
          <Text className="text-3xl font-bold text-white">
            <Text style={styles.text}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}>
        {/* Trending Movie carousel goes here */}
        <TrendingMovies data={trending} />
        {/* Upcoming movies */}
        <MovieList title="Upcoming Movies" data={upcoming} />
        {/* Top Rated movies */}
        <MovieList title="Top Rated Movies" data={topRated} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
