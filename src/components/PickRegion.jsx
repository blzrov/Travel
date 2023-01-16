import React from "react";

import Form from "react-bootstrap/Form";

export default function PickRegion({ value, onChange }) {
  const regions = require("../files/regions.json");

  return (
    <Form.Select
      value={value}
      onChange={onChange}
      aria-label="Default select example"
    >
      <option key={0} value={""}>
        {""}
      </option>
      {regions.map((e) => {
        return (
          <option key={e.fias_id} value={e.name_with_type}>
            {e.name_with_type}
          </option>
        );
      })}
    </Form.Select>
  );
}
