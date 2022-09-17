import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import { categories, courses } from "../../../constants";
import CourseItem from "../../../shared/components/CourseItem";
import { useSliderSettings } from "../../../shared/hooks";
import { CategoryItem } from "../components";

function Home() {
  const settings = useSliderSettings();

  return (
    <Stack spacing={15}>
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
              <CategoryItem
                title={category.title}
                subTitle={category.subTitle}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
        <Typography color="primary.main" fontWeight="700" variant="h4">
          Courses
        </Typography>
        <Box mt={2}>
          <Slider {...settings}>
            {courses.map((course, index) => (
              <CourseItem key={index} {...course} />
            ))}
          </Slider>
        </Box>
      </Box>
    </Stack>
  );
}

export default Home;
