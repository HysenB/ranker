
import React from "react";
import { FormRadioInput } from "./input/form-radio-input";
import { FormSelectInput } from "./input/form-select-input";
import { FormInput } from "./input/form-input";
import { UseFormReturn } from "react-hook-form";
import { FormCheckboxInput } from "./input/form-checkbox-input";
type FormData = Record<string, string>;
type FormDialogFieldsType<T extends FormData> = {
  fields: any;
  form: UseFormReturn<T>;
};

export const FormDialogFields = <T extends FormData>({
  fields,
  form,
}: FormDialogFieldsType<T>) => {
  return (
    <>
      {fields.map((_field: any, idx: number) => {
        switch (_field?.type) {
          case "radio":
            return <FormRadioInput key={idx} form={form} _field={_field} />;
          case "select":
            return <FormSelectInput key={idx} form={form} _field={_field} />;
          case "checkbox":
            return <FormCheckboxInput key={idx} form={form} _field={_field} />;
          default:
            return <FormInput key={idx} form={form} _field={_field} />;
        }
      })}
    </>
  );
};