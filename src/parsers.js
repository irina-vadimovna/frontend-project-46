import yaml from 'js-yaml';

const getParsed = (file, data) => {
  if (String(file).endsWith('.json')) {
    return JSON.parse(data);
  }
  if (String(file).endWith('.yaml')) {
    return yaml.load(data);
  }
  if (String(file).endsWith('.yml')) {
    return yaml.load(data);
  }
  return 'Неизвестный формат';
};
export default getParsed;
