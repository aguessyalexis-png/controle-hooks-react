import React from 'react';

export default function filtre({ filterTitle, setFilterTitle, filterRating, setFilterRating }) {
  return (
    <div className="container my-4">
      <div className="row justify-content-center g-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="🔍 Rechercher par titre..."
            value={filterTitle}
            onChange={(e) => setFilterTitle(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={filterRating}
            onChange={(e) => setFilterRating(Number(e.target.value))}
          >
            <option value={0}>🎬 Toutes les notes</option>
            <option value={1}>⭐ 1+ et plus</option>
            <option value={2}>⭐⭐ 2+ et plus</option>
            <option value={3}>⭐⭐⭐ 3+ et plus</option>
            <option value={4}>⭐⭐⭐⭐ 4+ et plus</option>
            <option value={5}>⭐⭐⭐⭐⭐ 5/5</option>
          </select>
        </div>
      </div>
    </div>
  );
}
