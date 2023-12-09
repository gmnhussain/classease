function classEase(...args) {
  const classNames = [];

  function processArg(arg) {
    if (typeof arg === 'string' && arg.trim() !== '') {
      classNames.push(arg);
    } else if (Array.isArray(arg)) {
      arg.forEach(processArg);
    } else if (typeof arg === 'object' && arg !== null) {
      for (const [key, value] of Object.entries(arg)) {
        if (value) {
          classNames.push(key);
        }
      }
    }
    // else if (arg && typeof arg !== 'boolean') {
    //   classNames.push(arg.toString());
    // }
  }

  args.forEach(processArg);

  return classNames.join(' ');
}

module.exports = classEase;
module.exports.classEase = classEase;
