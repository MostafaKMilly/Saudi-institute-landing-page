import React from "react";
import { Box, styled, Typography } from "@mui/material";
import PropTypes from "prop-types";

const CategoryContainer = styled(Box)({
  background: "#1e5b6342",
  width: "130px",
  height: "130px",
  border: "3px solid #EEEEEE",
  borderRadius: "20px",
  padding: 14,
});

function CategoryItem({ title, subTitle }) {
  return (
    <CategoryContainer>
      <Typography fontSize="22px" color="primary.main" fontWeight={600}>
        {title}
      </Typography>
      <Typography
        color="primary.main"
        sx={{
          mt: 2,
          fontStyle: "italic",
          lineHeight: "1.2",
          fontSize: "15px",
        }}
      >
        {subTitle}
      </Typography>
    </CategoryContainer>
  );
}

CategoryItem.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default CategoryItem;
