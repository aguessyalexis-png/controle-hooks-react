import React from 'react';
import CarteCinema from './CarteCinema'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function ListeFilms({ films = [] }) {
  if (films.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <p className="text-muted">Aucun film ne correspond à vos critères.</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Liste de mes films préférés</h1>
      <div className="row justify-content-center">
        {films.map((film, index) => (
          <div key={film.id || index} className="col-md-4 mb-4 d-flex justify-content-center">
            <CarteCinema 
              title={film.title}
              description={film.description}
              posterURL={film.posterURL}
              rating={film.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListeFilms;
