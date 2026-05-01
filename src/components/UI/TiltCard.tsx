import { useRef, useEffect, type MouseEvent, type ReactNode } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";

interface TiltCardProps {
  children: ReactNode;
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const TiltCard = ({ children }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number>(0);
  const current = useRef({ rx: 0, ry: 0, glare: 0 });
  const target = useRef({ rx: 0, ry: 0, glare: 0 });

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const animate = () => {
    const card = cardRef.current;
    if (!card) return;

    current.current.rx = lerp(current.current.rx, target.current.rx, 0.08);
    current.current.ry = lerp(current.current.ry, target.current.ry, 0.08);
    current.current.glare = lerp(
      current.current.glare,
      target.current.glare,
      0.08,
    );

    card.style.setProperty("--rx", `${current.current.rx}deg`);
    card.style.setProperty("--ry", `${current.current.ry}deg`);
    card.style.setProperty("--glare-opacity", `${current.current.glare}`);

    rafRef.current = requestAnimationFrame(animate);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDesktop) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    target.current.rx = (0.5 - py) * 4;
    target.current.ry = (px - 0.5) * 6;
    target.current.glare = 1;

    card.style.setProperty("--mx", `${px * 100}%`);
    card.style.setProperty("--my", `${py * 100}%`);
    card.style.setProperty("--shadow-opacity", "0.8");

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
  };

  const handleMouseLeave = () => {
    if (!isDesktop) return;
    target.current = { rx: 0, ry: 0, glare: 0 };
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--shadow-opacity", "0");
  };

  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <Box sx={{ perspective: "1400px" }}>
      <Box
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        sx={{
          position: "relative",
          width: "100%",
          px: { xs: 3, sm: 6 },
          py: { xs: 6, sm: 8 },
          border: "1px solid",
          borderColor: "transparent",
          borderRadius: "2px",
          bgcolor: "background.default",
          transformStyle: "preserve-3d",
          transform:
            "perspective(1400px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
          transition: "border-color 500ms",
          overflow: "hidden",
          boxShadow: `
            0 30px 60px -30px rgba(0,0,0,calc(0.18 * var(--shadow-opacity, 0))),
            0 10px 20px -10px rgba(0,0,0,calc(0.12 * var(--shadow-opacity, 0)))
          `,
          "&:hover": { borderColor: "divider", cursor: "pointer" },
        }}
      >
        {/* Content sits above all overlays */}
        <Box sx={{ position: "relative", zIndex: 1 }}>{children}</Box>

        {/* Permanent vignette — dark edges, lighter center */}
        <Box
          aria-hidden="true"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            inset: 0,
          }}
        />

        {/* Permanent bottom fade */}
        <Box
          aria-hidden="true"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
          }}
        />

        {/* Mouse-tracking glare spot */}
        <Box
          aria-hidden="true"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            inset: 0,
            opacity: "var(--glare-opacity, 0)",
          }}
        />

        {/* Mouse-tracking accent glow */}
        <Box
          aria-hidden="true"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            inset: 0,
            opacity: "calc(var(--glare-opacity, 0) * 0.4)",
            mixBlendMode: "overlay",
            background: `
              radial-gradient(
                circle 200px at var(--mx, 50%) var(--my, 50%),
                rgba(230,94,25,0.5),
                transparent 70%
              )
            `,
          }}
        />

        {/* Edge sheen */}
        <Box
          aria-hidden="true"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            inset: 0,
            opacity: "calc(var(--glare-opacity, 0) * 0.3)",
            background:
              "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.06) 50%, transparent 70%)",
          }}
        />
      </Box>
    </Box>
  );
};

export default TiltCard;
