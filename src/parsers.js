import yaml from 'js-yaml';
import path from 'path';

const getParsed = (file, data) => {
  const format = path.extname(file);
  switch (format) {
    case '.json':
      return JSON.parse(data);
    case '.yaml':
      return yaml.load(data);
    case '.yml':
      return yaml.load(data);
    default:
      return '';
  }
};
export default getParsed;
