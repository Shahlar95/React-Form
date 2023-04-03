import React from 'react';
import './Suminfo.css'
const SumInfo = () => {
  const formData = JSON.parse(localStorage.getItem("formData"));
  console.log(formData)
  return (
    <div className='info-div'>
      <h2>Form Information</h2>
      <div className='form-suminfo'>
      <p>name: {formData.name}</p>
      <p>surname: {formData.surname}</p>
      <p>email: {formData.email}</p>
      <p>number: {formData.number}</p>
      <p>date: {formData.date}</p>
      <p>adress: {formData.adress}</p>
      </div>
    </div>
  )
}

export default SumInfo