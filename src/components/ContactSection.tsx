import { Box, Link, Typography } from "@mui/material";
import { contact } from "../content";

const linksStyles = {
  display: "inline-flex",
  alignItems: "center",
  gap: 0.5,
  color: "text.secondary",
  fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
  fontStyle: "normal",
  fontWeight: "500",
  "&:hover .linkArrow": {
    transform: "translate(2px, -2px)",
  },
};

const emailStyles = {
  cursor: "pointer",
  borderBottom: "1px solid",
  borderColor: "text.primary",
  paddingBottom: "2px",
  display: "inline-flex",
  alignItems: "center",
  gap: 0.5,
  textDecoration: "none",
  fontStyle: "normal",
};

const ContactSection = () => {
  return (
    <Box sx={{ py: 20, display: "flex", flexDirection: "column", gap: 4 }}>
      <Typography
        variant="body1"
        sx={{
          textTransform: "uppercase",
          lineHeight: "1rem",
          letterSpacing: "0.2rem",
          color: "text.secondary",
        }}
      >
        {contact.eyebrow}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: 2,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
            fontStyle: "normal",
          }}
        >
          {contact.title.lead}
        </Typography>
        <Typography variant="h1" sx={{ color: "text.secondary" }}>
          {contact.title.accent}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: 10,
          justifyContent: "space-between",
          "&:hover .arrow": {
            transform: "translateX(4px)",
          },
        }}
      >
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Link
            variant="h6"
            sx={emailStyles}
            href={`mailto:${contact.email}?subject=Hello&body=Hi Alex,`}
          >
            {contact.email}
          </Link>
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
        <Box sx={{ display: "flex", gap: 4 }}>
          {contact.links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              underline="none"
              target="_blank"
              variant="h6"
              sx={linksStyles}
            >
              {l.label}
              <Box
                component="span"
                className="linkArrow"
                sx={{
                  display: "inline-block",
                  transition: "transform 0.2s ease",
                  fontSize: "0.75rem",
                }}
              >
                ↗
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ContactSection;
