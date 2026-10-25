import React, { useState } from 'react';
import ListeFilms from './composants/ListeFilms'; // Composant d'accueil
import Filtre from './composants/Filtre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetails from './composants/MovieDetails'; // Nouveau composant qui affiche lorsq'on clique sur un film
import mesFilms from './composants/MesFilms'
//import 'bootstrap/dist/css/css.min.css';


function App() {
  const [films, setFilms] = useState(mesFilms)
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
    // 1. Le Router englobe l'ensemble pour activer la gestion de l'URL
    <Router>
      <Routes>
        {/* ROUTE 1 : PAGE D'ACCUEIL (Quand l'URL est "/") */}
        <Route
          path="/"
          element={
            <div className="container py-5">
              <h1 className="text-center mb-5 text-primary fw-bold">
                🎬 Ma Cinémathèque Préférée
              </h1>

              {/* Filtres de recherche */}
              <Filtre
                filterTitle={filtreTitle}
                setFilterTitle={setFilterTitle}
                filterRating={filterRating}
                setFilterRating={setFilterRating}
              />

              {/* Formulaire d'Ajout (Design Bootstrap) */}
              {/* 🔹 Amélioration esthétique : Style "Glassmorphism" (verre fumé transparent) et textes en blanc */}
              {/* ☀️ Ajustement clarté : Augmentation de la luminosité du fond (rgba blanc/bleu) et ajout d'une bordure néon cyan */}
              <div
                className="card p-4 my-5 shadow-lg mx-auto border-0 text-white"
                style={{
                  maxWidth: "600px",
                  /* 🔹 Fond semi-transparent ardoise et effet de flou en arrière-plan pour fusionner avec le dégradé cinéma */
                  /* ☀️ Fond éclairci et plus vibrant pour maximiser la lisibilité */
                  background:
                    "linear-gradient(135deg, rgba(30, 41, 59, 0.85) 0%, rgba(15, 23, 42, 0.9) 100%)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  borderRadius: "20px",
                  /* 🔹 Fine lueur sur la bordure supérieure pour détacher le bloc du fond sombre */
                  /* ☀️ Bordure néon cyan/indigo pour un effet technologique et très propre */
                  border: "1px solid rgba(6, 182, 212, 0.3)",
                  boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.15)",
                }}
              >
                <h3 className="card-title text-center mb-4 fw-bold tracking-wide">
                    Ajouter un{" "}
                  <span
                    style={{
                      color: "#06b6d4",
                      textShadow: "0 0 12px rgba(6, 182, 212, 0.4)",
                    }}
                  >
                    nouveau film
                  </span>
                </h3>

                <form onSubmit={handleAddMovie} className="row g-3">
                  <div className="col-12">
                    <input
                      type="text"
                      name="title"
                      className="form-control text-white"
                      placeholder="Titre du film"
                      value={form.title}
                      onChange={handleInputChange}
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.07)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        padding: "12px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="description"
                      className="form-control text-white"
                      placeholder="Description"
                      rows="2"
                      value={form.description}
                      onChange={handleInputChange}
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.07)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        padding: "12px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="url"
                      name="posterURL"
                      className="form-control text-white"
                      placeholder="URL de l'image (Poster)"
                      value={form.posterURL}
                      onChange={handleInputChange}
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.07)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        padding: "12px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="col-md-6 d-flex align-items-center gap-2">
                    <label
                      className="form-label mb-0 text-nowrap"
                      style={{ color: "#e2e8f0", fontWeight: "500" }}
                    >
                      Note :
                    </label>
                    <select
                      name="rating"
                      className="form-select text-white"
                      value={form.rating}
                      onChange={handleInputChange}
                      style={{
                        backgroundColor: "rgba(15, 23, 42, 0.8)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        padding: "10px",
                        borderRadius: "10px",
                        cursor: "pointer",
                      }}
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option
                          key={num}
                          value={num}
                          style={{ backgroundColor: "#0f172a", color: "#fff" }}
                        >
                          {num}/5
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6 text-end">
                    <button
                      type="submit"
                      className="btn fw-bold text-dark w-100"
                      style={{
                        background:
                          "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
                        padding: "10px",
                        borderRadius: "10px",
                        boxShadow: "0 4px 20px rgba(6, 182, 212, 0.4)",
                        transition: "all 0.2s ease-in-out",
                        border: "none",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = "brightness(1.1)";
                        e.currentTarget.style.transform = "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = "brightness(1)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      Ajouter le film
                    </button>
                  </div>
                </form>
              </div>

              {/* Affichage de la Galerie de Films */}
              <ListeFilms films={filtreDesFilms} />
            </div>
          }
        />

        {/* ROUTE 2 : PAGE DE DÉTAILS DYNAMIQUE (Ex: "/film/inception") */}
        {/* On lui passe la liste brute complète ("films") pour qu'elle puisse chercher le bon film par son ID */}
        <Route
          path="/film/:id"
          element={<MovieDetails listeDeTousLesFilms={films} />}
        />
      </Routes>
    </Router>
  );

}

export default App;
