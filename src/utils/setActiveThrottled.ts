// utils.ts (or throttle.ts)
export function throttle<Args extends string[]> (
  func: (...args: Args  ) => void,
  delay: number
) : (...args: Args) => void {

  let lastCall = 0;
  let timeout: ReturnType<typeof setTimeout> | null = null;



  return function (...args: Args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    } else {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        lastCall = Date.now();
        func(...args);
      }, delay - (now - lastCall));
    }
  };
}
