import React, { useState, useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Favorites() {
  // eslint-disable-next-line
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    async function getFavorites() {
      const response = await fetch("http://localhost:8080/favorites/1");
      const result = await response.json();
      setTravels(result);
    }
    getFavorites();
  }, []);

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
