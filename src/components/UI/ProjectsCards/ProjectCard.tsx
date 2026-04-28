import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import type { Project } from "../../../content/projects/projectsTypes";

const ProjectCard = ({ card }: { card: Project }) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: "none",
        border: "none",
      }}
      key={card.id}
    >
      <CardActionArea
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={card.image}
          alt={card.imageAlt}
          sx={{
            objectFit: "contain",
            border: "1px solid",
            borderColor: "divider",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {card.number}
              </Typography>
              <Typography variant="h5">{card.title}</Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {card.year}
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: "text.secondary", pt: 2 }}>
            {card.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
              mt: 2,
            }}
          >
            {card.tags.map((t) => (
              <Chip
                sx={{
                  backgroundColor: "background.default",
                  border: "1px solid",
                  borderColor: "divider",
                  color: "text.secondary",
                }}
                key={t}
                label={t}
              />
            ))}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
