import React from 'react';

function CarteCinema({ title, description, posterURL, rating }) {
  return (
    <div style={{ width: '18rem', border: '1px solid #ccc', padding: '10px' }}>
      <img 
        src={posterURL} 
        alt={`Affiche du film ${title}`} 
        style={{ width: '100%', height: 'auto' }}
      />
      <h2>{title}</h2>
      <p>{description}</p>
      {rating && <p><strong>Note :</strong> ⭐ {rating}/5</p>}
      <button>Voir les détails</button>
    </div>
  );
}


export default CarteCinema;

