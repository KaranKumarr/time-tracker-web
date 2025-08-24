"use client";

import React, {createContext, useContext, useEffect, useState} from "react";
import {editTimeLog, getTimeLogs} from "@/services/timeLogApi";
import TimeLog from "@/lib/types/TimeLog";

interface TimeLogContextType {
    timeLogs: TimeLog[];
    updateTimeLog: (timeLog: TimeLog, updatedTimeLog: TimeLog) => void;
}

const TimeLogContext = createContext<TimeLogContextType | undefined>(undefined);

export function TimeLogProvider({children}: { children: React.ReactNode }) {
    const [timeLogs, setTimeLogs] = useState<TimeLog[]>([]);

    const fetchTimeLogs = async () => {
        const {data} = await getTimeLogs();
        setTimeLogs(data); // ✅ adjust depending on ApiResponse shape
    };

    const updateTimeLog = async (timeLog: TimeLog, updatedTimeLog: TimeLog) => {
        const res = await editTimeLog(timeLog, updatedTimeLog)
        if (res && res.status === 200) {
            // Replace the old timelog with the updated one in state
            setTimeLogs((prev) =>
                prev.map((tl) => (tl.id === timeLog.id ? res.data : tl))
            );
        }
    }

    // Load on mount
    useEffect(() => {
        fetchTimeLogs();
    }, []);

    return (
        <TimeLogContext.Provider
            value={{timeLogs, updateTimeLog}}
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
