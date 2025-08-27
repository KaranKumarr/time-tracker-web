import React, {useState} from 'react';
import {Card, CardContent, CardDescription, CardHeader} from "@/components/ui/card";
import TimeLog from "@/lib/types/TimeLog";
import {formatMinutesDurationToHours, formatStartEndEndTime} from "@/lib/timeformat";
import {DateTime} from "luxon";
import {Button} from "@/components/ui/button";
import {Star, Trash} from "lucide-react";
import EditTimeLogDialog from "@/components/TimeLog/EditTimeLogDialog";
import DeleteTimeLogDialog from "@/components/TimeLog/DeleteTimeLogDialog";

type TimeLogCardProps = {
    timeLog: TimeLog;
}

const TimeLogCard = ({timeLog}: TimeLogCardProps) => {

    const duration = formatMinutesDurationToHours(timeLog.durationMinutes ?? 0);

    const [isImportant, setIsImportant] = useState(false)

    return (
        <Card className={'flex-row items-center justify-between p-4'}>
            <CardContent className={'p-0 w-1/6 bg-stone-100 py-1 text-sm font-semibold rounded text-center'}>
                {timeLog.endTime ?
                    formatStartEndEndTime(timeLog.startTime, timeLog.endTime) : ''
                }
            </CardContent>
            <CardDescription className={'w-1/6 text-center p-0 bg-stone-100 py-1 rounded'}>
                Worked For: {duration}
            </CardDescription>
            <CardHeader className={'w-1/4 truncate p-0'}>
                {timeLog.description.length > 0 ? timeLog.description : 'No description provided.'}
            </CardHeader>
            <div
                className={`border border-input w-[180px] px-3 py-2 text-sm truncate rounded-[8px] p-2 text-center ${timeLog.category ? "" : "text-muted-foreground"}`}>
                {timeLog.category ? timeLog.category.name : "No Category"}
            </div>
            <div className={'space-x-3'}>
                <EditTimeLogDialog timeLog={timeLog} />
             <DeleteTimeLogDialog id={timeLog.id} />
                <Button
                    onClick={() => {
                        setIsImportant(!isImportant);
                    }}
                    className={'group'}
                    variant={'ghost'}>
                    <Star
                        className={`transition-all duration-1000 ${isImportant ? 'fill-primary stroke-primary group-focus:scale-110' : 'fill-transparent'}`}/>
                </Button>
            </div>
        </Card>
    );
};

export default TimeLogCard;