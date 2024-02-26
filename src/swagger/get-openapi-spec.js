/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const axios = require('axios');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const publicDir = 'src';
const outputFile = path.join(publicDir, 'swagger/openAPI.json');

axios
  .get(import.meta.env.OPENAPI_URL)
  .then((response) => {
    const jsonData = response.data;
    fs.writeFileSync(outputFile, JSON.stringify(jsonData, null, 2));
    console.log(`JSON file downloaded and saved to ${outputFile}`);
  })
  .catch((error) => {
    console.error('Error downloading JSON file:', error.message);
  });
