import React from "react";
import { Formik, Form, Field } from "formik";
import { form3Val } from "../../validation";
import Nextprev from "../Nextprev/Nextprev";
import { useDispatch } from "react-redux";
import { changeStep } from "../redux/nextBackSlice";
import cn from "classnames";
import "./Enterform3.css";

const Enterform2 = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    const formData = JSON.parse(localStorage.getItem("formData")) || {};
    const updatedFormData = { ...formData, ...values };
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
    console.log(dispatch(changeStep(4)));
    
  };

  const handleBack = () => {
    console.log(dispatch(changeStep(2)));
  };
  return (
    <div className="enter-div">
      <Formik
        initialValues={{ date: "", adress: "" }}
        validationSchema={form3Val}
        onSubmit={handleSubmit}
        onReset={handleBack}
      >
        {({ errors, touched }) => (
          <Form>
            <p className="input-headers">
              birth of date<span className="star">*</span>
            </p>

            <Field
              name="date"
              className={`input-date ${cn({
                danger: errors.date && touched.date,
              })}`}
              type="date"
            />
            <p className="input-headers">
              adress<span className="star">*</span>
            </p>

            <Field
              name="adress"
              className={`input-adress ${cn({
                danger: errors.adress && touched.adress,
              })}`}
              type="adress"
            />

            <Nextprev nextType="submit" backType='reset' />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Enterform2;
