import React from "react";
import DatePicker from "react-datepicker";
import { Button, FormGroup, Label,} from 'reactstrap';

import "react-datepicker/dist/react-datepicker.css";

export default function PortfolioDate(props){

  const [dateValue, setDateValue] = React.useState(new Date());
  const [isHidden, setIsHidden]   = React.useState(false)


  const {label,form: { touched, errors }, field,canBeHidden} = props

  const setFieldValueAndTouched =(date)=>{
    const {setFieldValue, setFieldTouched} = props.form;
    const {name} = props.field;

    setFieldValue(name, date, true);
    setFieldTouched(name,true,true);

  }

  const handleChange = date => {
    setDateValue(date);

    setFieldValueAndTouched(date);
  };

  const toggleHiddenState =date=>{
      setIsHidden(!isHidden);

      setFieldValueAndTouched(date)
  }
  


  return (
    <FormGroup>
      <Label>{label}</Label>
      <div className="input-group">
        {
          !isHidden &&
          <DatePicker
            selected={dateValue}
            onChange={handleChange}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            maxDate={new Date()}
            dropdownMode="select"
          />
        }
        {
          touched[field.name] &&
          errors[field.name] && 
          <div className="error">{errors[field.name]}</div>
        }

        {canBeHidden && !isHidden && <Button onClick={()=>{toggleHiddenState(null)}}>Still Working Here...</Button> }
        { canBeHidden &&
          isHidden && 
          <React.Fragment>
            <span>Still Working Here...</span>
            <Button onClick={()=>toggleHiddenState(dateValue)}>Set Date</Button>
          </React.Fragment>
        }
      </div>
    </FormGroup>
    );
}