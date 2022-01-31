import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Toast, { BaseToast, BaseToastProps, ErrorToast } from 'react-native-toast-message';

import { Colors, AntDesign } from '../constants';

const TrailingIcon = () => (
	<TouchableOpacity onPress={() => Toast.hide()}>
		<View
			style={{
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				marginRight: 12,
			}}
		>
			<AntDesign name='close' size={14} color={Colors.normalText} />
		</View>
	</TouchableOpacity>
);

const toastConfig = {
	error: (props: BaseToastProps) => (
		<ErrorToast
			{...props}
			style={{
				borderLeftColor: Colors.error,
				backgroundColor: Colors.toast,
			}}
			contentContainerStyle={{ paddingHorizontal: 15 }}
			text1Style={{
				fontSize: 16,
				fontWeight: '600',
				color: Colors.normalText,
			}}
			text2Style={{
				fontSize: 14,
			}}
			text1NumberOfLines={1}
			text2NumberOfLines={1}
			renderTrailingIcon={() => <TrailingIcon />}
		/>
	),
	success: (props: BaseToastProps) => (
		<BaseToast
			{...props}
			style={{
				borderLeftColor: Colors.success,
				backgroundColor: Colors.toast,
			}}
			contentContainerStyle={{ paddingHorizontal: 15 }}
			text1Style={{
				fontSize: 16,
				fontWeight: '600',
				color: Colors.normalText,
			}}
			text2Style={{
				fontSize: 14,
			}}
			text1NumberOfLines={1}
			text2NumberOfLines={1}
			renderTrailingIcon={() => <TrailingIcon />}
		/>
	),
};

export default toastConfig;
