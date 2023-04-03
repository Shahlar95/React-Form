import React from "react";
import { useSelector } from "react-redux";
import Enterform1 from "../enterform1/Enterform";
import Enterform2 from "../enterform2/Enterform2";
import Enterform3 from "../enterform3/Enterform3";
import SumInfo from '../suminfo/Suminfo'


//useslector problem

export const Formorder = () => {
  const nowStep = useSelector((state) => state.formoperation.step);
  switch (nowStep) {
    case 1:
      return <Enterform1 />;
    case 2:
      return <Enterform2 />;
    case 3:
      return <Enterform3 />;
      case 4:
      return <SumInfo/>
    default:
      return <Enterform1 />;
  }
};
