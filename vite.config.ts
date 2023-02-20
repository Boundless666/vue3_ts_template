import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
			'#': resolve(__dirname, './src/types'),
			utils: resolve(__dirname, './src/utils'),
			api: resolve(__dirname, './src/api'),
		},
	},
	server: {
		host: '0.0.0.0',
		port: 9100,
	},
})
