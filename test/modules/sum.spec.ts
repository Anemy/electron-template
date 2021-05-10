import { sum } from '../../src/modules/sum';

describe('Sum', () => {
  it('should add two numbers', () => {
    expect(sum(2, 3)).toEqual(5);
  });
});
