import React from "react";
import {
  DialogHeader,
  DialogTitle
} from "../../../components/ui/dialog";

export const FormDialogHeader = ({ headerTitle }: { headerTitle?: string }) => {
  return (
    <DialogHeader>
      <DialogTitle className="text-center">
        {headerTitle || "unknown"}
      </DialogTitle>
    </DialogHeader>
  );
};
