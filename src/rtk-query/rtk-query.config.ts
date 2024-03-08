import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: '../swagger/openAPI.json',
  apiFile: './baseApi.ts',
  apiImport: 'baseApi',
  outputFile: './generated-api.ts',
  exportName: 'flowrSpotApi',
  hooks: true,
};

export default config;
