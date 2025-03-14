import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        extends: [
            eslint.configs.recommended,
            tseslint.configs.recommended,
        ],
        files: [
            "app/*.ts",
            "app/*.tsx",
            "app/**/*.ts",
            "app/**/*.tsx",
            "components/**/*.ts",
            "components/**/*.tsx"
        ],
        rules: {
            "@typescript-eslint/no-explicit-any": ["warn"],
            '@typescript-eslint/array-type': 'error',
            '@typescript-eslint/consistent-type-imports': 'error',
            "no-trailing-spaces": "error",
        },
    }
);
