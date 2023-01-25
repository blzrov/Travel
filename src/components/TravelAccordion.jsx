import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function TravelAccordion() {
  const [question, setQuestion] = React.useState("");
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Можно ли в поход пенсионерам?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Нет, к сожалению этот поход слишком экстримальный
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Почему так дешево?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Из затрат только деньги на еду и минимальные сборы
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Form className="mt-3">
        <Form.Group className="mb-2">
          <Form.Label>Остались вопросы?</Form.Label>
          <Form.Control
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </Form.Group>
        <Button
          onClick={() => setQuestion("")}
          variant="primary"
          type="button"
          size="sm"
        >
          Спросить
        </Button>
      </Form>
    </div>
  );
}
