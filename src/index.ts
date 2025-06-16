export * from './isContainsKorean';
export * from './isKoreanSingleCharacter';
export * from './koreanAppendRo';
export * from './koreanAppendRul';
export * from './koreanGetRo';
export * from './koreanGetRul';

import isContainsKorean from './isContainsKorean';
import isKoreanSingleCharacter from './isKoreanSingleCharacter';
import koreanAppendRo from './koreanAppendRo';
import koreanAppendRul from './koreanAppendRul';
import koreanGetRo from './koreanGetRo';
import koreanGetRul from './koreanGetRul';

export default {
  isContains: isContainsKorean,
  isSingleCharacter: isKoreanSingleCharacter,
  appendRo: koreanAppendRo,
  appendRul: koreanAppendRul,
  getRo: koreanGetRo,
  getRul: koreanGetRul,
};
