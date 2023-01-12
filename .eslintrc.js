module.exports = {
    root: true,
    overrides: [
      {
        files: ["*.ts"],
        parserOptions: {
          project: [
            "tsconfig.json",
            "tsconfig.*?.json",
            "e2e/tsconfig.json"
          ],
          createDefaultProgram: true
        },
        extends: [
          "plugin:@angular-eslint/recommended",
          "airbnb-typescript/base",
          "plugin:prettier/recommended"
        ],
        rules: {
          "max-len": ["error", { "code": 140, "ignorePattern": "^import.*$", "comments": 170 }],
          "comma-dangle": ["error", "only-multiline"],
          "@typescript-eslint/semi": [2, "never"],
          "linebreak-style": "off",
          "@typescript-eslint/member-ordering": "off",
          "@typescript-eslint/explicit-function-return-type": ["error"],
          "import/prefer-default-export": "off",
          "@typescript-eslint/lines-between-class-members": ["off"],
          "no-console": "off",
          "prettier/prettier": ["error", { "endOfLine": "auto" }],
          "no-underscore-dangle": ["error", { "allowAfterThis": true }]
        }
      },
      {
        files: ["*.component.html"],
        extends: ["plugin:@angular-eslint/template/recommended"],
        rules: {
          "linebreak-style": "off",
          "@angular-eslint/template/no-negated-async": "off"
        }
      },
      {
        files: ["*.component.ts", "*.directive.ts", "*.service.ts"],
        extends: ["plugin:@angular-eslint/template/process-inline-templates"],
        rules: {
          "@angular-eslint/no-output-on-prefix": "off",
          "@angular-eslint/no-empty-lifecycle-method": "off",
          "@angular-eslint/no-input-rename": "off",
          "@angular-eslint/no-output-native": "off",
          "@angular-eslint/component-class-suffix": "off"
        }
      },
      {
        files: ['src/**/*.spec.ts', 'src/**/*.d.ts'],
        parserOptions: {
          project: './src/tsconfig.spec.json',
        },
        extends: ['plugin:jasmine/recommended'],
        plugins: ['jasmine'],
        env: { jasmine: true },
        rules: {
          '@typescript-eslint/no-unused-vars': 'off',
        },
      }
    ]
  }
  