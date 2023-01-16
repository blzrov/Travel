import ListGroup from "react-bootstrap/ListGroup";

export default function ListItems({ items }) {
  return (
    <ListGroup>
      {items.map((e, i) => (
        <ListGroup.Item key={i} action variant="secondary">
          {e}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
