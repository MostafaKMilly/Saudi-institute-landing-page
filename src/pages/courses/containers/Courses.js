import { Box, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import { courses } from "../../../constants";
import CourseItem from "../../../shared/components/CourseItem";
import { useSliderSettings } from "../../../shared/hooks";

function Courses() {
  const settings = useSliderSettings();

  return (
    <Box mt>
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
  );
}

export default Courses;
