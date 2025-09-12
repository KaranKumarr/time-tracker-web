import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type ConfirmDialogProps = {
    /** Element that opens the dialog */
    children: React.ReactNode;
    title?: string;
    description?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    confirmVariant?: "default" | "destructive" | "outline";
    onConfirm?: () => void;
};

const ConfirmDialog = ({
                           children,
                           title = "Are you sure?",
                           description,
                           confirmLabel = "Confirm",
                           cancelLabel = "Cancel",
                           confirmVariant = "default",
                           onConfirm,
                       }: ConfirmDialogProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && (
                        <DialogDescription>{description}</DialogDescription>
                    )}
                </DialogHeader>

                <div className="flex justify-end gap-2 pt-4">
                    <Button variant="outline" asChild>
                        <DialogTrigger>{cancelLabel}</DialogTrigger>
                    </Button>

                    <Button variant={confirmVariant} onClick={onConfirm} asChild>
                        <DialogTrigger>{confirmLabel}</DialogTrigger>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ConfirmDialog;
