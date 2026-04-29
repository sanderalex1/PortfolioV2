import { Chip } from "@mui/material";
import { skillColors } from "../../theme/palette";
const SkillChip = ({ label }: { label: string }) => {
  return (
    <Chip
      label={label}
      sx={{
        backgroundColor: skillColors[label] + "10",
        border: "1px solid",
        borderColor: skillColors[label] + "60",
        color: "text.secondary",
      }}
    />
  );
};

export default SkillChip;
