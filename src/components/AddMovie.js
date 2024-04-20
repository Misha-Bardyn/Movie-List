import React from 'react'

function AddMovie(props) {

const {newMovie, newMovieData, addNewMovieToList, closeMovieDetails } = props

    return (
        <div style={{ backgroundColor: 'gray', display: 'flex', }}>
            <label>
                Title:
                <input type="text" value={newMovie.title} onChange={(e) => newMovieData(e, 'title')} />
            </label>
            <label>
                Description:
                <textarea value={newMovie.description} onChange={(e) => newMovieData(e, 'description')} />
            </label>
            <label>
                Rating:
                <input type="number" value={newMovie.rating} onChange={(e) => newMovieData(e, 'rating')} />
            </label>
            <label>
                Release date:
                <input type="date" value={newMovie.release_date} onChange={(e) => newMovieData(e, 'release_date')} />
            </label>
            <label>
                Actors:
                <input type="text" value={newMovie.actors.join(', ')} onChange={(e) => newMovieData(e, 'actors')} />
            </label>
            <label>
                Director:
                <input type="text" value={newMovie.director} onChange={(e) => newMovieData(e, 'director')} />
            </label>
            <label>
                Genre:
                <input type="text" value={newMovie.genre.join(', ')} onChange={(e) => newMovieData(e, 'genre')} />
            </label>
            <label>
                Image (URL):
                <input type="text" value={newMovie.image} onChange={(e) => newMovieData(e, 'image')} />
            </label>
            <button onClick={addNewMovieToList}>Add</button>
            <button onClick={closeMovieDetails}>Cancel</button>
        </div>
    )
}

export default AddMovie
