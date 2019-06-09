export function hasElementHorizontalScrollbar(selector: string) {
  const element = document.querySelector(selector);

  if (!element) throw Error('Element not found.');

  return element.scrollWidth > element.clientWidth;
}
