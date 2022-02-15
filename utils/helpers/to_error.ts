import axios from 'axios';

export default function toError(ex: unknown): Error {
	if (axios.isAxiosError(ex)) {
		return new Error(ex.response!.data.message[0]);
	}

	if (ex instanceof Error) {
		return new Error(ex.message);
	}

	return new Error('Unknown error occurred');
}
