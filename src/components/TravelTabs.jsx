import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TravelAccordion from "./TravelAccordion";
import Comment from "./Comment";
import ListPeople from "./ListPeople";
import ListItems from "./ListItems";

export default function TravelTabs({ travel }) {
  return (
    <Tabs
      defaultActiveKey="comments"
      id="fill-tab-example"
      className="my-3"
      fill
    >
      <Tab eventKey="comments" title="Отзывы">
        <Comment />
      </Tab>
      <Tab eventKey="faq" title="Ответы на вопросы">
        <TravelAccordion />
      </Tab>
      <Tab eventKey="party" title="Участники">
        <ListPeople members={travel.members} />
      </Tab>
      <Tab eventKey="other" title="Взять с собой">
        <ListItems items={travel.items} />
      </Tab>
    </Tabs>
  );
}
