import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { ThemeToggle } from "./ToggleButton";
import { useEffect, useState } from "react";
import { nav } from "../../content";
import type { Theme } from "@mui/material/styles";
import { scrollTo } from "../../utilities/scrollTo";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      const value = Math.min(window.scrollY / 80, 0.85);
      setOpacity(value);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const appBarStyle = {
    background: (theme: Theme) =>
      theme.palette.mode === "light"
        ? `rgba(251, 249, 245, ${opacity})`
        : `rgba(17, 15, 13, ${opacity})`,
    backdropFilter: `blur(${opacity * 12}px)`,
    WebkitBackdropFilter: `blur(${opacity * 12}px)`,
    boxShadow: "none",
    borderBottom: "1px solid",
    borderColor: scrolled ? "divider" : "transparent",
    transition: "border-color 0.3s ease",
    pt: 2,
  };

  return (
    <AppBar position="fixed" sx={appBarStyle}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            onClick={() => scrollTo("hero")}
            sx={{ cursor: "pointer" }}
          >
            Alex M
            <Box component="span" sx={{ color: "#E65E19" }}>
              .
            </Box>
          </Typography>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            {nav.map((c) => (
              <Typography
                variant="body2"
                onClick={() => scrollTo(c.id)}
                sx={{
                  color: "text.secondary",
                  fontWeight: "500",
                  cursor: "pointer",
                  "&:hover": { color: "text.primary" },
                }}
              >
                {c.label}
              </Typography>
            ))}
            <ThemeToggle />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
