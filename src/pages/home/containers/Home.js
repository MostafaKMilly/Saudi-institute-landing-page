import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { categories } from "../../../constants";
import { CategoryItem } from "../components";

function Home(props) {
  return (
    <Box>
      <Typography color="primary.main" fontWeight="700" variant="h4">
        Categories
      </Typography>
      <Grid
        container
        columnGap={{ xs: 0, md: "29px" }}
        columnSpacing={2}
        mt={2}
      >
        {categories.map((category, index) => (
          <Grid item key={index} xs={6} sm={4} md={1.2}>
            <CategoryItem title={category.title} subTitle={category.subTitle} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
