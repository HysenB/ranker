import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/form";
import { RadioGroup, RadioGroupItem } from "../../../../components/ui/radio-group";

export const FormRadioInput = ({ form, _field }: any) => {
  return (
    <FormField
      control={form.control}
      name={`${_field?.name}`}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>{_field?.label}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex items-center"
            >
              <>
                {_field?.options?.map((item: string, index: number) => {
                  return (
                    <FormItem key={index} className="flex space-y-0">
                      <FormControl className="hidden">
                        <RadioGroupItem value={item} />
                      </FormControl>
                      <button
                        type="button"
                        className={`px-4 py-2 text-sm rounded ${field.value === item
                          ? "bg-blue-500 border border-blue-500 text-white"
                          : "border border-gray-400 text-white"
                          }`}
                        onClick={() => field.onChange(item)}
                      >
                        {item}
                      </button>
                      <FormLabel className="hidden font-normal">
                        {item}
                      </FormLabel>
                    </FormItem>
                  );
                })}
              </>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
