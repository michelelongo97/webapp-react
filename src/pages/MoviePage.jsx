import axios from "../api/axios";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Container from "../components/ui/Container";

export default function MoviePage() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchMovie = () => {
    axios
      .get(`/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/404");
        }
      });
  };

  useEffect(fetchMovie, [id, navigate]);

  return (
    <Container>
      <div className="d-flex bg-danger m-5">
        <div className="col-6">
          <img
            className="w-100"
            src={`http://localhost:3000/movies_cover/${movie.image}`}
            alt={movie.title}
          />
        </div>
        <div className="p-4 col-6">
          <h1>{movie.title}</h1>
          <p className="py-5">{movie.abstract}</p>
        </div>
      </div>
    </Container>
  );
}
