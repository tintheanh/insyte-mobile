import React from 'react';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';

import store from './redux/store';
import { toastConfig } from './config';
import { RootStack } from './navigation/stacks';

export default function App() {
	return (
		<>
			<Provider store={store}>
				<RootStack />
			</Provider>
			<Toast config={toastConfig} />
		</>
	);
}
