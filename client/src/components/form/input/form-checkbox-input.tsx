import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../../../../components/ui/form";
import { Checkbox } from "../../../../components/ui/checkbox";

export const FormCheckboxInput = ({ form, _field }: any) => {
  return (
    <FormField
      control={form.control}
      // @ts-ignore
      name={_field.name}
      render={({ field }) => (
        <FormItem className="flex items-center justify-center gap-5 p-4 border rounded-md ">
          <div className="flex items-center space-x-2">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel className="text-md">Is Webhook</FormLabel>
          </div>
        </FormItem>
      )}
    />
  );
};
