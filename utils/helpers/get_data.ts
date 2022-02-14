import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function getData(key: string): Promise<string | null> {
	try {
		return await AsyncStorage.getItem(key);
	} catch (_) {
		return null;
	}
}
