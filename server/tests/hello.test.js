const { getHelloWorld } = require('../services/hello');

describe('Hello Service', () => {
  test('Returns Hello World', () => {
    const result = getHelloWorld();
    expect(result).toEqual('Hello World');
  });
});
