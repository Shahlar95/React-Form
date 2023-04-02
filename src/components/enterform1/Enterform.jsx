import React from 'react'
import {Formik,Form,Field} from "formik";
import { form1Val } from '../../validation'; 
import Nextprev from '../Nextprev/Nextprev';
import {useDispatch} from 'react-redux';
import {changeStep} from '../redux/nextBackSlice'
import cn from "classnames"
import "./Enterform.css"

const Enterform = () => {
  const dispatch = useDispatch()
  return (
    <div className='enter-div'>
        <Formik
        initialValues={{name:"",surname:""}}
        validationSchema={form1Val}
        onSubmit={(val)=>{
          console.log(dispatch(changeStep(2)));
        }}
        >
            {({errors,touched}) => (
        <Form>
            <p className='input-headers'>name<span className='star'>*</span></p>
            
        <Field name = "name" className={`input-name${cn({'danger':errors.name && touched.name})}`} type="text" />
        <p className='input-headers'>surname<span className='star'>*</span></p>
        
        <Field name = "surname" className={`input-surname${cn({'danger':errors.name && touched.name})}`} type="text" />
        
        <Nextprev nextType='submit' />
        </Form>
           )}
        </Formik>
        
    </div>
  )
}

export default Enterform