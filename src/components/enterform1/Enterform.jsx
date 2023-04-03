import React from 'react'
import {Formik,Form,Field} from "formik";
import { form1Val } from '../../validation'; 
import Nextprev from '../Nextprev/Nextprev';
import {useDispatch} from 'react-redux';
import {changeStep} from '../redux/nextBackSlice'
import cn from "classnames"
import "./Enterform.css"

const Enterform = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    const formData = JSON.parse(localStorage.getItem("formData")) || {};
    const updatedFormData = { ...formData, ...values };
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
    console.log(dispatch(changeStep(2)));
  };
  return (
    <div className='enter-div'>
        <Formik
        
        initialValues={{name:"",surname:""}}
        validationSchema={form1Val}
        onSubmit={handleSubmit}
        >
            {({errors,touched}) => (
        <Form>
            <p className='input-headers'>name<span className='star'>*</span></p>
            
        <Field name = "name" className={`input-name ${cn({'danger':errors.name && touched.name})}`} type="text" />
        <p className='input-headers'>surname<span className='star'>*</span></p>
        
        <Field name = "surname" className={`input-surname ${cn({'danger':errors.surname && touched.surname})}`} type="text" />
        
        <Nextprev nextType='submit' />
        
        </Form>
           )}
        </Formik>
        
    </div>
  )
}

export default Enterform