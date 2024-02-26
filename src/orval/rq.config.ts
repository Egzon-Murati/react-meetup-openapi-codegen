import { defineConfig } from 'orval';

export default defineConfig({
  'flowrspot-api': {
    output: {
      mode: 'split',
      target: './rq/generated-api.ts',
      client: 'react-query',
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