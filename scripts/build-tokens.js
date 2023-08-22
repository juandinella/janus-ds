/* eslint-disable */
const { choices: tokensChoices, decisions: tokensDecisions } = require('../tokens/tokens');
const toKebabCase = require('../utils/toKebabCase');
const fs = require('fs');

const cleanLines = (string = '') => string.trim().replace(/^\n\n/gm, '\n');

function transformTokens(object, parentKey) {
  if (!object) {
    console.error(`Error: object passed to transformTokens is null or undefined. parentKey: ${JSON.stringify(parentKey)}`);
    return '';
  }

  return Object.keys(object).reduce((transformedTokens, objectKey) => {
    const value = object[objectKey];
    const customProperty = parentKey
      ? toKebabCase(`${parentKey}-${objectKey}`)
      : toKebabCase(`${objectKey}`);

    if (Array.isArray(value)) {
      return `${transformedTokens}\n  --${customProperty}: ${value.join(', ')};`;
    } else if (typeof value === 'object') {
      return `${transformedTokens}\n${transformTokens(value, customProperty)}`;
    }

    const label = `--${customProperty}`;
    return `${transformedTokens}\n  ${label}: ${value};`;
  }, '');
}

const buildTokens = (name, choices, decisions) => {
  const transformedChoices = transformTokens(choices);
  const transformedDecisions = transformTokens(decisions);
  const customProperties = `${transformedChoices}\n${transformedDecisions}`;

  const data = `:root {\n  ${cleanLines(customProperties)}\n}`;

  fs.writeFile(`./src/styles/${name}.css`, data, 'utf8', (error) => {
    if (error) throw error;
    console.log(`🎨 Custom properties for ${name} created!`);
  });
};

buildTokens('janus-ds', tokensChoices, tokensDecisions);
