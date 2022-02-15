import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { Colors } from '../../constants';
import styles from './styles';

export default function Loading({
  backgroundColor = Colors.brightColor,
  loadingColor = "white"
}: {
  backgroundColor?: string;
  loadingColor?: string
}) {
  return (
    <View style={[styles.loading, { backgroundColor }]}>
      <ActivityIndicator size="small" color={loadingColor} />
    </View>
  );
}
