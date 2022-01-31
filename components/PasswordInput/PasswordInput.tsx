import React, { memo, useState } from 'react';
import { TextInput, View } from 'react-native';
import { Colors, SimpleLineIcons } from '../../constants';

import styles from './styles';

type PasswordInputProps = {
	value: string;
	placeholder?: string;

	/**
	 * Required method set password value
	 * @param value New password value to set
	 */
	setPassword: (password: string) => void;
};

function PasswordInput({ value, placeholder = 'password', setPassword }: PasswordInputProps) {
	const [isFocused, setIsFocused] = useState<boolean>(false);

	const performOnWatchFocus = () => setIsFocused(true);
	const performOnWatchBlur = () => setIsFocused(false);

	const focusedStyle = {
		borderColor: isFocused ? Colors.insyte : Colors.border,
	};

	return (
		<View style={styles.textBoxWrapper}>
			<SimpleLineIcons name='lock' size={24} color={Colors.normalText} style={styles.icon} />
			<TextInput
				onFocus={performOnWatchFocus}
				onBlur={performOnWatchBlur}
				autoCorrect={false}
				secureTextEntry={true}
				placeholder={placeholder}
				placeholderTextColor={Colors.normalText}
				value={value}
				onChangeText={setPassword}
				style={[styles.textBox, focusedStyle]}
			/>
		</View>
	);
}

export default memo(PasswordInput, (prevProps: PasswordInputProps, nextProps: PasswordInputProps) => {
	if (prevProps.value !== nextProps.value) {
		return false;
	}
	return true;
});
