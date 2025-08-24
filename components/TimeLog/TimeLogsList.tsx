import React from 'react';
import TimeLogCard from "@/components/TimeLog/TimeLogCard";
import {formatTimeLogDate} from "@/lib/timeformat";
import {useTimeLogs} from "@/context/TimeLogContext";

const TimeLogsList = () => {

    const {timeLogs} = useTimeLogs();


    return (
        <ul className={'py-4 space-y-2'}>
            {timeLogs.length > 0 && timeLogs.map((timeLog, index) => (
                <li key={index}>
                    <p className={'px-4 pb-0.5 text-primary'}>
                        {formatTimeLogDate(timeLog.startTime)}
                    </p>
                    <TimeLogCard timeLog={timeLog}/>
                </li>
            ))}
        </ul>
    );
};

export default TimeLogsList;