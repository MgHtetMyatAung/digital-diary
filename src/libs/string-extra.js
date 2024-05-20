export function stringSplit(text, number) {
  const content = String(text);
  return content.length > number ? content.slice(0, number) + " ..." : content;
}
