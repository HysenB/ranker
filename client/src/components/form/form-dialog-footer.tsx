import React from "react";
import {
  DialogFooter
} from "../../../components/ui/dialog";
import {
  Button
} from "../../../components/ui/button";
import { Link } from "react-router-dom";

type FormDialogFooterType = {
  navigateUrl: string;
  buttonText?: string;
  isLoading: boolean;
};

export const FormDialogFooter = ({
  navigateUrl,
  buttonText,
  isLoading,
}: FormDialogFooterType) => {
  return (
    <div className="flex justify-center">
      <DialogFooter>
        <Button
          asChild
          className="w-[130px] font-[500] font-poppins bg-[#D9D9D9] dark:bg-[#2e2e2e] text-primary px-4 py-2 text-center rounded-lg text-sm outline-none"
        >
          <Link to={navigateUrl}>Back</Link>
        </Button>
        <Button
          type="submit"
          className="w-[130px] bg-[#579DFF] font-poppins text-white text-center rounded-lg py-2 outline-none"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : buttonText || "Submit"}
        </Button>
      </DialogFooter>
    </div>
  );
};
