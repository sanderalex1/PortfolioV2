import { Box, Grid, Typography } from "@mui/material";
import { skills } from "../content";

const SkillsSection = () => {
  return (
    <Box sx={{ py: 20 }}>
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
      <Typography variant="h3" sx={{ fontWeight: 300, pt: 4 }}>
        {skills.title}
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", pt: 4 }}>
        {skills.description}
      </Typography>
      <Grid container sx={{ pt: 8 }}>
        {skills.items.map((i) => (
          <Grid
            size={{ xs: 6, sm: 4, md: 3 }}
            sx={{ border: "1px solid", borderColor: "divider", p: 4 }}
          >
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Typography variant="h5" sx={{ fontWeight: 300 }}>
                {i.name}
              </Typography>
              <Box component="img" src={i.image} sx={{ height: 50 }} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsSection;
