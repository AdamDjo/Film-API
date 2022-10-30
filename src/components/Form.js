import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
const Form = () => {
  const [films, setFilms] = useState();
  const [search, setSeach] = useState();
  const [sortGoodBad, setSortGoodBad] = useState(null);

  let baseURL = `https://api.themoviedb.org/3/search/movie?api_key=c9a4518448c04ee3c043fbb49aaa4f61&query=${search}&language=fr-FR`;

  useEffect(() => {
    // axios.get(baseURL).then((res) => {
    //   setFilms(res.data.results);
    // });

    // fetch
    if (!search) {
      setSeach("code");
    } else {
      fetch(baseURL)
        .then((res) => res.json())

        .then(
          (result) => {
            setFilms(result.results);
          },
          // Remarque : il est important de traiter les erreurs ici
          // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
          // des exceptions provenant de réels bugs du composant.
          (error) => {}
        );
    }
  }, [search, baseURL]);

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="entrer le nom d'un film"
            id="search-input"
            onChange={(e) => setSeach(e.target.value)}
          ></input>
          <input type="submit" value="Recherche" disabled></input>
        </form>
      </div>
      <div className="btn-sort-container">
        <div
          className="btn-sort"
          id="goodToBad"
          onClick={() => setSortGoodBad("goodToBad")}
        >
          <span></span>⬆Top
        </div>
        <div
          className="btn-sort"
          id="badToGood"
          onClick={() => setSortGoodBad("badToGood")}
        >
          <span></span>⬇Flop
        </div>
      </div>
      <div className="result">
        <div className="home-page">
          {films &&
            films
              .sort((a, b) => {
                if (sortGoodBad === "goodToBad") {
                  return b.vote_average - a.vote_average;
                } else if (sortGoodBad === "badToGood") {
                  return a.vote_average - b.vote_average;
                } else return null;
              })
              .map((data) => <Cards key={data.id} film={data}></Cards>)}
        </div>
      </div>
    </div>
  );
};

export default Form;
