import React from 'react'
import Enterform1 from '../enterform1/Enterform';
import Enterform2 from '../enterform2/Enterform2';
import {Enterform3} from '../enterform3/Enterform3';

//useslector problem 

export const Formorder = ({orderKey}) => {
  switch (orderKey) {
    case 1:
        return <Enterform1/>
    case 2: 
    return <Enterform2/>
    case 3:
        return <Enterform3/>
    default:
        return <Enterform1/>
       
  }
}
