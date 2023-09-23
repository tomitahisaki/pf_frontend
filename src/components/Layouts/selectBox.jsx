import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectSmall(props) {
  const [status, setStatus] = React.useState("");

  const handleChange = (event) => {
    const selectedStatus = event.target.value;
    setStatus(selectedStatus);
    props.handleValueChange(selectedStatus);
    console.log(typeof selectedStatus);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Status</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={status}
        label="Status"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={0}>not_started</MenuItem>
        <MenuItem value={10}>in_progress</MenuItem>
        <MenuItem value={20}>done</MenuItem>
      </Select>
    </FormControl>
  );
}
