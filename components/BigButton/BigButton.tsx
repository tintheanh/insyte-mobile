import React, { memo } from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import { Colors } from '../../constants';
import styles from './styles';

type BigButtonProps = {
  label: string;
  loading: boolean;
  onPress: () => void;
};

function BigButton({ label, loading, onPress }: BigButtonProps) {
  const renderBtnLabel = () => {
    if (loading) {
      return <ActivityIndicator size="small" color={Colors.darkColor} />;
    }
    return <Text style={styles.btnText}>{label}</Text>;
  };

  return (
    <TouchableOpacity disabled={loading} onPress={onPress} style={styles.btn}>
      {renderBtnLabel()}
    </TouchableOpacity>
  );
}

export default memo(BigButton, (prevProps, nextProps) => {
  if (
    prevProps.loading !== nextProps.loading ||
    prevProps.onPress !== nextProps.onPress
  ) {
    return false;
  }
  return true;
});
