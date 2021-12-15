const createLogger = () => {
  const messages = [];

  // input: string
  // output: undef

  const warn = message => {
    messages.push({
      message,
      dateTime: new Date(),
      type: 'warn',
    });
  };

  const error = message => {
    messages.push({
      message,
      dateTime: new Date(),
      type: 'error',
    });
  };

  const log = message => {
    messages.push({
      message,
      dateTime: new Date(),
      type: 'log',
    });
  };

  // input: string
  // output: arrays of object

  const getRecords = str => {
    const filtered = str ? messages.filter(elem => elem.type === str) : messages;
    return filtered.sort((a, b) => b.dateTime - a.dateTime);
  };

  return { warn, log, error, getRecords };
};

export { createLogger };

// test data

const logger = createLogger(); // closure
logger.log('User logged in');
logger.warn('User try to restricted page');
logger.error('Unexpected error on the site');
logger.log('User logged out');

console.log(logger.getRecords());
console.log(logger.getRecords('log'));

// console.log(logger.getRecords('error'));
// console.log(logger.getRecords('warn'));
// console.log(logger.getRecords('warnc'));
// console.log(logger.getRecords('log'));
// console.log(logger.getRecords('log'));

// 8 lex envir

// ************************************************************ */
// ** closure

function makeCounter() {
  let count = 0;

  return () => {
    // eslint-disable-next-line no-plusplus
    return count++;
  };
}

// test data
const counter = makeCounter(); // замикання
console.log(counter());
console.log(counter());
console.log(counter());
