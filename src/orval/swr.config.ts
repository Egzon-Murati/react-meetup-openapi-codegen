import { defineConfig } from 'orval';

export default defineConfig({
  'flowrspot-api': {
    output: {
      mode: 'split',
      target: './swr/generated-api.ts',
      client: 'swr',
      prettier: true,
    },
    input: {
      target: '../swagger/openAPI.json',
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    },
  },
});