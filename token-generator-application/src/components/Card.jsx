import React from "react";
import { Card as MuiCard, CardContent } from "@mui/material";

const Card = ({ color, children }) => {
  return (
    <MuiCard style={{ backgroundColor: color, minWidth: "100px" }}>
      <CardContent>{children}</CardContent>
    </MuiCard>
  );
};

export default Card;
