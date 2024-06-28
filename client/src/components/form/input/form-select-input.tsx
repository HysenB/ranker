import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "../../../../components/ui/select";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/form";

export const FormSelectInput = ({ form, _field }: any) => {
  return (
    <FormField
      control={form.control}
      name={`${_field.name}`}
      render={({ field }) => {
        console.log({ field });
        return (
          <>
            <FormItem className="border-[#D9D9D9] dark:bg-transparent dark:border-[#3C4248] focus-visible:ring-offset-0 focus-visible:ring-0">
              <FormLabel>{_field.label}</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="border-[#D9D9D9] dark:bg-transparent dark:border-[#3C4248] focus-visible:ring-offset-0 focus-visible:ring-0">
                  <SelectValue placeholder={_field.placeholder} />
                </SelectTrigger>
                <SelectContent className="border-[#D9D9D9] dark:bg-[#282D33] dark:border-[#3C4248] focus-visible:ring-offset-0 focus-visible:ring-0">
                  <SelectGroup>
                    {_field?.options?.map((option: any) => {
                      console.log("test2", option.id);
                      return (
                        <SelectItem key={option.id} value={option.id}>
                          {option.name}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          </>
        );
      }}
    />
  );
};
