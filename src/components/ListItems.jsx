import ListGroup from "react-bootstrap/ListGroup";

export default function ListItems() {
  return (
    <ListGroup>
      <ListGroup.Item action variant="secondary">
        Вода 2л
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        Лыжи
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        Коньки
      </ListGroup.Item>
      {/* <ListGroup.Item variant="success">Success</ListGroup.Item> */}
    </ListGroup>
  );
}
