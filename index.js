module.exports = {
	extends: [
		"standard",
		"plugin:vue/recommended"
	],

	parserOptions: {
		parser: "babel-eslint",
		ecmaVersion: 2017,
		sourceType: "module"
	},

	rules: {
		"func-style": [
			"error",
			"declaration",
			{
				"allowArrowFunctions": true
			}
		],
		"keyword-spacing": [
			"error",
			{
				"before": true,
				"after": true
			}
		],
		"no-console": 0,
		"linebreak-style": [
			"error",
			"unix"
		],
		"vue/max-attributes-per-line": ["error", {
			"singleline": 1,
			"multiline": {
				"max": 1,
				"allowFirstLine": false
			}
		}],
		"no-multiple-empty-lines": [
			"error",
			{
				"max": 1,
				"maxEOF": 1,
				"maxBOF": 0
			}
		],
		"function-paren-newline": [
			"error",
			"never"
		],
		"newline-per-chained-call": [
			"error",
			{
				"ignoreChainWithDepth": 2
			}
		],
		"padding-line-between-statements": [
			"error",
			{
				"blankLine": "always",
				"prev": [
					"const",
					"let",
					"var"
				],
				"next": "*"
			},
			{
				"blankLine": "any",
				"prev": [
					"const",
					"let",
					"var"
				],
				"next": [
					"const",
					"let",
					"var"
				]
			}
		],
		'indent': 'off',
		"vue/html-closing-bracket-newline": ["error", {
			"singleline": "never",
			"multiline": "always"
		}],
		"vue/html-closing-bracket-spacing": "error",
		'vue/script-indent': ['error', 2, {
			'baseIndent': 1,
			'switchCase': 1,
			'ignores': []
		}],
		"no-multi-spaces": 1,
		"no-mixed-spaces-and-tabs": 1,
		"vue/multiline-html-element-content-newline": "error",
		"vue/no-spaces-around-equal-signs-in-attribute": "error",
		"vue/singleline-html-element-content-newline": [
			"error",
			{
				"ignoreWhenNoAttributes": false
			}
		],
		"comma-dangle": [
			"error",
			"never"
		],
		"padded-blocks": [
			"error",
			{
				"blocks": "always",
				"switches": "always",
				"classes": "always"
			}
		],
		"vue/component-name-in-template-casing": [
			"error",
			"PascalCase",

		]
	}
}
