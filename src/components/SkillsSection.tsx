import { Box, Grid, Typography } from "@mui/material";
import { skills } from "../content";

const SkillsSection = () => {
  return (
    <Box sx={{ py: 20, display: "flex", flexDirection: "column", gap: 3 }}>
      <Typography
        variant="body1"
        sx={{
          textTransform: "uppercase",
          lineHeight: "1rem",
          letterSpacing: "0.2rem",
          color: "text.secondary",
        }}
      >
        {skills.eyebrow}
      </Typography>
      <Typography variant="h3" sx={{ fontWeight: 300 }}>
        {skills.title}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "text.secondary",
          fontWeight: 300,
          fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
        }}
      >
        {skills.description}
      </Typography>
      <Grid container sx={{ pt: 8, justifyContent: "center" }}>
        {skills.items.map((i) => (
          <Grid
            size={{ xs: 10, sm: 5, md: 3 }}
            sx={{ border: "1px solid", borderColor: "divider", p: 4 }}
          >
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Box component="img" src={i.image} sx={{ height: 50 }} />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 300,
                }}
              >
                {i.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsSection;
