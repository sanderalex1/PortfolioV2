import { Box, Divider, Typography } from "@mui/material";

const labelSx = {
  textTransform: "uppercase" as const,
  lineHeight: "1rem",
  letterSpacing: "0.2rem",
  color: "text.secondary",
};

export const PanelRow = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <>
    <Divider />
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="body1" sx={labelSx}>
        {label}
      </Typography>
      {children}
    </Box>
  </>
);
