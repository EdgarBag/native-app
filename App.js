import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import PlacesNavigator from './navigation/PlacesNavigations'

export default function App() {

  LogBox.ignoreAllLogs()
  return < PlacesNavigator />;

}
