/********************************************************************************************************************
 * 한글이 포함되어 있는지 확인하는 함수
 * ******************************************************************************************************************/
function isContainsKorean(text) {
    const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    return korean.test(text);
}/********************************************************************************************************************
 * 마지막 글자가 받침이 없는 한글인지 확인하는 함수
 * ******************************************************************************************************************/
function isKoreanSingleCharacter(text) {
    const strGa = 44032; // 가
    const strHih = 55203; // 힣
    const lastStrCode = text.charCodeAt(text.length - 1);
    if (lastStrCode < strGa || lastStrCode > strHih) {
        return false; //한글이 아닐 경우 false 반환
    }
    return (lastStrCode - strGa) % 28 == 0;
}/********************************************************************************************************************
 * 주어진 한글의 로/으로 조사를 반환하는 함수입니다.
 * @param text 문자열
 * @returns 변환 조사 (로 또는 으로)
 * ******************************************************************************************************************/
function koreanGetRo(text) {
    if (text == null || text === '')
        return '';
    const lastChar = text.substring(text.length - 1);
    if (['1', '2', '4', '5', '7', '8', '9'].includes(lastChar))
        return '로';
    if (['0', '3', '6'].includes(lastChar))
        return '으로';
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
    }
    else {
        return '으로';
    }
}/********************************************************************************************************************
 * 주어진 한글의 로/으로 조사를 추가하는 함수입니다.
 * @param text 문자열
 * @param addSpace 공백을 추가할지 여부
 * @returns 조사가 추가된 문자열
 * ******************************************************************************************************************/
function koreanAppendRo(text, addSpace) {
    if (text == null || text === '')
        return '';
    return `${text}${addSpace ? ' ' : ''}${koreanGetRo(text)}`;
}/********************************************************************************************************************
 * 주어진 한글의 를/을 조사를 반환하는 함수입니다.
 * @param text 문자열
 * @returns 변환 조사 (을 또는 를)
 * ******************************************************************************************************************/
function koreanGetRul(text) {
    if (text == null || text === '')
        return '';
    const lastChar = text.substring(text.length - 1);
    return ['2', '4', '5', '9'].includes(lastChar)
        ? '를'
        : ['0', '1', '3', '6', '7', '8'].includes(lastChar)
            ? '을'
            : isKoreanSingleCharacter(text)
                ? '를'
                : '을';
}/********************************************************************************************************************
 * 주어진 한글의 를/을 조사를 추가하는 함수입니다.
 * @param text 문자열
 * @param addSpace 공백을 추가할지 여부
 * @returns 조사가 추가된 문자열
 * ******************************************************************************************************************/
function koreanAppendRul(text, addSpace) {
    if (text == null || text === '')
        return '';
    return `${text}${addSpace ? ' ' : ''}${koreanGetRul(text)}`;
}var index = {
    isContains: isContainsKorean,
    isSingleCharacter: isKoreanSingleCharacter,
    appendRo: koreanAppendRo,
    appendRul: koreanAppendRul,
    getRo: koreanGetRo,
    getRul: koreanGetRul,
};export{index as default,isContainsKorean,isKoreanSingleCharacter,koreanAppendRo,koreanAppendRul,koreanGetRo,koreanGetRul};