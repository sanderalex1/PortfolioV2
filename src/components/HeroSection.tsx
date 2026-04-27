import { Box, Typography } from "@mui/material";
import { hero } from "../content";
import PingAnimation from "./UI/PingAnimation";
const HeroSection = () => {
  return (
    <Box sx={{ pb: 24, pt: 40, minHeight: "92vh" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <PingAnimation />
        <Typography
          variant="body2"
          sx={{
            textTransform: "uppercase",
            color: "text.secondary",
            fontWeight: 500,
            lineHeight: "1rem",
            letterSpacing: "0.2rem",
          }}
        >
          {hero.availability}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
        <Typography variant="h1">{hero.firstName}</Typography>
        <Typography variant="h1" sx={{ color: "text.secondary" }}>
          {hero.lastName}
        </Typography>
      </Box>
      <Typography
        sx={{
          mt: 4.2,
          fontSize: "1.125rem",
          lineHeight: "1.75rem",
          maxWidth: "sm",
          color: "text.secondary",
        }}
      >
        {hero.intro}
      </Typography>
      <Box sx={{ mt: 5, display: "flex", gap: 4 }}>
        <Box
          sx={{
            "&:hover .arrow": {
              transform: "translateX(4px)",
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              cursor: "pointer",
              borderBottom: "1px solid",
              borderColor: "text.primary",
              paddingBottom: "2px",
              display: "inline-flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            {hero.primaryCta.label}
          </Typography>{" "}
          <Box
            component="span"
            className="arrow"
            sx={{
              transition: "transform 0.2s ease",
              display: "inline-block",
            }}
          >
            →
          </Box>
        </Box>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            "&:hover": { color: "text.primary", cursor: "pointer" },
          }}
        >
          {hero.secondaryCta.label}
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
