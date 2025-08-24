import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import React from 'react';
import {Button} from "@/components/ui/button";
import {Trash} from "lucide-react";

type DeleteTimeLogDialogProps = {
    id: number;
}

const DeleteTimeLogDialog = ({id}: DeleteTimeLogDialogProps) => {

    return (
        <Dialog>
            <Button asChild variant={'destructive'}>
                <DialogTrigger className={'flex items-center gap-1'}>
                    Delete
                    <Trash className={'size-3'}/>
                </DialogTrigger>
            </Button>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Confirm delete?</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this entry?
                    </DialogDescription>
                </DialogHeader>
                <Button variant={'destructive'} className={'ml-auto'}>
                    Yes, send it to void!
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteTimeLogDialog;