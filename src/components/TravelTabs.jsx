import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TravelAccordion from "./TravelAccordion";
import Comment from "./Comment";

export default function TravelTabs() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="my-3"
      fill
    >
      <Tab eventKey="home" title="Отзывы">
        <Comment />
      </Tab>
      <Tab eventKey="profile" title="Ответы на вопросы">
        <TravelAccordion />
      </Tab>
      <Tab eventKey="longer-tab" title="Участники">
        Участники
      </Tab>
      <Tab eventKey="contact" title="Другая информация">
        Другая информация
      </Tab>
    </Tabs>
  );
}
