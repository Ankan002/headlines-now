/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useEffect, useRef} from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import Home from '../screens/Home';
import { useRecoilState } from 'recoil';
import {currentNews} from '../atom/currentNewsAtom'
import {globalLoading} from '../atom/globalLoadingAtom'
import { currentValue } from '../atom/currentValueAtom'; 

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {

  const[loading, setLoading] = useRecoilState<Boolean>(globalLoading)
  const[news, setNews] = useRecoilState<any>(currentNews)
  const[newsTopic, setNewsTopic] = useRecoilState<any>(currentValue)

  const getNewsFromAPI = async(topic: String) => {
    setLoading(true)
    const response = await fetch(`https://inshortsapi.vercel.app/news?category=${topic}`, {
      method: 'GET'
    })
    const data = await response.json()
    setNews(data.data)
    setLoading(false)
  }

  useEffect(() => {
    getNewsFromAPI(newsTopic)
  }, [newsTopic])

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */



/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
