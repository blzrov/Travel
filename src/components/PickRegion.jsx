import React from "react";

import Form from "react-bootstrap/Form";

export default function PickRegion(props) {
  const regions = require("../files/regions.json");

  return (
    <Form.Select aria-label="Default select example">
      {regions.map((e) => {
        return (
          <option key={e.fias_id} value={e.fias_id}>
            {e.name_with_type}
          </option>
        );
      })}
    </Form.Select>
  );
}
