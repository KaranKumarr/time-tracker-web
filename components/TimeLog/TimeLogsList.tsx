import React, {useEffect, useState} from 'react';
import TimeLogCard from "@/components/TimeLog/TimeLogCard";
import {formatTimeLogDate, generateTimeLogCode} from "@/lib/timeformat";
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
                      <div className={'flex items-center justify-between px-2 pb-0.5 space-x-2'}>
                          <p className={'text-primary'}>
                              {formatTimeLogDate(timeLog.startTime)}
                          </p>
                          <p className={'text-foreground/50 font-medium text-sm'}>
                              #{generateTimeLogCode(timeLog.id, timeLog.startTime)}
                          </p>
                      </div>
                        <TimeLogCard timeLog={timeLog}/>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TimeLogsList;