import { ReactNode } from "react";
import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";

interface Props {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: ReactNode;
  duration?: number;
  className?: string;
}

/**
 * Stat counter that triggers on scroll into view.
 * Uses requestAnimationFrame for smooth 60fps number ticking.
 */
export default function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  label,
  icon,
  duration = 2000,
  className = "",
}: Props) {
  const { ref, isVisible } = useInView(0.3);
  const count = useCountUp(end, isVisible, duration);

  return (
    <div
      ref={ref}
      className={`text-center ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-50 rounded-xl text-primary-600 mb-3">
        {icon}
      </div>
      <p className="text-3xl md:text-4xl font-bold text-gray-900">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  );
}
