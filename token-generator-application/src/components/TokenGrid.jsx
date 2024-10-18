import React from "react";
import Grid from "@mui/material/Grid2";
import Card from "./Card";

const TokenGrid = ({ tokens, perRow, color, prefix }) => {
  if (tokens.length === 0 || perRow === 0) {
    return null;
  }

  const rows = Math.ceil(tokens.length / perRow);
  const rowsOfTokens = [];

  for (let i = 0; i < rows; i++) {
    rowsOfTokens.push(tokens.slice(i * perRow, (i + 1) * perRow));
  }

  return (
    <Grid container direction="column" spacing={2}>
      {rowsOfTokens.map((row, rowIndex) => (
        <Grid container key={rowIndex} justifyContent="center" spacing={2}>
          {row.map((token) => (
            <Grid item key={token}>
              <Card color={color}>{`${prefix}${token}`}</Card>
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default TokenGrid;
