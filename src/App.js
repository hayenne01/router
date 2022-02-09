import { useState } from "react";
import "./App.css";
import AddMovie from "./components/AddMovie/AddMovie";
import Footer from "./components/Footer/Footer";
import MovieList from "./components/MovieList/MovieList";
import FilterRating from "./components/Navbar/FilterRating";
import Navbar from "./components/Navbar/Navbar";
import { moviesData } from "./constants/Data";
import { Route, Routes } from "react-router-dom";
import Details from "./components/Details";
function App() {
  const [movies, setMovies] = useState(moviesData);
  const [text, setText] = useState("");
  const [rate, setRate] = useState(0);
  const handleAdd = (movie) => {
    setMovies([...movies, movie]);
  };
  const deletMovie = (id) => {
    console.log(id);
    setMovies(movies.filter((el) => el.id != id));
  };
  return (
    <div>
      <Navbar setText={setText} />
      <FilterRating setRate={setRate} rate={rate} />
      <AddMovie handleAdd={handleAdd} />
      <Routes>
        <Route
          path="/"
          element={
            <MovieList
              movies={movies}
              text={text}
              rate={rate}
              deletMovie={deletMovie}
            />
          }
        />
        <Route path="/Details/:id" element={<Details />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
