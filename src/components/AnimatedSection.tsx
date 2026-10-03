import { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type Direction = "up" | "left" | "right" | "scale";

interface Props {
  children: ReactNode;
  direction?: Direction;
  delay?: number;      // ms
  className?: string;
}

/**
 * GPU-accelerated scroll-reveal wrapper.
 * Uses transform + opacity (composite-only properties) for 60fps animations.
 * will-change hint applied only while animating to avoid layer bloat.
 */
export default function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: Props) {
  const { ref, isVisible } = useInView(0.12);

  const transforms: Record<Direction, string> = {
    up: "translateY(48px)",
    left: "translateX(-48px)",
    right: "translateX(48px)",
    scale: "scale(0.92)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0,0) scale(1)" : transforms[direction],
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: isVisible ? "auto" : "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}
