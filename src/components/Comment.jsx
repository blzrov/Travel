import Card from "react-bootstrap/Card";

export default function Comment() {
  return (
    <Card>
      <Card.Header>25.11.2021</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>Иванов Борис</p>
          <footer className="blockquote-footer">Комментарий</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
