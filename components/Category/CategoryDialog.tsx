"use client";
import React, {useState} from "react";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {Trash} from "lucide-react";
import DateTimePicker from "@/components/ui/DateTimePicker";
import Category from "@/lib/types/Category";

type CategoryFormDialogProps = {
    children: React.ReactNode;
    initialCategory: Category;
    title?: string;
    onSubmit: (cat: Category) => void;
};

const CategoryFormDialog = ({
                                children,
                                initialCategory,
                                title = "Category",
                                onSubmit,
                            }: CategoryFormDialogProps) => {

    const [draft, setDraft] = useState<Category>(initialCategory);
    const [open, setOpen] = useState(false);

    const handleDeadlineRemove = () => {
        setDraft({...draft, deadline: null});
        if (draft.id > 0) {
            onSubmit({...draft, deadline: null});
            setOpen(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>

            <DialogContent>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        onSubmit(draft);
                        setOpen(false);
                    }}
                    className="space-y-4"
                >
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                    </DialogHeader>

                    <div className="space-y-1">
                        <Label>Name</Label>
                        <Input
                            value={draft.name}
                            onChange={(e) => setDraft({...draft, name: e.target.value})}
                        />
                    </div>

                    <div className="space-y-1">
                        <Label>Description</Label>
                        <Textarea
                            value={draft.description}
                            onChange={(e) =>
                                setDraft({...draft, description: e.target.value})
                            }
                        />
                    </div>

                    <div className="space-y-1 w-max">
                        <Label>Goal Hour</Label>
                        <Input
                            type="number"
                            className="w-24 text-center"
                            value={draft.goalHours}
                            onChange={(e) =>
                                setDraft({...draft, goalHours: Number(e.target.value)})
                            }
                        />
                    </div>

                    <div className="space-y-1">
                        <Label>Deadline</Label>
                        <div className="flex space-x-2">
                            <DateTimePicker
                                onDateTimeChange={(date) => setDraft({...draft, deadline: date})}
                                initialDate={draft.deadline}
                            />
                            {
                                draft.deadline && <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            type="button"
                                            variant="secondary"
                                            className="hover:text-primary"
                                            onClick={handleDeadlineRemove}
                                        >
                                            <Trash/>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>Remove deadline?</TooltipContent>
                                </Tooltip>
                            }
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Button disabled={draft.name === ""} type="submit">Submit</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default CategoryFormDialog;
