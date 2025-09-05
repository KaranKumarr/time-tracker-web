import React, {useEffect, useState} from 'react';
import {Card, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Check, SquarePen} from "lucide-react";
import SelectCategory from "@/components/TimeLog/SelectCategory";
import {useCategories} from "@/context/CategoryContext";
import {DateTime} from "luxon";
import Category from "@/lib/types/Category";
import TimeLog, {CreateTimeLog} from "@/lib/types/TimeLog";
import {useTimeLogs} from "@/context/TimeLogContext";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {formatAddNewLogTime} from "@/lib/timeformat";

const AddNewTimeLog = () => {

    const {categories} = useCategories();
    const [selectValue, setSelectValue] = useState<string | undefined>()
    const [description, setDescription] = useState<string>("")

    const {unfinishedTimeLog, handleCreateTimeLog, handleUpdateTimeLog, timeLogs} = useTimeLogs()

    const [timeLog, setTimeLog] = useState<CreateTimeLog | undefined>(unfinishedTimeLog)

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        if (!unfinishedTimeLog) return;
        setTimeLog(unfinishedTimeLog);
        setDescription(unfinishedTimeLog.description ?? '');
        const secondsSpent = Math.floor(
            DateTime.now()
                .diff(DateTime.fromISO(unfinishedTimeLog.startTime), "seconds")
                .seconds
        );
        setSeconds(secondsSpent);

        // will be undefined if no category
        setSelectValue(unfinishedTimeLog.category?.id?.toString());
    }, [unfinishedTimeLog]);

    useEffect(() => {
        if (timeLog) {
            const interval = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);

            return () => clearInterval(interval); // cleanup on unmount
        }
    }, [timeLog]);


    const handleTrackingSubmit = () => {
        const category: Category | undefined = categories.find((cat) => cat.id.toString() === selectValue) ?? undefined;
        if (!timeLog) {
            const newTimeLog = {
                id: undefined,
                startTime: DateTime.now().toISO({includeOffset: false}),
                description,
                category
            };
            setTimeLog(newTimeLog)
            handleCreateTimeLog(newTimeLog)
        } else {
            setTimeLog(undefined)
            const tempTimeLog = timeLogs.find(log => log.id === timeLog?.id);
            if (!tempTimeLog) return;
            const newISO = DateTime.now().toISO({includeOffset: false});
            const updatedTimeLog: TimeLog = {
                ...tempTimeLog,
                endTime: newISO,
                description: description,
            };
            if (category) {
                updatedTimeLog.category = category;
            }
            handleUpdateTimeLog(tempTimeLog, updatedTimeLog);
            setSeconds(0)
            setDescription("")
        }
    }

    return (
        <>
            <CardHeader>
                Add New Time Log
            </CardHeader>
            <Card className={'flex p-4 flex-nowrap flex-row items-center'}>
                <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={"What you doing right now?"}
                    className={'transition-all duration-300 flex-1 p-1 border border-transparent outline-0 hover:border-border focus:border-primary rounded'}/>
                {
                    (unfinishedTimeLog?.description !== description || unfinishedTimeLog.category?.id !== selectValue) && timeLog !== undefined &&
                    <Tooltip>
                        <Button
                            onClick={() => {
                                const tempTimeLog = timeLogs.find(log => log.id === timeLog?.id);
                                if (!tempTimeLog) return;
                                const category: Category | undefined = categories.find((cat) => cat.id.toString() === selectValue) ?? undefined;
                                const updatedTimeLog: TimeLog = {
                                    ...tempTimeLog,
                                    description: description,
                                    category: category ? category : tempTimeLog.category
                                };
                                handleUpdateTimeLog(tempTimeLog, updatedTimeLog);
                            }}
                            asChild={true} className={'animate-fade-in-left transition-all'} variant={"ghost"}>
                            <TooltipTrigger>
                                <Check/>
                            </TooltipTrigger>
                        </Button>

                        <TooltipContent>
                            <p>Save Changes?</p>
                        </TooltipContent>
                    </Tooltip>
                }

                <SelectCategory
                    selectOption={selectValue}
                    setSelectOption={setSelectValue}
                    defaultSelected={unfinishedTimeLog?.category?.id.toString()}
                    categories={categories} onValueChange={
                    (value) => {
                        if (value === "none") {
                            setSelectValue(undefined)
                        } else {
                            setSelectValue(value)
                        }
                    }}/>

                <h4 className={`font-medium transition-all duration-500 ${timeLog ? "bg-primary px-3 py-1 rounded text-white" : ""}`}>
                    {formatAddNewLogTime(seconds)}
                </h4>

                <div className={'flex space-x-1'}>
                    <Button
                        onClick={handleTrackingSubmit}
                        variant={timeLog ? 'destructive' : 'default'} className={'transition-all duration-500 w-32'}>
                        {
                            timeLog ? "Stop Tracking" : "Start Tracking"
                        }
                    </Button>
                    <Button variant={"ghost"}>
                        <SquarePen/>
                    </Button>
                </div>
            </Card>
        </>
    );
};

export default AddNewTimeLog;