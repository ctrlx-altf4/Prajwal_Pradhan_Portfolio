import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label,} from 'reactstrap';
import portfolioInput from '../../components/form/portfolioInput'
import PortfolioDate from '../form/portfolioDate';

const validateInputs =values=>{
  const errors = {};
  const {startDate,endDate}= values;

  Object.entries(values).forEach(([key,value])=>{
      if(!values[key] && (values[key]==='startDate' || values[key]==='endDate')){
        errors[key] = `${key} is Required!`
      }
  })

  if(startDate && endDate && (endDate<startDate)){
    errors.endDate ="Starting and End Date conflict"
  }

 return errors;
}
const INITIAL_VALUES = {
                          title:'',
                          company:'',
                          location:'',
                          position:'',
                          description:'',
                          startDate:'',
                          endDate:''
                        }



const PortfolioNewForm =props => (
  <div>
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validateInputs}
      onSubmit={props.onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
            <Field
              label="Title" 
              type="text" 
              name="title" 
              component={portfolioInput}
            />
              <Field
              label="Company" 
              type="text" 
              name="company" 
              component={portfolioInput}
            />
              <Field
              label="Location" 
              type="text" 
              name="location" 
              component={portfolioInput}
            />
            <Field
              label="Position" 
              type="text" 
              name="position" 
              component={portfolioInput}
            />
              <Field
              label="Description" 
              type="text" 
              name="description" 
              component={portfolioInput}
            />
             <Field
              label="Start Date" 
              name="startDate" 
              component={PortfolioDate}
            />
             <Field
              label="End Date" 
              name="endDate" 
              component={PortfolioDate}
              canBeHidden ={true}
            />       
          <Button color="success" size="lg" type="submit" disabled={isSubmitting}>
            Create
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);
export default PortfolioNewForm;