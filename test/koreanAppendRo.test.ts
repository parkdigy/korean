import { koreanAppendRo } from '../src';

describe('koreanAppendRo', () => {
  it('koreanAppendRo', () => {
    expect(koreanAppendRo('병원')).toBe('병원으로');
    expect(koreanAppendRo('학교')).toBe('학교로');
    expect(koreanAppendRo('디바이스')).toBe('디바이스로');
    expect(koreanAppendRo('용어')).toBe('용어로');
    expect(koreanAppendRo('한국어')).toBe('한국어로');
    expect(koreanAppendRo('우리말')).toBe('우리말로');
    expect(koreanAppendRo('속담')).toBe('속담으로');
    expect(koreanAppendRo('봄')).toBe('봄으로');
    expect(koreanAppendRo('여름')).toBe('여름으로');
    expect(koreanAppendRo('가을')).toBe('가을로');
    expect(koreanAppendRo('겨울')).toBe('겨울로');

    expect(koreanAppendRo('0')).toBe('0으로');
    expect(koreanAppendRo('1')).toBe('1로');
    expect(koreanAppendRo('2')).toBe('2로');
    expect(koreanAppendRo('3')).toBe('3으로');
    expect(koreanAppendRo('4')).toBe('4로');
    expect(koreanAppendRo('5')).toBe('5로');
    expect(koreanAppendRo('6')).toBe('6으로');
    expect(koreanAppendRo('7')).toBe('7로');
    expect(koreanAppendRo('8')).toBe('8로');
    expect(koreanAppendRo('9')).toBe('9로');
    expect(koreanAppendRo('10')).toBe('10으로');
  });
});
