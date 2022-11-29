import React, { useState } from "react";

import "./Like.less";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { pink } from "@mui/material/colors";

export default function Like({ isLiked }) {
  const [isLike, setIsLike] = useState(isLiked);

  return (
    <div onClick={() => setIsLike(!isLike)} className="like-svg">
      {isLike ? (
        <FavoriteIcon sx={{ color: pink[500] }} />
      ) : (
        <FavoriteBorderIcon sx={{ color: pink[50] }} />
      )}
    </div>
  );
}
