import { useMemo } from "react";

interface Props {
  count?: number;
  color?: string;          // CSS color
  variant?: "home" | "service";
}

/**
 * Pure-CSS floating particle field for hero sections.
 * Each particle uses a unique CSS animation with random delay/duration —
 * zero JS on every frame, fully GPU-composited via `translate3d`.
 *
 * Home variant: warm green/gold orbs with gentle float.
 * Service variant: cool blue/teal geometric dots with pulse.
 */
export default function FloatingParticles({
  count = 18,
  color,
  variant = "home",
}: Props) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const size = 3 + Math.random() * 6;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = 12 + Math.random() * 18;
      const delay = Math.random() * 10;
      const opacity = 0.15 + Math.random() * 0.35;

      return { id: i, size, left, top, duration, delay, opacity };
    });
  }, [count]);

  const baseColor =
    color ??
    (variant === "home"
      ? "rgba(74, 222, 128, VAR_OPACITY)"
      : "rgba(56, 189, 248, VAR_OPACITY)");

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {particles.map((p) => {
        const c = baseColor.replace("VAR_OPACITY", String(p.opacity));
        return (
          <span
            key={p.id}
            className={variant === "service" ? "rounded-sm" : "rounded-full"}
            style={{
              position: "absolute",
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              top: `${p.top}%`,
              background: c,
              animation: `particleFloat ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
              willChange: "transform",
            }}
          />
        );
      })}
    </div>
  );
}
