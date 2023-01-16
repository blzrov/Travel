import React, { useState, useEffect, useContext } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import Card from "../components/Card";

import { LoginContext } from "../App";

export default function Favorites() {
  const loginContext = useContext(LoginContext);
  // eslint-disable-next-line
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    async function getFavorites() {
      const response = await fetch(
        `http://localhost:8080/favorites/${loginContext}`
      );
      const result = await response.json();
      console.log(result);
      setTravels(result);
    }
    getFavorites();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {travels.length > 0 ? (
        <>
          {travels.map((e, i) => {
            return (
              <div key={i} className="my-3">
                <Card travel={e} />
              </div>
            );
          })}
        </>
      ) : (
        <div className="text-center p-5">
          <h1>В избранном пока ничего нет</h1>
          <h1>
            Добавляйте туры в избранное с помощью{" "}
            <FavoriteBorderIcon fontSize="large" />
          </h1>
        </div>
      )}
    </div>
  );
}
