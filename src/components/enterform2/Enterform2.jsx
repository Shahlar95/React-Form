import React from 'react';
import { Formik, Form, Field } from 'formik';
import { form2Val } from '../../validation'; 
import Nextprev from '../Nextprev/Nextprev';
import { useDispatch } from 'react-redux';
import { changeStep } from '../redux/nextBackSlice';
import cn from 'classnames';
import './Enterform2.css';

const Enterform2 = () => {
  const dispatch = useDispatch();

  const handleNext = (values) => {
    const formData = JSON.parse(localStorage.getItem('formData')) || {};
    const updatedFormData = { ...formData, ...values };
    localStorage.setItem('formData', JSON.stringify(updatedFormData));
    console.log(dispatch(changeStep(3)));
  };

  const handleBack = () => {
    console.log(dispatch(changeStep(1)));
  };

  return (
    <div className='enter-div'>
      <Formik
        initialValues={{ email: '', number: '' }}
        validationSchema={form2Val}
        onSubmit={handleNext}
        onReset={handleBack}
      >
        {({ errors, touched }) => (
          <Form>
            <p className='input-headers'>e-mail<span className='star'>*</span></p>
            <Field
              name='email'
              className={`input-mail ${cn({'danger': errors.email && touched.email})}`}
              type='mail'
            />
            <p className='input-headers'>mobile number<span className='star'>*</span></p>
            <Field
              name='number'
              className={`input-mobile ${cn({'danger': errors.number && touched.number})}`}
              type='mobile'
            />
            <Nextprev nextType='submit' backType='reset' />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Enterform2;
