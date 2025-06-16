import isKoreanSingleCharacter from './isKoreanSingleCharacter';

/********************************************************************************************************************
 * 주어진 한글의 를/을 조사를 반환하는 함수입니다.
 * @param text 문자열
 * @returns 변환 조사 (을 또는 를)
 * ******************************************************************************************************************/
export function koreanGetRul(text?: string): string {
  if (text == null || text === '') return '';

  const lastChar = text.substring(text.length - 1);

  return ['2', '4', '5', '9'].includes(lastChar)
    ? '를'
    : ['0', '1', '3', '6', '7', '8'].includes(lastChar)
      ? '을'
      : isKoreanSingleCharacter(text)
        ? '를'
        : '을';
}

export default koreanGetRul;
