import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function removeDataFromStorage(key: string): Promise<void> {
	try {
		await AsyncStorage.removeItem(key);
	} catch (_) {}
}
