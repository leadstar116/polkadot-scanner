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
  startBlock: Yup.number().positive().required("Required"),
  endBlock: Yup.number()
    .positive()
    .required("Required")
    .when(["startBlock"], (startBlock: number) => {
      return Yup.number().min(
        startBlock,
        "End Block should be equal or greater than Start block"
      );
    }),
  endpoint: Yup.string().required("Required"),
});

export const Form = (props: FormPropType) => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        startBlock: "0",
        endBlock: props.latestBlock || "0",
        endpoint: "wss://rpc.polkadot.io",
      }}
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
