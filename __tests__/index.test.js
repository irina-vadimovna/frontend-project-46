import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('json gendiff', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const expected = readFile('result.txt');

  expect(gendiff(file1, file2)).toEqual(expected);
});

test('yml gendiff', () => {
  const file1 = getFixturePath('file1.yml');
  const file2 = getFixturePath('file2.yml');
  const expected = readFile('result.txt');

  expect(gendiff(file1, file2)).toEqual(expected);
});

test('yaml gendiff', () => {
  const file1 = getFixturePath('file1.yaml');
  const file2 = getFixturePath('file2.yaml');
  const expected = readFile('result.txt');

  expect(gendiff(file1, file2)).toEqual(expected);
});

test('Stylish json yaml', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.yml');
  const expected = readFile('result.txt');

  expect(gendiff(file1, file2, 'stylish')).toEqual(expected);
});

test('Plain gendiff', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const expected = readFile('resultPlain.txt');

  expect(gendiff(file1, file2, 'plain')).toEqual(expected);
});

test('JSON gendiff', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const expected = readFile('resultJSON.txt');

  expect(gendiff(file1, file2, 'json')).toEqual(expected);
});
