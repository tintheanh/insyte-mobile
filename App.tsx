import React from 'react';
import Toast from 'react-native-toast-message';
import { toastConfig } from './config';

import { RootStack } from './navigation/stacks';

export default function App() {
	return (
		<>
			<RootStack />
			<Toast config={toastConfig} />
		</>
	);
}
