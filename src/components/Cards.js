import React from "react";

const Cards = ({ film }) => {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };

  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < film.genre_ids.length; i++) {
      switch (film.genre_ids[i]) {
        case 28:
          genreArray.push("Action");
          break;
        case 12:
          genreArray.push("Adventure");
          break;
        case 16:
          genreArray.push("Animation");
          break;
        case 35:
          genreArray.push("Comedy");
          break;
        case 99:
          genreArray.push("Documentary");
          break;
        case 18:
          genreArray.push("Drama");
          break;
        case 14:
          genreArray.push("Fantasy");
          break;
        case 36:
          genreArray.push("History");
          break;
        case 27:
          genreArray.push("Horror");
          break;
        case 10402:
          genreArray.push("Music");
          break;
        case 9648:
          genreArray.push("Mystery");
          break;
        case 10749:
          genreArray.push("Romance");
          break;
        case 878:
          genreArray.push("Science Fiction");
          break;
        case 10770:
          genreArray.push("TV Movie");
          break;
        case 53:
          genreArray.push("Thriller");
          break;
        case 10752:
          genreArray.push("War");
          break;
        case 37:
          genreArray.push("Western");
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => <li key={genre}>{genre}</li>);
  };

  const addStorage = () => {
    let storedData = window.localStorage.film
      ? window.localStorage.film.split(",")
      : [];
    if (!storedData.includes(film.id.toString())) {
      storedData.push(film.id);
      window.localStorage.film = storedData;
    }
  };
  const deleteStorage = () => {
    let storedData = window.localStorage.film.split(",");
    console.log(storedData);
    let newData = storedData.filter((id) => id != film.id);
    window.localStorage.film = newData;
  };

  return (
    <div className="card">
      <img
        src={
          film.poster_path
            ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
            : "./poster.jpg"
        }
        alt={` ${film.original_title}`}
      />

      <h2>{film.original_title}</h2>
      {film.release_date ? (
        <h5> date de sortie: {dateFormater(film.release_date)} </h5>
      ) : null}
      <h3>
        {film.vote_average.toFixed(1)}/10<span className="">⭐</span>
      </h3>

      <ul>
        {film.genre_ids
          ? genreFinder()
          : film.genres.map((genre, index) => (
              <li key={index}>{genre.name}</li>
            ))}
      </ul>
      <h3>Synopsis</h3>
      <p>
        Une tueuse indépendante, dont le nom de code est Banshee, tombe dans une
        embuscade tendue par Anthony Greene, un puissant mercenaire qui a tué
        son père et qui cherche maintenant à éliminer Caleb, son ancien mentor.
        Banshee part à la recherche de Caleb.
      </p>
      {film.genre_ids ? (
        <button className="btn" onClick={() => addStorage(film.id)}>
          Ajouter aux coups de coeur
        </button>
      ) : (
        <button
          className="btn"
          onClick={() => {
            deleteStorage();
            window.location.reload();
          }}
        >
          Supprimer de la liste
        </button>
      )}
    </div>
  );
};

export default Cards;
