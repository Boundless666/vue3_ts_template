import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/

export default defineConfig({
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
	plugins: [
		vue(),
		AutoImport({
			// 需要去解析的文件
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.vue$/,
				/\.vue\?vue/, // .vue
				/\.md$/, // .md
			],
			// imports 指定自动引入的包位置（名）
			imports: ['vue', 'pinia', 'vue-router'],
			// 生成相应的自动导入json文件。
			eslintrc: {
				// 启用
				enabled: true,
				// 生成自动导入json文件位置
				filepath: './.eslintrc-auto-import.json',
				// 全局属性值
				globalsPropValue: true,
			},
			resolvers: [NaiveUiResolver()],
		}),
		Components({
			// imports 指定组件所在目录，默认为 src/components
			dirs: ['src/components/', 'src/view/'],
			// 需要去解析的文件
			include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
			resolvers: [NaiveUiResolver()],
		}),
	],
})
