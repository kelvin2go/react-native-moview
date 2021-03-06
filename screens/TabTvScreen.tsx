import * as React from 'react';
import { StyleSheet, } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { ScrollView, Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';
import { Movie } from '../components/Movie';

import { useDispatch, useSelector } from 'react-redux'
import { fetchtv } from '../store/tv';

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
};


export default function TabTv() {
  const dispatch = useDispatch();
  const alltv = useSelector((state: RootState) => {
    return {
      ...state.tv.tv,
      results: [
        ...state.tv.loadedTv,
      ]
    } || {
      page: 1,
      results: state.tv.loadedTv || [],
      total_pages: 1000,
      total_results: 20000,
    }
  });

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      dispatch(fetchtv({}));
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [dispatch])
  );
  return (
    <View style={styles.container}>

      <View style={styles.timeline}>
        <ScrollView style={styles.timelineContainer} onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            dispatch(fetchtv({ page: alltv.page + 1 }));
          }
        }}>
          {alltv.results.length ? alltv.results.map((item, index) =>
            <View key={`${index}-${item.id}`} style={styles.photoContainer}>
              <Movie item={{
                index: index + 1,
                ...item
              }} />
            </View>
          ) :
            <View><Text> TV Drama not found!</Text></View >
          }
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
