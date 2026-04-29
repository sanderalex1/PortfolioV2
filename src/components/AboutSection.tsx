import { Box, Typography } from "@mui/material";
import { about } from "../content";
import SkillChip from "./UI/SkillChip";
import { PanelRow } from "./UI/PanelRow";

const AboutSection = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4, py: 20 }}>
      <Typography
        variant="body1"
        sx={{
          textTransform: "uppercase",
          lineHeight: "1rem",
          letterSpacing: "0.2rem",
          color: "text.secondary",
        }}
      >
        {about.eyebrow}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            maxWidth: 700,
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 300 }}>
            {about.title}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {about.paragraphs.map((p, i) => (
              <Typography
                key={i}
                variant="h6"
                sx={{
                  color: "text.secondary",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
                }}
              >
                {p}
              </Typography>
            ))}
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <PanelRow label="currently">
            <Typography>{about.panel.currently}</Typography>
          </PanelRow>

          <PanelRow label="based in">
            <Typography>{about.panel.basedIn}</Typography>
          </PanelRow>

          <PanelRow label="toolkit">
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {about.panel.toolkit.map((t) => (
                <SkillChip key={t} label={t} />
              ))}
            </Box>
          </PanelRow>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
