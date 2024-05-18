import process from 'process';
import path from 'path';
import fs from 'fs';
import getParsed from './parsers.js';

const getAbsolutePath = (filePath) => path.resolve(process.cwd(), filePath);

const readFile = (filePath) => fs.readFileSync(getAbsolutePath(filePath), 'utf-8');

const gendiff = (filePath1, filePath2) => {
  const dataFile1 = readFile(filePath1);
  const dataFile2 = readFile(filePath2);

  const parsing1 = getParsed(filePath1, dataFile1);
  const parsing2 = getParsed(filePath2, dataFile2);
  console.log(parsing1);
  console.log(parsing2);

};

export default gendiff;