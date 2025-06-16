import { koreanGetRo } from '../src';

describe('koreanGetRo', () => {
  it('koreanGetRo', () => {
    expect(koreanGetRo('병원')).toBe('으로');
    expect(koreanGetRo('학교')).toBe('로');
    expect(koreanGetRo('디바이스')).toBe('로');
    expect(koreanGetRo('용어')).toBe('로');
    expect(koreanGetRo('한국어')).toBe('로');
    expect(koreanGetRo('우리말')).toBe('로');
    expect(koreanGetRo('속담')).toBe('으로');
    expect(koreanGetRo('봄')).toBe('으로');
    expect(koreanGetRo('여름')).toBe('으로');
    expect(koreanGetRo('가을')).toBe('로');
    expect(koreanGetRo('겨울')).toBe('로');

    expect(koreanGetRo('0')).toBe('으로');
    expect(koreanGetRo('1')).toBe('로');
    expect(koreanGetRo('2')).toBe('로');
    expect(koreanGetRo('3')).toBe('으로');
    expect(koreanGetRo('4')).toBe('로');
    expect(koreanGetRo('5')).toBe('로');
    expect(koreanGetRo('6')).toBe('으로');
    expect(koreanGetRo('7')).toBe('로');
    expect(koreanGetRo('8')).toBe('로');
    expect(koreanGetRo('9')).toBe('로');
    expect(koreanGetRo('10')).toBe('으로');
  });
});
