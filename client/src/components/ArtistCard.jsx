import React from 'react'
import ArtistList from './ArtistList'

function ArtistCard({ id, name, age, imageUrl }) {
  return (
    <div className="artist-card">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <ArtistList artistIdProp={id} />
    </div>
  );
}

export default ArtistCard
