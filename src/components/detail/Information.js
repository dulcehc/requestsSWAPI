import React from "react";

const renderFilms = (films) => {
  return (
    <tr key="film">
      <td key="text-film">Films: </td>
      <td key="data-film">
        <ul>
          {
            films.sort((a, b) => a.id > b.id ? 1 : -1)
            .map((film => (
              <li key={film.id}>{`Episode ${film.id} - ${film.title}`}</li>
            )))
          }
        </ul>
      </td>
    </tr>
  );
}

const Information = ({gender, home, specie, films}) => {
  return (
    <div className="Information">
      <table className="Information__table">
        <tbody>
          <tr key="gender">
            <td key="text-gender">Gender: </td>
            <td key="data-gender">{gender}</td>
          </tr>
          <tr key="home">
            <td key="text-home">Home: </td>
            <td key="data-home">{home}</td>
          </tr>
          <tr key="specie">
            <td key="text-specie">Specie: </td>
            <td key="data-specie">{specie}</td>
          </tr>
          {films && renderFilms(films)}
        </tbody>
      </table>
    </div>
  );
};

export default Information;