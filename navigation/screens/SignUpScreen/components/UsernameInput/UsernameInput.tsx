import React, { memo, useState } from 'react';
import { TextInput, View } from 'react-native';

import { Colors, SimpleLineIcons } from '../../../../../constants';
import styles from './styles';

type UsernameInputProps = {
  value: string;

  /**
   * Required method set input username
   * @param username New username value to set
   */
  setUsername: (username: string) => void;
};

function UsernameInput({ value, setUsername }: UsernameInputProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const performOnWatchFocus = () => setIsFocused(true);
  const performOnWatchBlur = () => setIsFocused(false);

  const focusedStyle = {
    borderColor: isFocused ? Colors.insyte : 'rgba(255, 255, 255, 0.4)',
  };

  return (
    <View style={styles.textBoxWrapper}>
      <SimpleLineIcons
        name="user"
        size={24}
        color={Colors.normalText}
        style={styles.icon}
      />
      <TextInput
        onFocus={performOnWatchFocus}
        onBlur={performOnWatchBlur}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="username"
        placeholderTextColor={Colors.normalText}
        value={value}
        onChangeText={setUsername}
        style={[styles.textBox, focusedStyle]}
      />
    </View>
  );
}

export default memo(
  UsernameInput,
  (prevProps: UsernameInputProps, nextProps: UsernameInputProps) => {
    if (
      prevProps.value !== nextProps.value ||
      prevProps.setUsername !== nextProps.setUsername
    ) {
      return false;
    }
    return true;
  },
);
