import Button from "./ui/Button";

export default function FormAddReview() {
  return (
    <form className="text-center">
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
          required
        />
      </div>
      <Button className="m-3" type="submit">
        Invia
      </Button>
    </form>
  );
}
