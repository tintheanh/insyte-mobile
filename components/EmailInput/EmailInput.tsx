import React, { memo, useState } from 'react';
import { TextInput, View } from 'react-native';

import { Colors, SimpleLineIcons } from '../../constants';
import styles from './styles';

type EmailInputProps = {
  value: string;

  /**
   * Required method set input email
   * @param email New email value to set
   */
  setEmail: (email: string) => void;
};

function EmailInput({ value, setEmail }: EmailInputProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const performOnWatchFocus = () => setIsFocused(true);
  const performOnWatchBlur = () => setIsFocused(false);

  const focusedStyle = {
    borderColor: isFocused ? Colors.insyte : 'rgba(255, 255, 255, 0.4)',
  };

  return (
    <View style={styles.textBoxWrapper}>
      <SimpleLineIcons
        name="envelope"
        size={24}
        color={Colors.normalText}
        style={styles.icon}
      />
      <TextInput
        onFocus={performOnWatchFocus}
        onBlur={performOnWatchBlur}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="email"
        placeholderTextColor={Colors.normalText}
        value={value}
        onChangeText={setEmail}
        style={[styles.textBox, focusedStyle]}
      />
    </View>
  );
}

export default memo(
  EmailInput,
  (prevProps: EmailInputProps, nextProps: EmailInputProps) => {
    if (
      prevProps.value !== nextProps.value ||
      prevProps.setEmail !== nextProps.setEmail
    ) {
      return false;
    }
    return true;
  },
);
