"use client";

import React, {createContext, useContext, useEffect, useState} from "react";
import {deleteTimeLog, editTimeLog, getTimeLogs} from "@/services/timeLogApi";
import TimeLog from "@/lib/types/TimeLog";
import {toast} from "sonner";

interface TimeLogContextType {
    timeLogs: TimeLog[];
    handleUpdateTimeLog: (timeLog: TimeLog, updatedTimeLog: TimeLog) => void;
    handleDeleteTimeLog: (id: number) => void;
}

const TimeLogContext = createContext<TimeLogContextType | undefined>(undefined);

export function TimeLogProvider({children}: { children: React.ReactNode }) {
    const [timeLogs, setTimeLogs] = useState<TimeLog[]>([]);

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
        console.log(res)
        if (res && res.status === 204) {
            setTimeLogs((prev) =>
                prev.filter((tl) => tl.id !== id)
            );
            toast.success("Deleted!")
        }
    }

    // Load on mount
    useEffect(() => {
        fetchTimeLogs();
    }, []);

    return (
        <TimeLogContext.Provider
            value={{timeLogs, handleUpdateTimeLog, handleDeleteTimeLog}}
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
