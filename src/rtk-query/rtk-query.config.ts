import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: 'https://flowrspot-api.herokuapp.com/doc/v1/swagger.json',
  apiFile: './baseApi.ts',
  apiImport: 'baseApi',
  outputFile: './generated-api.ts',
  exportName: 'flowrSpotApi',
  hooks: true,
}

export default config