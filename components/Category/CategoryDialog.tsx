import React, {useState} from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"
import {Button} from "@/components/ui/button";
import {SquarePen, Trash} from "lucide-react";
import {Label} from "@/components/ui/label";
import DateTimePicker from "@/components/ui/DateTimePicker";
import {Textarea} from "@/components/ui/textarea";
import Category from "@/lib/types/Category";
import {Input} from "@/components/ui/input";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";

type CategoryDialogProps = {
    category: Category;
    handleSubmit: (category: Category) => void
}

const CategoryDialog = ({category, handleSubmit}: CategoryDialogProps) => {

    const [updatedCategory, setUpdatedCategory] = useState<Category>(category)

    const [isDialogOpen, setIsDialogOpen] = useState(false)

    return (
        <Dialog open={isDialogOpen} onOpenChange={(open) => setIsDialogOpen(open)}>

            <Button asChild={true} className={'rounded-none hover:bg-background transition-all'} variant={'link'}>
                <DialogTrigger>
                    <SquarePen className={'text-foreground'}/>
                </DialogTrigger>
            </Button>

            <DialogContent>
                <form onSubmit={
                    (e) => {
                        e.preventDefault();
                        handleSubmit(updatedCategory)
                    }
                }>
                    <DialogHeader>
                        <DialogTitle>Edit Category</DialogTitle>
                        <div className={'space-y-1'}>
                            <Label>
                                Name
                            </Label>
                            <Input
                                onChange={(e) => {
                                    setUpdatedCategory({
                                        ...updatedCategory,
                                        name: e.target.value
                                    })
                                }}
                                value={updatedCategory.name}/>
                        </div>
                        <div className={'space-y-1'}>
                            <Label>
                                Description
                            </Label>
                            <Textarea
                                onChange={(e) => {
                                    setUpdatedCategory({
                                        ...updatedCategory,
                                        description: e.target.value
                                    })
                                }}
                                value={updatedCategory.description}/>
                        </div>
                        <div className={'space-y-1 w-max'}>
                            <Label className={'w-max'}>
                                Goal Hour
                            </Label>
                            <Input
                                className={'w-24 text-center'}
                                type={'number'}
                                onChange={(e) => {
                                    setUpdatedCategory({
                                        ...updatedCategory,
                                        goalHours: Number(e.target.value)
                                    })
                                }}
                                value={updatedCategory.goalHours}/>
                        </div>
                        <div className={'space-y-1'}>
                            <Label>
                                Deadline
                            </Label>
                            <div className={'flex space-x-2'}>
                                <DateTimePicker
                                    onDateTimeChange={(date: string) => {
                                        setUpdatedCategory({
                                            ...updatedCategory,
                                            deadline: date
                                        })
                                    }}
                                    initialDate={updatedCategory.deadline}/>
                                <Tooltip>
                                    <TooltipTrigger asChild={true}>
                                        <Button onClick={() => {
                                            setUpdatedCategory({...updatedCategory, deadline: null})
                                            if (updatedCategory.id > 0) {
                                                handleSubmit(updatedCategory)
                                                setIsDialogOpen(false)
                                            }
                                        }} type={'button'} className={'hover:text-primary'} variant={'secondary'}>
                                            <Trash/>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Remove Deadline?</p>
                                    </TooltipContent>
                                </Tooltip>

                            </div>
                        </div>


                        <Button
                            type={'submit'}
                            asChild={true} className={'ml-auto'}>
                            <DialogTrigger>
                                Submit
                            </DialogTrigger>
                        </Button>
                    </DialogHeader>
                </form>

            </DialogContent>

        </Dialog>
    );
};


export default CategoryDialog;