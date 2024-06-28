import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import {
  Button
} from "../../../components/ui/button"
import { Link, useNavigate } from "react-router-dom";

type FormDialogDeleteType = {
  navigateUrl: string;
  headerTitle: string;
  name: string;
  isLoading: boolean;
  onSubmit: () => void;
};

const FormDialogDelete = ({
  navigateUrl,
  headerTitle,
  name,
  isLoading,
  onSubmit,
}: FormDialogDeleteType) => {
  const navigate = useNavigate();
  return (
    <Dialog defaultOpen onOpenChange={() => navigate(navigateUrl)}>
      <DialogContent
        className="sm:max-w-[625px]"
        onInteractOutside={() => navigate(navigateUrl)}
      >
        <DialogHeader>
          <DialogTitle className="text-center">
            {headerTitle || "unknown"}
          </DialogTitle>
        </DialogHeader>
        <div className="min-h-[100px] flex flex-col items-center justify-center gap-4">
          <p>
            Are you sure you want to delete{" "}
            <span className="font-bold underline">{name}</span>?
          </p>
        </div>
        <div className="flex justify-center">
          <DialogFooter>
            <Button
              asChild
              className="w-[130px] font-[500] font-poppins bg-[#D9D9D9] dark:bg-[#1D2125] text-primary px-4 py-2 text-center rounded-lg text-sm outline-none"
            >
              <Link to={navigateUrl}>Back</Link>
            </Button>
            <Button
              onClick={onSubmit}
              className="w-[130px] bg-[#579DFF] font-poppins text-white text-center rounded-lg py-2 outline-none"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Confirm"}
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default FormDialogDelete;
