import React from 'react'

function MovieList(props) {
    const { moviesList, showMovieDetails, movieDelete } = props

    return (
        <div style={{
            padding: "10px 0px",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap'
        }}>
            {moviesList.map(movie => (
                <div key={movie.id}
                    style={{
                        padding: "10px 0px",
                        backgroundColor: 'rgb(215 215 215)',
                        width: '350px',
                        textAlign: 'center'
                    }}>
                    <img src={movie.image} alt={movie.title} style={{ width: '150px', height: '220px' }} />
                    <h2>{movie.title}</h2>
                    <p>Rating:{movie.rating}</p>
                    <p>Release Date:{movie.release_date}</p>
                    <button onClick={() => showMovieDetails(movie)}>Detailed information</button>
                    <button onClick={() => movieDelete(movie.id)}>Remove</button>
                </div>
            ))}
        </div>
    )
}

export default MovieList
