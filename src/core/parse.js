const parse = (value = '') => {
  if (value.startsWith('=')) {
    try {
      return eval(value.slice(1));
    } catch (error) {
      return value;
    }
  }

  return value;
};

export default parse;
