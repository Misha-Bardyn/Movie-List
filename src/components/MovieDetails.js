import React from 'react'

function MovieDetails(props) {
  const { selectedMovie, closeMovieDetails } = props
  return (
    <div style={{ marginTop: '30px' }}>
      <h2>{selectedMovie.title}</h2>
      <img src={selectedMovie.image}
        alt={selectedMovie.title}
        style={{ width: '200px', height: '290px', float: 'left', marginRight: '20px' }} />
      <div>
        <p>Description: {selectedMovie.description}</p>
        <p>Actors: {selectedMovie.actors.join(', ')}</p>
        <p>Director: {selectedMovie.director}</p>
        <p>Genre: {selectedMovie.genre.join(', ')}</p>
        <p>Rating: {selectedMovie.rating}</p>
        <button onClick={closeMovieDetails}>Close</button>
      </div>
    </div>
  )
}

export default MovieDetails
