import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  
  {
    files: ["**/*.js", "**/*.jsx"], // Aplica las reglas a archivos .js y .jsx
    extends: ["airbnb-base"], // Si usas React, cambia a "airbnb"
    rules: {
      // Aquí puedes sobrescribir reglas específicas
      "no-console": "off", // Ejemplo: Permitir console.log
    },
  },
  
];