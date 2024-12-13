/**
 *
 * @param str : string
 * @returns : number. toString()
 */
export const string2Id = (str?: string): string => {
  return (
    str
      ?.split('')
      .reduce((acc, char) => acc + char.charCodeAt(0), 0)
      .toString() || '-1'
  );
};

// ------------------------------------------------------------------------------------------------
export function br2MdBr(text: string): string {
  return text.replace(/\n/g, '\r\r');
}

// ------------------------------------------------------------------------------------------------
export const isValidImageUrl = (url: string | undefined): boolean => {
  if (!url) return false;
  try {
    const validUrl = new URL(url);
    return /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(validUrl.pathname);
  } catch (e) {
    return false;
  }
};
// ------------------------------------------------------------------------------------------------
