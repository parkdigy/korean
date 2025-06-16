/********************************************************************************************************************
 * 주어진 한글의 로/으로 조사를 반환하는 함수입니다.
 * @param text 문자열
 * @returns 변환 조사 (로 또는 으로)
 * ******************************************************************************************************************/
export function koreanGetRo(text?: string): string {
  if (text == null || text === '') return '';

  const lastChar = text.substring(text.length - 1);

  if (['1', '2', '4', '5', '7', '8', '9'].includes(lastChar)) return '로';
  if (['0', '3', '6'].includes(lastChar)) return '으로';

  const code = lastChar.charCodeAt(0);

  // 한글 음절 범위 체크 (가 ~ 힣)
  if (code < 0xac00 || code > 0xd7a3) {
    return '로'; // 한글이 아닌 경우 그냥 '로' 붙임
  }

  const base = 0xac00;
  const jung = 28;

  const index = code - base;
  const jong = index % jung;

  // 받침이 없거나 받침이 ㄹ(종성 8)
  if (jong === 0 || jong === 8) {
    return '로';
  } else {
    return '으로';
  }
}

export default koreanGetRo;
