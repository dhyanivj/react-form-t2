import React, { useStyles } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InfoIcon from "@material-ui/icons/Info";
import Tooltip from "@material-ui/core/Tooltip";

export default function Form() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      Choose options given below:
      <Tooltip title="This is exmaple of checkbox. i know this tooltip is little missalign but i'll fix is later on beacuse i'm running out of time :)">
        <InfoIcon />
      </Tooltip>
      <br />
      <Checkbox /> <lable value="mango">Mango</lable>
      <Checkbox /> <lable value="Apple">Apple</lable>
      <Checkbox /> <lable value="orange">Orange</lable>
      <div className="radio">
        <FormControl component="fieldset">
          <br />
          <lable>
            Choose any one :{" "}
            <Tooltip title="this is radio button">
              <InfoIcon />
            </Tooltip>
          </lable>
          <RadioGroup aria-label="gender" name="gender1">
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <br />
        <FormControl>
          <lable>
            Your age :{" "}
            <Tooltip title="choose your age ">
              <InfoIcon />
            </Tooltip>
          </lable>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
