import { Grid } from "@mui/material";
import { projects } from "../../../content";
import ProjectCard from "./ProjectCard";
const ProjectCardsGrid = () => {
  return (
    <Grid container spacing={4} sx={{ py: "10rem" }}>
      {projects.map((p) => (
        <Grid size={{ xs: 12, sm: 8, md: 6 }} key={p.id}>
          <ProjectCard card={p} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectCardsGrid;
