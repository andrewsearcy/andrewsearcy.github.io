import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Redirect } from 'react-router-dom'

const FormikCloudForm = () => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      message: ''
    }}
    onSubmit={values => {
      fetch('https://api.formik.com/submit/portfolio-site-form/portfolio-site-form', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    }}
    render={() => (
      <Form className='form'>
        <label for="name"></label>
        <Field name="name" className="input" />
      
        <label for="email"></label>
        <Field name="email" className="input" />

        <label for="message" ></label>
        <Field name="message" className="textarea"/>
      
        <button onClick='/' type="submit">Submit</button>
      </Form>
    )}
  />
);

export default FormikCloudForm;
