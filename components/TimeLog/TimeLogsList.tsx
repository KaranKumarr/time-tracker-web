import React, {useEffect, useState} from 'react';
import TimeLogCard from "@/components/TimeLog/TimeLogCard";
import {formatTimeLogDate} from "@/lib/timeformat";
import {useTimeLogs} from "@/context/TimeLogContext";
import TimeLog from "@/lib/types/TimeLog";
import Pagination from "@/components/TimeLog/Pagination";

const TimeLogsList = () => {

    const {timeLogs, setUnfinishedTimeLog} = useTimeLogs();
    const [filteredTimeLogs, setFilteredTimeLogs] = useState<TimeLog[]>([]);

    useEffect(() => {
        setUnfinishedTimeLog(undefined)
        const tempTimeLogs = timeLogs.filter((log) => {
            if (!log.endTime) {
                setUnfinishedTimeLog({
                    id: log.id,
                    description: log.description,
                    startTime: log.startTime,
                    category: log.category ?? undefined,
                })
                return false;
            } else {
                return true;
            }
        })
        setFilteredTimeLogs(tempTimeLogs);

    }, [timeLogs, setUnfinishedTimeLog])


    return (
        <>
            <ul className={'py-4 space-y-2'}>
                {filteredTimeLogs.length > 0 && filteredTimeLogs.map((timeLog, index) => (
                    <li key={index}>
                        <p className={'px-4 pb-0.5 text-primary'}>
                            {formatTimeLogDate(timeLog.startTime)}
                        </p>
                        <TimeLogCard timeLog={timeLog}/>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TimeLogsList;