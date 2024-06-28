import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/form";
import { Input } from "../../../../components/ui/input";

export const FormInput = ({ form, _field }: any) => {
  return (
    <FormField
      control={form.control}
      name={`${_field.name}`}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{_field.label}</FormLabel>
          <FormControl>
            <Input
              type={_field?.type}
              placeholder={`${_field.placeholder}`}
              {...field}
              className="border-[#D9D9D9] dark:bg-transparent dark:border-[#3C4248] focus-visible:ring-offset-0 focus-visible:ring-0"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
