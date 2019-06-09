export function hasElementVerticalScrollbar(selector: string) {
  const element = document.querySelector(selector);

  if (!element) throw Error('Element not found.');

  return element.scrollHeight > element.clientHeight;
}
