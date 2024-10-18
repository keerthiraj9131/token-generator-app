import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import { StyledContainer } from "../assets/css/Common.style";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TokenForm from "../components/TokenForm";
import TokenGrid from "../components/TokenGrid";

function Home() {
  const [inputs, setInputs] = useState({
    blueTokens: "",
    bluePrefix: "",
    bluePerRow: "",
    redTokens: "",
    redPrefix: "",
    redPerRow: "",
  });

  const [generatedRedTokens, setGeneratedRedTokens] = useState([]);
  const [generatedRedPerRow, setGeneratedRedPerRow] = useState(0);
  const [generatedBlueTokens, setGeneratedBlueTokens] = useState([]);
  const [generatedBluePerRow, setGeneratedBluePerRow] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const blueTickFields = [
    { label: "Number of blue tokens", name: "blueTokens", type: "number" },
    { label: "Blue token prefix", name: "bluePrefix", type: "" },
    { label: "Blue token per row", name: "bluePerRow", type: "number" },
  ];

  const redTickFields = [
    { label: "Number of Red tokens", name: "redTokens", type: "number" },
    { label: "Red token prefix", name: "redPrefix", type: "" },
    { label: "Red token per row", name: "redPerRow", type: "number" },
  ];

  const handleGenerate = () => {
    const totalRedTokens = parseInt(inputs.redTokens, 10);
    const tokensPerRowRed = parseInt(inputs.redPerRow, 10);
    const totalBlueTokens = parseInt(inputs.blueTokens, 10);
    const tokensPerRowBlue = parseInt(inputs.bluePerRow, 10);

    if (
      !isNaN(totalRedTokens) &&
      !isNaN(tokensPerRowRed) &&
      tokensPerRowRed > 0
    ) {
      setGeneratedRedTokens(
        Array.from({ length: totalRedTokens }, (_, i) => i + 1)
      );
      setGeneratedRedPerRow(tokensPerRowRed);
    }

    if (
      !isNaN(totalBlueTokens) &&
      !isNaN(tokensPerRowBlue) &&
      tokensPerRowBlue > 0
    ) {
      setGeneratedBlueTokens(
        Array.from({ length: totalBlueTokens }, (_, i) => i + 1)
      );
      setGeneratedBluePerRow(tokensPerRowBlue);
    }
  };

  return (
    <StyledContainer maxWidth="lg">
      <Grid
        container
        direction="row"
        columns={{ xs: 4, sm: 8, md: 12 }}
        columnSpacing={26}
      >
        <TokenForm
          fields={blueTickFields}
          inputs={inputs}
          handleChange={handleChange}
        />
        <TokenForm
          fields={redTickFields}
          inputs={inputs}
          handleChange={handleChange}
        />
      </Grid>

      <Grid container justifyContent="center" alignItems="center" columns={2}>
        <Stack style={{ marginTop: 20 }} spacing={2} direction="row">
          <Button variant="contained" onClick={handleGenerate}>
            Generate
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setInputs({
                blueTokens: "",
                bluePrefix: "",
                bluePerRow: "",
                redTokens: "",
                redPrefix: "",
                redPerRow: "",
              });
              setGeneratedRedTokens([]);
              setGeneratedBlueTokens([]);
            }}
          >
            Clear
          </Button>
        </Stack>
      </Grid>

      {/* Render blue token cards */}
      <Stack style={{ marginTop: 20 }} spacing={2} direction="column">
        <TokenGrid
          tokens={generatedBlueTokens}
          perRow={generatedBluePerRow}
          color="blue"
          prefix={inputs.bluePrefix}
        />
      </Stack>

      {/* Render red token cards */}
      <Stack style={{ marginTop: 20 }} spacing={2} direction="column">
        <TokenGrid
          tokens={generatedRedTokens}
          perRow={generatedRedPerRow}
          color="red"
          prefix={inputs.redPrefix}
        />
      </Stack>
    </StyledContainer>
  );
}

export default Home;
