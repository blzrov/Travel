import Card from "react-bootstrap/Card";

export default function Comment({ reviews }) {
  return (
    <>
      {reviews.length === 0 && (
        <Card className="mb-4">
          <Card.Header> </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p> </p>
              <footer className="blockquote-footer">Отзывов пока нет</footer>
            </blockquote>
          </Card.Body>
        </Card>
      )}
      {reviews.map((e, i) => (
        <Card key={i} className="mb-4">
          <Card.Header>{e.name + " " + e.surname}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p> </p>
              <footer className="blockquote-footer">{e.reviews}</footer>
            </blockquote>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
