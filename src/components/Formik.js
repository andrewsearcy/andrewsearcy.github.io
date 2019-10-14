import React from 'react'
import { Formik, Field, Form } from 'formik'

const FormikCloudForm = () => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      message: ''
    }}
    onSubmit={values => {
      fetch(
        'https://api.formik.com/submit/portfolio-site-form/we-should-chat',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        }
      )
    }}
    render={() => (
      <Form className='form'>
        <Field placeholder='Name' name='name' />

        <Field placeholder='Email' name='email' />

        <Field component='textarea' className='textarea' placeholder='Message' name='message' />

        <button type='submit'>Submit</button>
      </Form>
    )}
  />
)

export default FormikCloudForm
