import { Chip } from "@mui/material";

const CustomChip = ({ label }: { label: string }) => {
  return (
    <Chip
      label={label}
      sx={{
        backgroundColor: "background.default",
        border: "1px solid",
        borderColor: "divider",
        color: "text.secondary",
      }}
    />
  );
};

export default CustomChip;
