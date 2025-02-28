import { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Button from "./ui/Button";

const initialFormData = {
  name: "",
  text: "",
  vote: 0,
};

export default function FormAddReview({ onFormSubmitted }) {
  const [formData, setFormData] = useState(initialFormData);
  const { id } = useParams();

  const handleField = (fieldName, fieldValue) => {
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [fieldName]: fieldValue,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3000/movies/${id}/reviews`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setFormData(initialFormData);
        onFormSubmitted();
      });
  };

  return (
    <form className="text-center" onSubmit={handleSubmit}>
      <div>
        <label className="form-label p-1" htmlFor="name">
          Nome
        </label>
        <input
          className="form-control"
          id="name"
          name="name"
          type="text"
          placeholder="Insersci il tuo nome"
          value={formData.name}
          onChange={(e) => handleField("name", e.target.value)}
          required
        />
      </div>
      <div>
        <label className="form-label p-1" htmlFor="vote">
          Voto
        </label>
        <input
          className="form-control"
          id="vote"
          name="vote"
          type="number"
          placeholder="Insersci il voto"
          value={formData.vote}
          onChange={(e) => handleField("vote", e.target.value)}
          min={0}
          max={5}
          required
        />
      </div>
      <div>
        <label htmlFor="name" className="form-label p-1">
          Recensione
        </label>
        <textarea
          className="form-control"
          id="text"
          name="text"
          rows={5}
          placeholder="Insersci la recensione"
          value={formData.text}
          onChange={(e) => handleField("text", e.target.value)}
          required
        ></textarea>
      </div>
      <Button className="m-3" type="submit">
        Invia
      </Button>
    </form>
  );
}
