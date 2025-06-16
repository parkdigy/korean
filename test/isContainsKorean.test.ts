import { isContainsKorean } from '../src';

describe('isContainsKorean', () => {
  it('isContainsKorean', () => {
    expect(isContainsKorean('가나다')).toBe(true);
    expect(isContainsKorean('abc가나다')).toBe(true);

    expect(isContainsKorean('')).toBe(false);
    expect(isContainsKorean('abc')).toBe(false);
    expect(isContainsKorean('秋')).toBe(false);
    expect(isContainsKorean('あき')).toBe(false);
    expect(isContainsKorean('❤️')).toBe(false);
  });
});
