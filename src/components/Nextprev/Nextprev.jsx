import React from 'react';
import "./Nextprev.css";



const Nextprev = ({
  onBack,
  onNext,
  backTitle = 'back',
  nextTitle = 'next',
  backType = 'button',
  nextType = 'button'
}) => {
  
  return (
    <div className='nextprev-div'>
      
        <button type={backType} className='btn1' >{backTitle}</button>
        <button type={nextType} className='btn2' >{nextTitle}</button>
    </div>
  )
}

export default Nextprev