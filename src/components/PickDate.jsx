import React from "react";

import "dayjs/locale/ru";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Organizers({ value, onChange }) {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"ru"}>
        <DatePicker
          value={value}
          onChange={(newValue) => {
            onChange(newValue);
          }}
          renderInput={(params) => (
            <TextField fullWidth size="small" {...params} />
          )}
        />
      </LocalizationProvider>
    </div>
  );
}
