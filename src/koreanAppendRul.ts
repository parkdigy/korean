import koreanGetRul from './koreanGetRul';

/********************************************************************************************************************
 * 주어진 한글의 를/을 조사를 추가하는 함수입니다.
 * @param text 문자열
 * @param addSpace 공백을 추가할지 여부
 * @returns 조사가 추가된 문자열
 * ******************************************************************************************************************/
export function koreanAppendRul(text?: string, addSpace?: boolean): string {
  if (text == null || text === '') return '';
  return `${text}${addSpace ? ' ' : ''}${koreanGetRul(text)}`;
}

export default koreanAppendRul;
