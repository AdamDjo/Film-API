import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
const Whishlist = () => {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    let filmsId = window.localStorage.film
      ? window.localStorage.film.split(",")
      : [];
    for (let i = 0; i < filmsId.length; i++) {
      fetch(
        `https://api.themoviedb.org/3/movie/${filmsId[i]}?api_key=c9a4518448c04ee3c043fbb49aaa4f61`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setListData((listData) => [...listData, result]);
          },

          // Remarque : il est important de traiter les erreurs ici
          // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
          // des exceptions provenant de réels bugs du composant.
          (error) => {}
        );
    }
  }, []);

  return (
    <div className="user-list-page">
      <h2>
        Coups de coeur<span>❤</span>
      </h2>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((film) => <Cards film={film} key={film.id}></Cards>)
        ) : (
          <h2>Aucun coup de coeur</h2>
        )}
      </div>
    </div>
  );
};

export default Whishlist;
