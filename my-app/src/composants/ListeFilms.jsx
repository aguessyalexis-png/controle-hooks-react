import React from 'react';
import CarteCinema from './CarteCinema'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function ListeFilms({ films = [] }) {
  if (films.length === 0) {
    return (
      <div className="container-fluid min-vh-100 text-center d-flex align-items-center justify-content-center" 
           style={{ backgroundColor: '#0f172a', color: '#94a3b8' }}>
        <p className="lead">Aucun film ne correspond à vos critères.</p>
      </div>
    );
  }

  return (
    /* Fond cinéma d'action : Dégradé radial sombre allant du bleu nuit profond au noir carbone */
    <div className="container-fluid py-5 min-vh-100" 
         style={{ 
           background: 'radial-gradient(circle, #1e1b4b 0%, #0f172a 70%, #020617 100%)',
           color: '#f8fafc' 
         }}>
      
      <div className="container">
        {/* Titre stylisé Action/Cinéma avec une lueur discrète et un accent de couleur */}
        <h1 className="text-center mb-5 fw-extrabold text-uppercase tracking-wider" 
            style={{ 
              fontSize: '2.5rem',
              letterSpacing: '2px',
              textShadow: '0px 0px 15px rgba(99, 102, 241, 0.4)',
              color: '#ffffff'
            }}>
          🎬 Liste de mes <span style={{ color: '#6366f1' }}>films préférés</span>
        </h1>
        
        <div className="row justify-content-center">
          {films.map((film, index) => (
            <div key={film.id || index} className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
              {/* Conteneur de carte à effet lueur pour s'intégrer au thème sombre */}
              <div style={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                borderRadius: '12px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(99, 102, 241, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <CarteCinema 
                  key={film.id}
                  id={film.id}  // 👈 Ne pas oublier de passer l'identifiant ici ! 
                  title={film.title}
                  description={film.description}
                  posterURL={film.posterURL}
                  rating={film.rating}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListeFilms;
