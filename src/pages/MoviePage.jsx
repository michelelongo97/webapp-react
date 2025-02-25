import axios from "../api/axios";
import { useParams, useNavigate } from "react-router";
import { useEffect } from "react";

export default function MoviePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchMovie = () => {
    axios
      .get(`/movies/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/404");
        }
      });
  };

  useEffect(fetchMovie, [id, navigate]);

  return <h1>Pagina del film</h1>;
}
