"use client";

import React, {createContext, useContext, useState} from "react";
import {createTimeLog, deleteTimeLog, editTimeLog, getTimeLogs} from "@/services/timeLogApi";
import TimeLog, {CreateTimeLog} from "@/lib/types/TimeLog";
import {toast} from "sonner";

interface TimeLogContextType {
    timeLogs: TimeLog[];
    total: number;
    unfinishedTimeLog: CreateTimeLog | undefined;
    setUnfinishedTimeLog: React.Dispatch<React.SetStateAction<CreateTimeLog | undefined>>;
    handleUpdateTimeLog: (timeLog: TimeLog, updatedTimeLog: TimeLog) => void;
    handleDeleteTimeLog: (id: number) => void;
    handleCreateTimeLog: (timeLog: CreateTimeLog) => void;
    loadTimeLogs: (p: { page: number; size: number }) => Promise<{
        items: TimeLog[];
        total: number;
        page: number;
        size: number
    }>;
}

const TimeLogContext = createContext<TimeLogContextType | undefined>(undefined);

export function TimeLogProvider({children}: { children: React.ReactNode }) {
    const [timeLogs, setTimeLogs] = useState<TimeLog[]>([]);
    const [unfinishedTimeLog, setUnfinishedTimeLog] = useState<CreateTimeLog | undefined>();
    const [total,setTotal] = useState(0)

    const loadTimeLogs = async ({page, size = 10}: { page: number; size?: number }) => {
        const res = await getTimeLogs({page, size});
        setTimeLogs(res.data);
        setTotal(res.total)
        return res;
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

    return (
        <TimeLogContext.Provider
            value={{
                timeLogs,
                handleUpdateTimeLog,
                handleDeleteTimeLog,
                handleCreateTimeLog,
                unfinishedTimeLog,
                setUnfinishedTimeLog,
                loadTimeLogs,
                total
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
