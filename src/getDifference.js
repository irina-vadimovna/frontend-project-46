import _ from 'lodash';

const getDifference = (file1, file2) => {
  let result = '';
  const sortedKeys = _.sortBy(_.union(Object.keys(file1), Object.keys(file2)));
  sortedKeys.map((key) => {
    if (Object.hasOwn(file1, key) && Object.hasOwn(file2, key)) {
      if (file1[key] === file2[key]) {
        result += `    ${key}: ${file1[key]}\n`;
      } else {
        result += `  - ${key}: ${file1[key]}\n`;
        result += `  + ${key}: ${file2[key]}\n`;
      }
    }

    if (Object.hasOwn(file1, key) && !Object.hasOwn(file2, key)) {
      result += `  - ${key}: ${file1[key]}\n`;
    }

    if (Object.hasOwn(file2, key) && !Object.hasOwn(file1, key)) {
      result += `  + ${key}: ${file2[key]}\n`;
    }
    return result;
  });
  return `{\n  ${result.trim()}\n}`;
};
export default getDifference;