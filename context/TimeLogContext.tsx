"use client";

import React, {createContext, useContext, useEffect, useState} from "react";
import {createTimeLog, deleteTimeLog, editTimeLog, getTimeLogs} from "@/services/timeLogApi";
import TimeLog, {CreateTimeLog} from "@/lib/types/TimeLog";
import {toast} from "sonner";

interface TimeLogContextType {
    timeLogs: TimeLog[];
    unfinishedTimeLog: CreateTimeLog | undefined;
    setUnfinishedTimeLog: React.Dispatch<React.SetStateAction<CreateTimeLog | undefined>>;
    handleUpdateTimeLog: (timeLog: TimeLog, updatedTimeLog: TimeLog) => void;
    handleDeleteTimeLog: (id: number) => void;
    handleCreateTimeLog: (timeLog: CreateTimeLog) => void;
}

const TimeLogContext = createContext<TimeLogContextType | undefined>(undefined);

export function TimeLogProvider({children}: { children: React.ReactNode }) {
    const [timeLogs, setTimeLogs] = useState<TimeLog[]>([]);
    const [unfinishedTimeLog, setUnfinishedTimeLog] = useState<CreateTimeLog | undefined>();

    const fetchTimeLogs = async () => {
        const {data} = await getTimeLogs();
        setTimeLogs(data); // ✅ adjust depending on ApiResponse shape
    };

    const handleUpdateTimeLog = async (timeLog: TimeLog, updatedTimeLog: TimeLog) => {
        const res = await editTimeLog(timeLog, updatedTimeLog)
        if (res && res.status === 200) {
            // Replace the old timelog with the updated one in state
            setTimeLogs((prev) =>
                prev.map((tl) => (tl.id === timeLog.id ? res.data : tl))
            );
            toast.success("Updated!")
        }
    }

    const handleDeleteTimeLog = async (id: number) => {
        const res = await deleteTimeLog(id)
        if (res && res.status === 204) {
            setTimeLogs((prev) =>
                prev.filter((tl) => tl.id !== id)
            );
            toast.success("Deleted!")
        }
    }

    const handleCreateTimeLog = async (timeLog: CreateTimeLog) => {
        const res = await createTimeLog(timeLog)
        if (res && res.status === 201) {
            setTimeLogs([...timeLogs, res.data])
            toast.success("Timer Start!!")
        }
    }

    useEffect(() => {
        fetchTimeLogs();
    }, []);

    return (
        <TimeLogContext.Provider
            value={{
                timeLogs,
                handleUpdateTimeLog,
                handleDeleteTimeLog,
                handleCreateTimeLog,
                unfinishedTimeLog,
                setUnfinishedTimeLog
            }}
        >
            {children}
        </TimeLogContext.Provider>
    );
}

// Hook for using context
export function useTimeLogs() {
    const ctx = useContext(TimeLogContext);
    if (!ctx) throw new Error("useCategories must be used within TimeLogProvider");
    return ctx;
}
