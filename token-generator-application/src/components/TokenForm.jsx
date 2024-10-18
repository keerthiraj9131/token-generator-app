import React from "react";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import { StyledLabel } from "../assets/css/Common.style";

const TokenForm = ({ fields, inputs, handleChange }) => {
  return (
    <Grid container direction="column" columns={{ xs: 4, sm: 8, md: 12 }}>
      {fields.map((field, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Grid display="flex" alignItems="center">
            <StyledLabel>{field.label}</StyledLabel>
            <TextField
              style={{ margin: 10 }}
              variant="outlined"
              type={field.type}
              name={field.name}
              value={inputs[field.name]}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default TokenForm;
