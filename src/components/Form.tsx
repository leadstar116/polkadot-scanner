import React from "react";
import * as Yup from "yup";
import { Formik, Form as FormikForm } from "formik";
import {
  FormPropType,
  IFormValues,
  TextInputPropType,
} from "../interfaces/form.interface";
import { TextInput } from "./TextInput";
import styled from "styled-components";
import { defaultFormValues } from "../constants/constants";

const inputFields: TextInputPropType[] = [
  {
    label: "Start Block",
    name: "startBlock",
  },
  {
    label: "End Block",
    name: "endBlock",
  },
  {
    label: "Endpoint",
    name: "endpoint",
  },
];

const validationSchema = Yup.object({
  startBlock: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  endBlock: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  endpoint: Yup.string().required("Required"),
});

export const Form = (props: FormPropType) => {
  return (
    <Formik
      initialValues={defaultFormValues}
      validationSchema={validationSchema}
      onSubmit={(values: IFormValues, { setSubmitting }) => {
        props.onSubmit(values);
        setSubmitting(false);
      }}
    >
      <FormikForm>
        {inputFields.map((field, index) => (
          <TextInput {...field} key={index} />
        ))}
        <SubmitButton type="submit">Scan</SubmitButton>
      </FormikForm>
    </Formik>
  );
};

const SubmitButton = styled.button`
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  border-radius: 10px;
  background-color: #4a5568;
  border: none;
  color: white;
  cursor: pointer;
  margin: 10px auto;
`;
