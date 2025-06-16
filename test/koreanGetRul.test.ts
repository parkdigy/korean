import { koreanGetRul } from '../src';

describe('koreanGetRul', () => {
  it('koreanGetRul', () => {
    expect(koreanGetRul('병원')).toBe('을');
    expect(koreanGetRul('학교')).toBe('를');
    expect(koreanGetRul('디바이스')).toBe('를');
    expect(koreanGetRul('용어')).toBe('를');
    expect(koreanGetRul('한국어')).toBe('를');
    expect(koreanGetRul('우리말')).toBe('을');
    expect(koreanGetRul('속담')).toBe('을');
    expect(koreanGetRul('봄')).toBe('을');
    expect(koreanGetRul('여름')).toBe('을');
    expect(koreanGetRul('가을')).toBe('을');
    expect(koreanGetRul('겨울')).toBe('을');

    expect(koreanGetRul('0')).toBe('을');
    expect(koreanGetRul('1')).toBe('을');
    expect(koreanGetRul('2')).toBe('를');
    expect(koreanGetRul('3')).toBe('을');
    expect(koreanGetRul('4')).toBe('를');
    expect(koreanGetRul('5')).toBe('를');
    expect(koreanGetRul('6')).toBe('을');
    expect(koreanGetRul('7')).toBe('을');
    expect(koreanGetRul('8')).toBe('을');
    expect(koreanGetRul('9')).toBe('를');
    expect(koreanGetRul('10')).toBe('을');
  });
});
