module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true, //解决eslint找不到module的报错
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-essential',
		'plugin:@typescript-eslint/recommended',
		// 新增，必须放在最后面
		'plugin:prettier/recommended',
	],
	overrides: [],
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: {
		//关闭组件命名规则
		'vue/multi-word-component-names': 'off',
	},
}
