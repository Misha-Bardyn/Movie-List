import React, { useEffect, useState } from 'react';
import './App.css';
import MovieDetails from './components/MovieDetails';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';

const App = () => {
  const [searchMovies, setSearchMovies] = useState(''); // пошук фільмів по назві (<App/>)
  const [moviesList, setMoviesList] = useState([]); // фільми(<MovieList/>)
  const [selectedMovie, setSelectedMovie] = useState(null); //<MovieDetails/>
  const [isAddingMovie, setIsAddingMovie] = useState(false); // додати новий фільм
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    rating: 0,
    release_date: '',
    genre: [],
    actors: [],
    director: '',
    image: ''
  }); // новий фільм (<AddMovie/>)
  //Завантаження даних фільмів з локального JSON файлу (<App/>)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("db.json", {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setMoviesList(jsonData.movies)
      } catch (err) {
        console.error('Fetch error:', err)
      }
    };

    fetchData();
  }, []);

  // Видалити фільм (<MovieList/>)
  const movieDelete = (id) => {
    const updatedMovies = moviesList.filter(movie => movie.id !== id);
    setMoviesList(updatedMovies);
  };
  // Пошук фільмів за назвою (<App/>)
  const movieSearch = (e) => {
    setSearchMovies(e.target.value);
    const newFilteredMovies = moviesList.filter(movie =>
      movie.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setMoviesList(newFilteredMovies);
  };
  // Показати вікно з деталями фільму (<MovieList/>)
  const showMovieDetails = (movie) => {
    setSelectedMovie(movie);
  };
  // Закрити деталі фільму (<AddMovie/>) (<MovieDetails/>)
  const closeMovieDetails = () => {
    setSelectedMovie(null);
    setIsAddingMovie(false);
    setNewMovie({
      title: '',
      description: '',
      rating: 0,
      release_date: '',
      genre: [],
      actors: [],
      director: '',
      image: ''
    });
  };
  // Показати вікно з формами до нового фільму (<App/>)
  const addNewMovie = () => {
    setIsAddingMovie(true);
  };
  // Додати новий фільм (<AddMovie/>)
  const newMovieData = (e, field) => {
    let value = e.target.value;

    // Для полів, які є масивами (актори, жанри)
    if (field === 'actors' || field === 'genre') {
      value = value.split(',').map(item => item.trim());
    }
    setNewMovie({
      ...newMovie,
      [field]: value
    });
  };
  // Додаєм новий фільм (<AddMovie/>)
  const addNewMovieToList = () => {
    const updatedMovies = [...moviesList, { ...newMovie, id: Date.now() }];
    setMoviesList(updatedMovies);
    setIsAddingMovie(false);
  };
  return (
    <div>
      <h1>Movie</h1>
      <div style={{
        padding: "10px 0px",
        backgroundColor: 'gray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px'
      }}>
        <input
          type="text"
          placeholder="Search movies by title..."
          value={searchMovies}
          onChange={movieSearch}
        />
        <button onClick={addNewMovie}>
          Add new movie
        </button>
      </div>
      {isAddingMovie && <AddMovie
        newMovie={newMovie}
        newMovieData={newMovieData}
        addNewMovieToList={addNewMovieToList}
        closeMovieDetails={closeMovieDetails} />}
      <MovieList
        moviesList={moviesList}
        showMovieDetails={showMovieDetails}
        movieDelete={movieDelete} />
      {selectedMovie && <MovieDetails
        selectedMovie={selectedMovie}
        closeMovieDetails={closeMovieDetails} />}
    </div>
  );
};

export default App;
