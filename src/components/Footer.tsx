import { Box, Container, Divider, Typography } from "@mui/material";
import { hero, site } from "../content";
import { scrollTo } from "../utilities/scrollTo";

const Footer = () => {
  return (
    <Box component="footer">
      <Divider />
      <Container
        maxWidth="lg"
        sx={{
          p: 4,
          color: "text.secondary",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography variant="body2">© {site.copyrightYear}</Typography>
          <Typography variant="body2">
            {hero.firstName} {hero.lastName}.
          </Typography>
          <Typography variant="body2">Built in {site.builtYear}.</Typography>
        </Box>
        <Typography
          variant="body2"
          onClick={() => scrollTo("hero")}
          sx={{ "&:hover": { color: "text.primary", cursor: "pointer" } }}
        >
          Back to top ↑
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
