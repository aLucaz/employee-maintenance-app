module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    plugins: [
        "react"
    ],
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    rules: {
    },
    overrides: [
        {
            files: ["*.tsx"],
            rules: {
                "@typescript-eslint/explicit-function-return-type": "off",
                "react/react-in-jsx-scope": "off"
            }
        },
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    ignorePatterns: [
        "**/*.js",
        "**/*.json",
        "node_modules",
        "src/public",
        "styles",
        "dist"
    ],
}
