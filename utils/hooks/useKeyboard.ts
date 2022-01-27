import { useEffect, useState } from 'react';
import { Keyboard, KeyboardEvent, KeyboardEventName } from 'react-native';

import isIOS from '../helpers/is_ios';

export default function useKeyboard(): [number] {
	const [keyboardHeight, setKeyboardHeight] = useState<number>(0);
	const events = {
		show: (isIOS() ? 'keyboardWillShow' : 'keyboardDidShow') as KeyboardEventName,
		hide: (isIOS() ? 'keyboardWillHide' : 'keyboardDidHide') as KeyboardEventName,
	};

	const onKeyboardDidShow = (e: KeyboardEvent) => setKeyboardHeight(e.endCoordinates.height);

	const onKeyboardDidHide = () => setKeyboardHeight(0);

	useEffect(() => {
		const keyboardShowListener = Keyboard.addListener(events.show, onKeyboardDidShow);
		const keyboardHideListener = Keyboard.addListener(events.hide, onKeyboardDidHide);

		return () => {
			keyboardShowListener.remove();
			keyboardHideListener.remove();
		};
	}, []);

	return [keyboardHeight];
}
