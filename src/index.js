import process from 'process';
import path from 'path';
import fs from 'fs';
import getParsed from './parsers.js';
import getDifference from './getDifference.js';

const getAbsolutePath = (filePath) => path.resolve(process.cwd(), filePath);

const readFile = (filePath) => fs.readFileSync(getAbsolutePath(filePath), 'utf-8');

const gendiff = (filePath1, filePath2) => {
  const dataFile1 = readFile(filePath1);
  const dataFile2 = readFile(filePath2);

  const parsingFile1 = getParsed(filePath1, dataFile1);
  const parsingFile2 = getParsed(filePath2, dataFile2);

  const difference = getDifference(parsingFile1, parsingFile2);
  return difference;
};

export default gendiff;