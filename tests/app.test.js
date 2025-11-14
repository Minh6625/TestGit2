const { sum } = require('../src/app');

describe('sum()', () => {
  it('cộng hai số đúng', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('xử lý số âm', () => {
    expect(sum(-1, -2)).toBe(-3);
  });
});
