import styled from "styled-components";

export const FieldSet = styled.fieldset`
  border: none;
  margin: 0 0 30px 0;
  padding: 0;
  border-bottom: 1px solid #888;
  border-top: 1px solid #888;

  legend {
    font-weight: bold;
  }
`;

export const Checkboxes = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px 0 20px 0;

  div {
    margin: 0 6px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  input {
    display: none;

    &:checked + label {
      color: black;
      border: 1px solid #888;
    }
  }

  label {
    color: #888;
    cursor: pointer;
    padding: 10px 14px;
    border-radius: 4px;
    border: 1px solid #fff;

    &:hover {
      background-color: #f2f2f2;
    }
  }
`;
