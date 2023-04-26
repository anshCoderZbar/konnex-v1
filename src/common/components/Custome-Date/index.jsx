import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { TextField } from "@mui/material";

export const CustomeDate = (props) => {
  const handleDateChange = (date) => {
    const name = props?.name;
    const value = date;
    props.onChange({ name, value });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker
        onChange={handleDateChange}
        value={props.value}
        name={props?.name}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};
