import Button from "./Button";

export default function Card({ image, title, content }) {
  return (
    <div className="bg-danger d-flex col-6">
      <div className="col-6">
        <img className="w-100 h-100" src={image} alt={title} />
      </div>
      <div className="p-4 col-6">
        <h3>{title}</h3>
        <p className="py-5">{content}</p>
        <Button variant="secondary" size="sm">
          Leggi
        </Button>
      </div>
    </div>
  );
}
