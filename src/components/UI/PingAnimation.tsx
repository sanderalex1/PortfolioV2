import Box from "@mui/material/Box";

export default function PingAnimation() {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#E65E19",
        width: 8,
        height: 8,
        borderRadius: "50%",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          bgcolor: "#E65E19",
          opacity: 0.6,
          "@keyframes ping": {
            "0%": { transform: "translate(-50%, -50%) scale(1)", opacity: 1 },
            "75%, 100%": {
              transform: "translate(-50%, -50%) scale(2.5)",
              opacity: 0,
            },
          },
          animation: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        }}
      />
    </Box>
  );
}
