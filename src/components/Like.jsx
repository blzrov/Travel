import React, { useState, useContext } from "react";

import "./Like.less";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { pink } from "@mui/material/colors";

import { LoginContext } from "../App";

export default function Like({ isLiked, id }) {
  const loginContext = useContext(LoginContext);

  const [isLike, setIsLike] = useState(isLiked);

  async function onClick() {
    setIsLike((prev) => !prev);
    await fetch("http://localhost:8080/setFavorite/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ loginContext, id }),
    });
  }

  return (
    <div onClick={onClick} className="like-svg">
      {isLike ? (
        <FavoriteIcon sx={{ color: pink[500] }} />
      ) : (
        <FavoriteBorderIcon sx={{ color: pink[50] }} />
      )}
    </div>
  );
}
