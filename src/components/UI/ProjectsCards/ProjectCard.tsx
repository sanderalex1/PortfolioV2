import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import type { Project } from "../../../content/projects/projectsTypes";
import SkillChip from "../SkillChip";

const cardAreaStyle = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  filter: "grayscale(100%)",
  "&:hover": {
    filter: "grayscale(0%)",
    transition: "transform 0.5s ease",
  },

  "&:hover .img": {
    transform: "scale(1.05)",
  },
  "&:hover .arrow": {
    opacity: 1,
    transform: "translateX(4px)",
  },
};

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
      <CardActionArea sx={cardAreaStyle}>
        <CardMedia
          component="img"
          height="300"
          className="img"
          image={card.image}
          alt={card.imageAlt}
          sx={{
            objectFit: "contain",
            border: "1px solid",

            borderColor: "divider",
          }}
        />
        <CardContent
          sx={{
            flexGrow: 1,
          }}
        >
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
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", display: "flex", gap: 1 }}
            >
              <Box>{card.year}</Box>

              <Box
                component="span"
                className="arrow"
                sx={{
                  opacity: 0,
                  transform: "translateX(-4px)",
                  transition: "opacity 0.2s ease, transform 0.2s ease",
                  display: "inline-block",
                }}
              >
                →
              </Box>
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
              <SkillChip key={t} label={t} />
            ))}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
