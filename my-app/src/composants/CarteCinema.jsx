import React from 'react';
// 1. Import de Link depuis react-router-dom pour activer la redirection au clic
import { Link } from 'react-router-dom'; 

// 2. Ajout de "id" dans les propriétés (props) pour savoir vers quel film naviguer
function CarteCinema({ id, title, description, posterURL, rating }) {
  return (
    <div style={{ width: '18rem', border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
      
      {/* 3. On enveloppe l'image dans un Link pour qu'elle devienne cliquable */}
      <Link to={`/film/${id}`}>
        <img 
          src={posterURL} 
          alt={`Affiche du film ${title}`} 
          style={{ width: '100%', height: 'auto', borderRadius: '4px', cursor: 'pointer' }}
        />
      </Link>

      <h2>{title}</h2>
      <p>{description}</p>
      {rating && <p><strong>Note :</strong> ⭐ {rating}/5</p>}
      
      {/* 4. On enveloppe également le bouton pour envoyer sur la même page de détails */}
      <Link to={`/film/${id}`}>
        <button style={{ width: '100%', padding: '8px', cursor: 'pointer' }}>
          Voir les détails
        </button>
      </Link>

    </div>
  );
}

export default CarteCinema;
