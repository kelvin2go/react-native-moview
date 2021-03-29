import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import Movies from '../screens/TabMoviesScreen';
import TV from '../screens/TabTvScreen';

import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabMoviesParamList, TabTvParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (

    <BottomTab.Navigator
      initialRouteName="Movies"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>


      <BottomTab.Screen
        name="Movies"
        component={TabMoviesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="videocam" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TV"
        component={TabTVNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="tv" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabMoviesStack = createStackNavigator<TabMoviesParamList>();
function TabMoviesNavigator() {
  return (
    <TabMoviesStack.Navigator>
      <TabMoviesStack.Screen
        name="Movies"
        component={Movies}
        options={{ headerTitle: 'Movies' }}
      />
    </TabMoviesStack.Navigator>
  );
}

const TabTvStack = createStackNavigator<TabTvParamList>();
function TabTVNavigator() {
  return (
    <TabTvStack.Navigator>
      <TabTvStack.Screen
        name="TV"
        component={TV}
        options={{ headerTitle: 'TV Drama' }}
      />
    </TabTvStack.Navigator>
  );
}