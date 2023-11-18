import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../_atoms/input';
import Button from '../_atoms/Button';

const Forma = () => {
  const initialValues = {
    name: "",
    surname: "",
    email: "",
    password: "", 
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("First Name cannot be empty"),
    surname: Yup.string().required("Last Name cannot be empty"),
    email: Yup.string().email("Looks like this is not an email").required("Email cannot be empty"),
    password: Yup.string().required("Password cannot be empty"), 
  })

  function handleSubmit(values: any) {
   
  }

  return (
    <div className='FormWrap'>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {(props) => (
          <Form>
            <div className='field'>
              <Input className="placeholder-style" width={"460px"} height='56px' type='text' onChange={props.handleChange} onBlur={props.handleBlur} id='name' name='name' value={props.values.name} placeHolder="First Name"  />
              {props.errors.name && props.touched.name && (
                <p className='nameErr'>{props.errors.name}</p>
              )}
            </div>

            <div className='field'> 
              <Input  className="placeholder-style" width={"460px"} height='56px' type='text' onChange={props.handleChange} onBlur={props.handleBlur} id='surname' name='surname' value={props.values.surname}  placeHolder="Last Name" />
              {props.errors.surname && props.touched.surname && (
                <p className='nameErr'>{props.errors.surname}</p>
              )}
            </div>

            <div className='field'>
              <Input className="placeholder-style" width={"460px"} height='56px' type="email" onChange={props.handleChange} onBlur={props.handleBlur} id='email' name='email' value={props.values.email} placeHolder="Email Address" />
              {props.errors.email && props.touched.email && (
                <p className='nameErr'>{props.errors.email}</p>
              )}
            </div>

            <div className='field'>
              <Input className="placeholder-style" width={"460px"} height='56px' type='password' onChange={props.handleChange} onBlur={props.handleBlur} id='password' name='password' value={props.values.password} placeHolder="Password"/>
              {props.errors.password && props.touched.password && (
                <p className='nameErr'>{props.errors.password}</p>
              )}
            </div>

            <Button width="460px" height="56px" backgroundColor="#38CC8B" value="CLAIM YOUR FREE TRIAL" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Forma;