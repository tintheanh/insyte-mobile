import 'dotenv/config';

export default {
	expo: {
		name: 'insyte-mobile',
		slug: 'insyte-mobile',
		version: '1.0.0',
		orientation: 'portrait',
		icon: './assets/icon.png',
		splash: {
			image: './assets/splash.png',
			resizeMode: 'contain',
			backgroundColor: '#ffffff',
		},
		updates: {
			fallbackToCacheTimeout: 0,
		},
		assetBundlePatterns: ['**/*'],
		ios: {
			supportsTablet: false,
		},
		android: {
			adaptiveIcon: {
				foregroundImage: './assets/adaptive-icon.png',
				backgroundColor: '#FFFFFF',
			},
			softwareKeyboardLayoutMode: 'pan',
		},
		web: {
			favicon: './assets/favicon.png',
		},
		extra: {
      authUrl: process.env.AUTH_URL
    },
		jsEngine: 'hermes',
	},
};
