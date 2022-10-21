const franc = require('franc');
const langs = require('langs');

const input = process.argv[2];
const langCode = franc(input); // => 'afr'

const language = langs.where('3', langCode);
console.log(language);