import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Favorites() {
  return (
    <div className="text-center p-5">
      <h1>В избранном пока ничего нет</h1>
      <h1>
        Добавляйте туры в избранное с помощью{" "}
        <FavoriteBorderIcon fontSize="large" />
      </h1>
    </div>
  );
}
