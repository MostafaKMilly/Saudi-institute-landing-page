import React from "react";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { styled, experimental_sx as sx } from "@mui/system";
import { Avatar, Button, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import ManIcon from "@mui/icons-material/Man";
import GirlIcon from "@mui/icons-material/Girl";

const CardContainer = styled(Box)(
  sx({
    background: "#FFFEFA",
    boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
    width: "100%",
    mr: 2,
    pb: 1,
    mb: 0.5,
  })
);

function CourseItem({
  image,
  rating,
  title,
  instructor,
  hours,
  lessons,
  level,
  gender,
  price,
}) {
  const stars = new Array(5).fill("");

  return (
    <CardContainer>
      <Box overflow="hidden" sx={{ background: "#1e5b63" }}>
        <Box component="img" src={image} width="100%" sx={{ opacity: 0.5 }} />
      </Box>
      <Box mt={2} px={2}>
        <Typography
          fontSize="20px"
          color="#555555"
          fontWeight={700}
          lineHeight={1.2}
        >
          {title}
        </Typography>
        <Box display={"flex"} columnGap={0.1} my={2}>
          {stars.map((_, index) => (
            <StarIcon
              key={index}
              fontSize="small"
              sx={{ color: rating - 1 >= index ? "#FFC107" : "#D9D9D9" }}
            />
          ))}
        </Box>
        <Box display="flex" columnGap={2} alignItems="center">
          <Avatar
            src={"images/person.jpeg"}
            sx={{ width: "30px", height: "30px", border: "2px solid #FFC107" }}
          />
          <Typography fontSize="16px" color="#555555">
            {instructor}
          </Typography>
        </Box>
        <Box sx={{ border: "2px #1e5b6321", borderStyle: "solid none", mt: 2 }}>
          <Box display="flex" columnGap={2} alignItems="center" my={0.5} py={1}>
            <Box display="flex" columnGap={0.5}>
              <QueryBuilderIcon color="primary" fontSize="small" />
              <Typography color="#555555" fontSize="13px" fontWeight={700}>
                {hours}
                <Typography color="#555555" fontSize="13px" component={"span"}>
                  Hours
                </Typography>
              </Typography>
            </Box>
            <Box display="flex" columnGap={0.5}>
              <PlayCircleOutlineIcon color="primary" fontSize="small" />
              <Typography color="#555555" fontSize="13px" fontWeight={700}>
                {lessons}
                <Typography color="#555555" fontSize="13px" component={"span"}>
                  Lessons
                </Typography>
              </Typography>
            </Box>
          </Box>
          <Box display="flex" columnGap={2} alignItems="center" my={0.5} py={1}>
            <Box display="flex" columnGap={0.5}>
              <EqualizerIcon color="primary" fontSize="small" />
              <Typography color="#555555" fontSize="13px">
                {level}
              </Typography>
            </Box>
            <Box display="flex" columnGap={0.5}>
              {gender === "male" ? (
                <ManIcon color="primary" fontSize="small" />
              ) : (
                <GirlIcon color="primary" fontSize="small" />
              )}
              <Typography color="#555555" fontSize="13px">
                {gender}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          my={1}
        >
          <Button variant="contained" size="small">
            Reservation
          </Button>
          <Typography fontSize="12px" color="primary.main" fontWeight={700}>
            {price} SAR
          </Typography>
        </Box>
      </Box>
    </CardContainer>
  );
}

CourseItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  instructor: PropTypes.string,
  hours: PropTypes.number,
  lessons: PropTypes.number,
  level: PropTypes.string,
  gender: PropTypes.string,
  price: PropTypes.number,
};

export default CourseItem;
