import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function saveData(key: string, value: string): Promise<void> {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (_) {}
}
