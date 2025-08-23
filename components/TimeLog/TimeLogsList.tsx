import React, {useEffect, useState} from 'react';
import TimeLog from "@/lib/types/TimeLog";
import {getLogs} from "@/services/timeLogApi";
import TimeLogCard from "@/components/TimeLog/TimeLogCard";
import {formatTimeLogDate} from "@/lib/timeformat";

const TimeLogsList = () => {

    const [timeLogs, setTimeLogs] = useState<TimeLog[]>([]);

    useEffect(() => {
        const fetchLogs = async ()=>{
            const {data} = await getLogs();
            setTimeLogs(data);
        }
        fetchLogs()
    },[])

    return (
        <ul className={'py-4 space-y-2'}>
            {timeLogs.length > 0 && timeLogs.map((timeLog, index) => (
                <li key={index}>
                    <p className={'px-4 pb-0.5 text-primary'}>
                        {formatTimeLogDate(timeLog.startTime)}
                    </p>
                    <TimeLogCard timeLog={timeLog} />
                </li>
            ))}
        </ul>
    );
};

export default TimeLogsList;