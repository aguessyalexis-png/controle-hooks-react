import React from 'react';
// 1. useParams permet de récupérer la variable ":id" écrite dans l'URL
//    Link permet de créer le bouton pour revenir à l'accueil
import { useParams, Link } from 'react-router-dom';



function MovieDetails({ listeDeTousLesFilms }) {
  // 2. On extrait l'id du film depuis l'URL
  const { id } = useParams();

  // 3. On cherche le film correspondant dans notre liste brute globale
  const film = listeDeTousLesFilms.find((f) => f.id === id);

  // Sécurité : Si l'id dans l'URL ne correspond à aucun film
  if (!film) {
    return (
      <div className="container py-5 text-center" style={{ fontFamily: 'sans-serif' }}>
        <h2 className="text-danger">🎬 Film introuvable</h2>
        <p className="text-muted">Désolé, ce film n'existe pas dans notre cinémathèque.</p>
        <Link to="/" className="btn btn-secondary mt-3">Retour à l'accueil</Link>
      </div>
    );
  }

  return (
    <div className="container py-5" style={{ fontFamily: 'sans-serif' }}>
      
      {/* 4. BOUTON RETOUR : Lien de retour vers la racine "/" (Page d'accueil) */}
      <Link to="/" className="btn btn-outline-secondary mb-4" style={{ textDecoration: 'none', display: 'inline-block', padding: '8px 16px', border: '1px solid #ccc', borderRadius: '4px', color: '#333' }}>
        ⬅️ Retour à la page d'accueil
      </Link>

      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginTop: '20px' }}>
        
        {/* Partie gauche : L'affiche */}
        <div style={{ flex: '1', minWidth: '250px', maxWidth: '350px' }}>
          <img 
            src={film.posterURL} 
            alt={`Affiche de ${film.title}`} 
            style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
          />
          <h3 style={{ marginTop: '15px', color: '#ffc107' }}>⭐ {film.rating}/5</h3>
        </div>

        {/* Partie droite : Description et Bande-annonce intégrée */}
        <div style={{ flex: '2', minWidth: '300px' }}>
          <h1 style={{ color: '#0d6efd', margin: '0 0 10px 0' }}>{film.title}</h1>
          
          <h3 style={{ color: '#6c757d', fontSize: '1.2rem', marginBottom: '10px' }}>Synopsis & Description :</h3>
          {/* Note : On affiche la description longue ici */}
          <div style={{ lineHeight: '1.6', fontSize: '1.1rem', backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '6px', border: '1px solid #dee2e6' }}>
            
            {/* Énumération de la description complète avec ses listes à puces intégrées */}
            <p style={{ whiteSpace: 'pre-line', textAlign: 'left' }}>
              {film.fullDescription || film.description}
            </p>
          </div>

          <h3 style={{ color: '#6c757d', fontSize: '1.2rem', marginTop: '30px', marginBottom: '15px' }}>Bande-annonce officielle :</h3>
          
          {/* Lecteur vidéo YouTube intégré (via iframe) */}
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <iframe
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
              src={film.trailerURL}
              title={`Bande-annonce du film ${film.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
