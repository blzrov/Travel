import React from "react";

import Form from "react-bootstrap/Form";

export default function PickRegion({ onChange }) {
  const regions = require("../files/regions.json");

  return (
    <Form.Select
      value={null}
      onChange={onChange}
      aria-label="Default select example"
    >
      <option key={0} value={""}>
        {""}
      </option>
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
