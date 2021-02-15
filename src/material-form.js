import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default function Form() {
  return (
    <div>
      Choose options given below:
      <br />
      <Checkbox /> <lable value="mango">Mango</lable>
      <Checkbox /> <lable value="Apple">Apple</lable>
      <Checkbox /> <lable value="orange">Orange</lable>
      <div className="dropdown">
        Choose your Age :
        <select>
          <option> 15</option>
          <option> 16</option>
          <option> 17</option>
          <option> 18</option>
        </select>
      </div>
      <div className="radio">
        <FormControl component="fieldset">
          <br />
          <lable>Choose any one :</lable>
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
      </div>
    </div>
  );
}
