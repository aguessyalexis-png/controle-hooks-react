import React, { useState } from 'react';
import ListeFilms from './composants/ListeFilms';
import Filtre from './composants/Filtre';
//import 'bootstrap/dist/css/css.min.css';


function App() {
  // État principal pour la liste des films
  const [films, setFilms] = useState([
    {
      title: "Inception",
      description: "Un voleur qui s'approprie les secrets d'entreprise à travers l'utilisation de la technologie de partage de rêves.",
      posterURL: "https://via.placeholder.com/300x450.png?text=Inception",
      rating: 5
    },
    {
      title: "Interstellar",
      description: "Une équipe d'explorateurs voyage à travers un trou de ver dans l'espace pour tenter de sauver l'humanité.",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
      rating: 4
    }
  ]);

  // État pour les filtres de recherche
  const [filtreTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  // État pour le formulaire d'ajout de film
  const [form, setForm] = useState({ title: "", description: "", posterURL: "", rating: 1 });

  // Gestion des changements dans le formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Action de soumission du formulaire
  const handleAddMovie = (e) => {
    e.preventDefault();
    if (!form.title || !form.description || !form.posterURL) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    // Ajout du film et réinitialisation du formulaire
    setFilms([...films, { ...form, rating: Number(form.rating) }]);
    setForm({ title: "", description: "", posterURL: "", rating: 1 });
  };

  // Logique de filtrage en temps réel
  const filtreDesFilms = films.filter((film) => {
    const matchTitle = film.title.toLowerCase().includes(filtreTitle.toLowerCase());
    const matchRating = film.rating >= filterRating;
    return matchTitle && matchRating;
  });

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 text-primary fw-bold">🎬 Ma Cinémathèque Préférée</h1>

      <Filtre 
        filterTitle={filtreTitle} 
        setFilterTitle={setFilterTitle}
        filterRating={filterRating} 
        setFilterRating={setFilterRating}
      />

      {/* Formulaire d'Ajout (Design Bootstrap) */}
      <div className="card p-4 my-5 shadow-sm mx-auto" style={{ maxWidth: '600px' }}>
        <h3 className="card-title text-center mb-4">Ajouter un nouveau film</h3>
        <form onSubmit={handleAddMovie} className="row g-3">
          <div className="col-12">
            <input type="text" name="title" className="form-control" placeholder="Titre du film" value={form.title} onChange={handleInputChange} />
          </div>
          <div className="col-12">
            <textarea name="description" className="form-control" placeholder="Description" rows="2" value={form.description} onChange={handleInputChange} />
          </div>
          <div className="col-12">
            <input type="url" name="posterURL" className="form-control" placeholder="URL de l'image (Poster)" value={form.posterURL} onChange={handleInputChange} />
          </div>
          <div className="col-md-6 d-flex align-items-center gap-2">
            <label className="form-label mb-0 text-nowrap">Note :</label>
            <select name="rating" className="form-select" value={form.rating} onChange={handleInputChange}>
              {[1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num}/5</option>)}
            </select>
          </div>
          <div className="col-md-6 text-end">
            <button type="submit" className="btn btn-success w-100">Ajouter le film</button>
          </div>
        </form>
      </div>

      {/* Affichage de la Liste */}
      <ListeFilms films={filtreDesFilms} />
    </div>
  );
}

export default App;
