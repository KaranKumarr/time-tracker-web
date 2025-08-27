import React, {useEffect, useState} from 'react';
import {Card, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {SquarePen} from "lucide-react";
import SelectCategory from "@/components/TimeLog/SelectCategory";
import {useCategories} from "@/context/CategoryContext";
import {DateTime} from "luxon";
import Category from "@/lib/types/Category";
import TimeLog, {CreateTimeLog} from "@/lib/types/TimeLog";
import {useTimeLogs} from "@/context/TimeLogContext";

const AddNewTimeLog = () => {

    const {categories} = useCategories();
    const [selectValue, setSelectValue] = useState<string | undefined>()
    const [description, setDescription] = useState<string>("")

    const {unfinishedTimeLog, handleCreateTimeLog, handleUpdateTimeLog, timeLogs} = useTimeLogs()

    const [timeLog, setTimeLog] = useState<CreateTimeLog | undefined>(unfinishedTimeLog)

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        if (unfinishedTimeLog) {
            setTimeLog(unfinishedTimeLog)
            const secondsSpend = Math.floor(DateTime.now().diff(DateTime.fromISO(unfinishedTimeLog.startTime), "seconds").seconds)
            setSeconds(secondsSpend)
        }
    }, [unfinishedTimeLog]);

    useEffect(() => {
        if (timeLog) {
            const interval = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);

            return () => clearInterval(interval); // cleanup on unmount
        }
    }, [timeLog]);

    const formatTime = (totalSeconds: number) => {
        const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
        const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
        const secs = String(totalSeconds % 60).padStart(2, "0");
        return `${hrs}:${mins}:${secs}`;
    };

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

                <SelectCategory categories={categories} onValueChange={
                    (value) => {
                        if (value === "none") {
                            setSelectValue(undefined)
                        } else {
                            setSelectValue(value)
                        }
                    }}/>

                <h4 className={`font-medium transition-all duration-500 ${timeLog ? "bg-primary px-3 py-1 rounded text-white" : ""}`}>
                    {formatTime(seconds)}
                </h4>

                <div className={'flex space-x-1'}>
                    <Button
                        onClick={() => {
                            if (!timeLog) {
                                const category: Category | undefined = categories.find((cat) => cat.id.toString() === selectValue) ?? undefined;
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
                                const newISO = DateTime.now().toISO({ includeOffset: false });
                                const updatedTimeLog: TimeLog = {
                                    ...tempTimeLog,      // shallow clone
                                    endTime: newISO,     // override
                                };
                                handleUpdateTimeLog(tempTimeLog, updatedTimeLog);
                            }
                        }}
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