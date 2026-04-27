import { AppBar, Box, Typography } from "@mui/material";
import { ThemeToggle } from "./ToggleButton";

const Navbar = () => {
  return (
    <Box>
      <AppBar position="sticky">
        <Typography variant="h5">Alex</Typography>
        <Box>
          <ThemeToggle />
        </Box>
      </AppBar>
    </Box>
  );
};

export default Navbar;
