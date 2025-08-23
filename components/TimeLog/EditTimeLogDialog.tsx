import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"
import React, {useEffect, useState} from 'react';
import {Button} from "@/components/ui/button";
import {SquarePen} from "lucide-react";
import TimeLog from "@/lib/types/TimeLog";
import {Label} from "@/components/ui/label";
import DateTimePicker from "@/components/ui/DateTimePicker";
import SelectCategory from "@/components/TimeLog/SelectCategory";
import Category from "@/lib/types/Category";
import {getCategories} from "@/services/categoryApi";
import {Textarea} from "@/components/ui/textarea";

type EditTimeLogDialogProps = {
    timeLog: TimeLog;
}

const EditTimeLogDialog = ({timeLog}: EditTimeLogDialogProps) => {

    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await getCategories()
            setCategories(data)
        }
        fetchData()
    }, []);

    const [description, setDescription] = useState<string>(timeLog.description);

    return (
        <Dialog>
            <Button asChild={true} variant={'secondary'}>
                <DialogTrigger>
                    Edit
                    <SquarePen className={'size-3'}/>
                </DialogTrigger>
            </Button>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Time Log</DialogTitle>
                    <div className={'space-y-1'}>
                        <Label>
                            Description
                        </Label>
                        <Textarea
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}/>
                    </div>
                    <div className={'space-y-1'}>
                        <Label>
                            Start Time
                        </Label>
                        <div>
                            <DateTimePicker initialDate={timeLog.startTime}/>
                        </div>
                    </div>
                    {timeLog.endTime && (
                        <div className={'space-y-1'}>
                            <Label>
                                End Time
                            </Label>
                            <div>
                                <DateTimePicker initialDate={timeLog.endTime}/>
                            </div>
                        </div>
                    )}
                    <div className={'space-y-1'}>
                        <Label>
                            Category
                        </Label>
                        <SelectCategory
                            defaultSelected={timeLog.category ? timeLog.category.id.toString() : undefined}
                            categories={categories} onValueChange={(value) => {
                            console.log(value)
                        }}
                        />
                    </div>
                    <Button asChild={true} className={'ml-auto'}>
                        <DialogTrigger>
                            Submit
                        </DialogTrigger>
                    </Button>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default EditTimeLogDialog;