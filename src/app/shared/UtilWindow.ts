export function isBottomOfWindow(window:Window): boolean {
  return Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight > document.documentElement.offsetHeight
}
