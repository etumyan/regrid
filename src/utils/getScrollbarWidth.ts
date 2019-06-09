const style = `
  position: absolute;
  top: -9999px;
  left: -9999px;
  width: 100px;
  height: 100px;
  overflow: scroll;
`;

export function getScrollbarWidth() {
  const element = document.createElement('div');
  element.style.cssText = style;
  document.body.appendChild(element);

  const width = element.offsetWidth - element.clientWidth;
  document.body.removeChild(element);

  return width;
}
