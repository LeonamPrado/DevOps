// eslint.config.mjs
import globals from "globals";
import js from "@eslint/js";
import jest from "eslint-plugin-jest";

export default [
  // 1. Configuração para todos os arquivos JavaScript do projeto
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node, // Adiciona os globais do ambiente Node.js
      },
    },
    rules: {
      ...js.configs.recommended.rules, // Aplica as regras recomendadas do ESLint
    },
  },

  // 2. Configuração específica APENAS para os arquivos de teste
  {
    // A mágica acontece aqui: aplicamos a configuração do Jest
    ...jest.configs['flat/recommended'],
    files: [
      "**/__tests__/**/*.js", // Aplica nos arquivos dentro da pasta __tests__
      "**/*.test.js"         // Aplica em qualquer arquivo que termine com .test.js
    ],
    rules: {
      ...jest.configs['flat/recommended'].rules,
      // Você pode adicionar ou sobrescrever regras do Jest aqui se quiser
      // Ex: "jest/no-identical-title": "off",
    }
  }
];
