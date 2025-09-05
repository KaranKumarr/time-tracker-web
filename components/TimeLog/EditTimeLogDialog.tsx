import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"
import React, {useState} from 'react';
import {Button} from "@/components/ui/button";
import {SquarePen} from "lucide-react";
import TimeLog from "@/lib/types/TimeLog";
import {Label} from "@/components/ui/label";
import DateTimePicker from "@/components/ui/DateTimePicker";
import SelectCategory from "@/components/TimeLog/SelectCategory";
import {Textarea} from "@/components/ui/textarea";
import {useCategories} from "@/context/CategoryContext";
import {useTimeLogs} from "@/context/TimeLogContext";

type EditTimeLogDialogProps = {
    timeLog: TimeLog;
}

const EditTimeLogDialog = ({timeLog}: EditTimeLogDialogProps) => {

    const {categories} = useCategories()
    const {handleUpdateTimeLog} = useTimeLogs()

    const [selectCategory, setSelectCategory] = useState<string | undefined>(timeLog.category ? timeLog.category.id.toString() : undefined)

    const [updatedTimeLog, setUpdatedTimeLog] = useState<TimeLog>(timeLog)

    return (
        <Dialog>
            <Button asChild={true} variant={'secondary'}>
                <DialogTrigger>
                    Edit
                    <SquarePen className={'size-3'}/>
                </DialogTrigger>
            </Button>


            <DialogContent>
                <form onSubmit={
                    (e) => {
                        e.preventDefault();
                        handleUpdateTimeLog(timeLog, updatedTimeLog)
                    }
                }>
                    <DialogHeader>
                        <DialogTitle>Edit Time Log</DialogTitle>
                        <div className={'space-y-1'}>
                            <Label>
                                Description
                            </Label>
                            <Textarea
                                onChange={(e) => {
                                    setUpdatedTimeLog({...updatedTimeLog, description: e.target.value})
                                }}
                                value={updatedTimeLog.description}/>
                        </div>
                        <div className={'space-y-1'}>
                            <Label>
                                Start Time
                            </Label>
                            <div>
                                <DateTimePicker
                                    onDateTimeChange={(date: string) => {
                                        setUpdatedTimeLog({
                                            ...updatedTimeLog,
                                            startTime: date
                                        })
                                    }}
                                    initialDate={timeLog.startTime}/>
                            </div>
                        </div>
                        {timeLog.endTime && (
                            <div className={'space-y-1'}>
                                <Label>
                                    End Time
                                </Label>
                                <div>
                                    <DateTimePicker
                                        onDateTimeChange={(date: string) => {
                                            setUpdatedTimeLog({
                                                ...updatedTimeLog,
                                                endTime: date
                                            })
                                        }}
                                        initialDate={timeLog.endTime}/>
                                </div>
                            </div>
                        )}
                        <div className={'space-y-1'}>
                            <Label>
                                Category
                            </Label>
                            <SelectCategory
                                setSelectOption={setSelectCategory}
                                selectOption={selectCategory}
                                defaultSelected={timeLog.category ? timeLog.category.id.toString() : undefined}
                                categories={categories} onValueChange={(value) => {
                                setSelectCategory(value)
                                const updatedCategory = categories.find((cat) => {
                                    return cat.id.toString() === value;
                                })
                                if (updatedCategory)
                                    setUpdatedTimeLog({...updatedTimeLog, category: updatedCategory})
                            }}
                            />
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

export default EditTimeLogDialog;