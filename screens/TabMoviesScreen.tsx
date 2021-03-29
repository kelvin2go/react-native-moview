import * as React from 'react';
import { StyleSheet, } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { ScrollView, Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';
import { Movie } from '../components/Movie';

import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../store/movies';

export default function TabMovies() {
  const dispatch = useDispatch();
  const allMovies = useSelector((state: RootState) => {
    return state.movies.movies || {
      page: 1,
      results: [],
      total_pages: 1000,
      total_results: 20000,
    }
  });
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      dispatch(fetchMovies());
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [dispatch])
  );
  return (
    <View style={styles.container}>

      <View style={styles.timeline}>
        <ScrollView style={styles.timelineContainer}>
          {allMovies.hasOwnProperty('results') && allMovies.results.map((item, index) =>
            <View key={item.id} style={styles.photoContainer}>
              <Movie item={item} />
            </View>
          )}
        </ScrollView>
      </View >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  timeline: {
    flex: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  timelineContainer: {
    width: Dimensions.get('window').width,
    flex: 7,
  },
  photoContainer: {
    alignItems: 'center',
  },
});
