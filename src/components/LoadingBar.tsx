import React from "react";
import { Box, LinearProgress } from "@mui/material";

export const LoadingBar = () => {
  return (
    <Box sx={{ width: "100%", margin: "20px 0" }}>
      <LinearProgress />
    </Box>
  );
};
