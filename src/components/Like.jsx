import React from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { pink } from "@mui/material/colors";

export default function Like({ isLiked }) {
  const [isLike, setIsLike] = React.useState(isLiked);

  return (
    <div onClick={() => setIsLike(!isLike)} className="svg-item">
      {isLike ? (
        <FavoriteIcon sx={{ color: pink[500] }} />
      ) : (
        <FavoriteBorderIcon sx={{ color: pink[50] }} />
      )}
    </div>
  );
}
