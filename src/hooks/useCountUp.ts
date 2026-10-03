import { useEffect, useState } from "react";

/**
 * Animated number counter using requestAnimationFrame.
 * Avoids forced reflows — only updates a single state integer.
 *
 * @param end     – target number
 * @param trigger – whether animation should start
 * @param duration – total animation time in ms (default 2000)
 */
export function useCountUp(end: number, trigger: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const startTime = performance.now();

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic for natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * end);

      if (current !== start) {
        start = current;
        setCount(current);
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, [end, trigger, duration]);

  return count;
}
