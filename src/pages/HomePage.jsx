import axios from "../api/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios.get("/movies").then((res) => {
      setMovies(res.data);
    });
  };

  useEffect(fetchMovies, []);

  return (
    <>
      <Container>
        <div className="d-flex flex-wrap gap-3">
          {movies.map((movie) => (
            <div key={movie.id} className="w-100">
              <Card
                image={movie.image}
                title={movie.title}
                content={movie.abstract}
                link={`/movies/${movie.id}`}
              />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
