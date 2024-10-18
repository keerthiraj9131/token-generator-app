import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import { StyledContainer, StyledLabel } from "../assets/css/Common.style";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Home() {
  const [inputs, setInputs] = useState({
    blueTokens: "",
    bluePrefix: "",
    bluePerRow: "",
    redTokens: "",
    redPrefix: "",
    redPerRow: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const blueTickFields = [
    { label: "Number of blue tokens", name: "blueTokens", type: "number" },
    { label: "Blue tick prefix", name: "bluePrefix", type: "" },
    { label: "Blue tick per row", name: "bluePerRow", type: "number" },
  ];

  const redTickFields = [
    { label: "Number of Red tokens", name: "redTokens", type: "number" },
    { label: "Red tick prefix", name: "redPrefix", type: "" },
    { label: "Red tick per row", name: "redPerRow", type: "number" },
  ];

  return (
    <StyledContainer maxWidth="lg">
      <Grid
        container
        direction="row"
        columns={{ xs: 4, sm: 8, md: 12 }}
        columnSpacing={26}
      >
        <Grid direction="column" container columns={{ xs: 4, sm: 8, md: 12 }}>
          {blueTickFields.map((field, index) => (
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
        <Grid direction="column" container columns={{ xs: 4, sm: 8, md: 12 }}>
          {redTickFields.map((field, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Grid display="flex" alignItems="center">
                <StyledLabel>{field.label}</StyledLabel>
                <TextField
                  style={{ margin: 10 }}
                  variant="outlined"
                  name={field.name}
                  type={field.type}
                  value={inputs[field.name]}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" columns={2}>
        <Stack style={{ marginTop: 20 }} spacing={2} direction="row">
          <Button variant="contained">Generate</Button>
          <Button variant="outlined">Clear</Button>
        </Stack>
      </Grid>
    </StyledContainer>
  );
}

export default Home;
