import YAML from 'js-yaml';

const getParsed = (file, data) => {
  if (String(file).endsWith('.json')) {
    return JSON.parse(data);
  } else if (String(file).endWith('.yaml')) {
    return yaml.load(data);
  } else if (String(file).endsWith('.yml')) {
    return yaml.load(data);
  }
};
export default getParsed;
