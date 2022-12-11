import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TravelAccordion from "./TravelAccordion";
import Comment from "./Comment";

export default function TravelTabs() {
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
        Участники
      </Tab>
      <Tab eventKey="other" title="Другая информация">
        Другая информация
      </Tab>
    </Tabs>
  );
}
