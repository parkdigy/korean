import { isKoreanSingleCharacter } from '../src';

describe('isKoreanSingleCharacter', () => {
  it('isKoreanSingleCharacter', () => {
    expect(isKoreanSingleCharacter('가')).toBe(true);
    expect(isKoreanSingleCharacter('나')).toBe(true);
    expect(isKoreanSingleCharacter('다')).toBe(true);
    expect(isKoreanSingleCharacter('랴')).toBe(true);
    expect(isKoreanSingleCharacter('희')).toBe(true);
    expect(isKoreanSingleCharacter('훼')).toBe(true);

    expect(isKoreanSingleCharacter('')).toBe(false);
    expect(isKoreanSingleCharacter('각')).toBe(false);
    expect(isKoreanSingleCharacter('핳')).toBe(false);
    expect(isKoreanSingleCharacter('휗')).toBe(false);
  });
});
