import React from "react";
import { useField } from "formik";
import { TextInputPropType } from "../interfaces/form.interface";
import styled from "styled-components";

export const TextInput = (props: TextInputPropType) => {
  const [field, meta] = useField(props);

  return (
    <TextInputContainer>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </TextInputContainer>
  );
};

const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 14px;

  label {
    margin-bottom: 5px;
  }

  input {
    height: 24px;
    border-radius: 8px;
    background-color: #edf2f7;
    padding: 5px 10px;
    border-width: thin;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 5px;
`;
