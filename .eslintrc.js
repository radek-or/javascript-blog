module.exports = {
	env: {
		browser: false,
		es2021: false,
	},
	extends: ["standard", "plugin:react/recommended"],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		semi: ["0", "0"],
		quotes: ["0", "0"],
	},
};
