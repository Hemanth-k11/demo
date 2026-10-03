import { useEffect, useRef, useState } from "react";

/**
 * Intersection Observer hook for scroll-triggered animations.
 * Uses GPU-friendly CSS transforms — no JS-driven layout recalculations.
 *
 * @param threshold – visibility ratio (0–1) to trigger
 * @param once – if true, stays visible after first intersection
 */
export function useInView(threshold = 0.15, once = true) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, isVisible };
}
