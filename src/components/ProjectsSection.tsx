import { Box, Typography } from "@mui/material";
import ProjectCardsGrid from "./UI/ProjectsCards/ProjectCardsGrid";
import { projects } from "../content";

const ProjectsSection = () => {
  return (
    <Box sx={{ py: "10rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "text.secondary",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            textTransform: "uppercase",
            lineHeight: "1rem",
            letterSpacing: "0.2rem",
          }}
        >
          01 — Selected Projects
        </Typography>
        <Typography variant="body1">{projects.length} projects</Typography>
      </Box>
      <ProjectCardsGrid />
    </Box>
  );
};

export default ProjectsSection;
