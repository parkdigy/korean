import { koreanAppendRul } from '../src';

describe('koreanAppendRul', () => {
  it('koreanAppendRul', () => {
    expect(koreanAppendRul('병원')).toBe('병원을');
    expect(koreanAppendRul('학교')).toBe('학교를');
    expect(koreanAppendRul('디바이스')).toBe('디바이스를');
    expect(koreanAppendRul('용어')).toBe('용어를');
    expect(koreanAppendRul('한국어')).toBe('한국어를');
    expect(koreanAppendRul('우리말')).toBe('우리말을');
    expect(koreanAppendRul('속담')).toBe('속담을');
    expect(koreanAppendRul('봄')).toBe('봄을');
    expect(koreanAppendRul('여름')).toBe('여름을');
    expect(koreanAppendRul('가을')).toBe('가을을');
    expect(koreanAppendRul('겨울')).toBe('겨울을');

    expect(koreanAppendRul('0')).toBe('0을');
    expect(koreanAppendRul('1')).toBe('1을');
    expect(koreanAppendRul('2')).toBe('2를');
    expect(koreanAppendRul('3')).toBe('3을');
    expect(koreanAppendRul('4')).toBe('4를');
    expect(koreanAppendRul('5')).toBe('5를');
    expect(koreanAppendRul('6')).toBe('6을');
    expect(koreanAppendRul('7')).toBe('7을');
    expect(koreanAppendRul('8')).toBe('8을');
    expect(koreanAppendRul('9')).toBe('9를');
    expect(koreanAppendRul('10')).toBe('10을');
  });
});
