import React from "react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { Dialog, DialogContent } from "../../../components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { Form } from "../../../components/ui/form";
import { FormDialogHeader } from "./form-dialog-header";
import { FormDialogFooter } from "./form-dialog-footer";
import { FormDialogFields } from "./form-dialog-fields";

export type FormData = Record<string, string>;
type FormDialogType<T extends FormData> = {
  navigateUrl: string;
  headerTitle?: string;
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  fields: any;
  buttonText?: string;
  isLoading: boolean;
  setOpenModel?: any;
};

const FormDialog = <T extends FormData>({
  navigateUrl,
  headerTitle,
  form,
  onSubmit,
  fields,
  buttonText,
  isLoading,
  setOpenModel,
}: FormDialogType<T>) => {
  const navigate = useNavigate();

  return (
    <Dialog defaultOpen onOpenChange={() => navigate(navigateUrl)}>
      <DialogContent
        className="sm:max-w-[625px] dark:bg-[#282D33]"
        onInteractOutside={() =>
          navigateUrl.length ? navigate(navigateUrl) : setOpenModel(false)
        }
      >
        <FormDialogHeader headerTitle={headerTitle} />
        <div className="flex flex-col gap-4 overflow-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormDialogFields
                fields={fields}
                form={form}
              />
              <FormDialogFooter
                buttonText={buttonText}
                isLoading={isLoading}
                navigateUrl={navigateUrl}
              />
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default FormDialog;
