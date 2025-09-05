import api from "@/lib/api/axios";
import TimeLog, {CreateTimeLog} from "@/lib/types/TimeLog";

export async function getTimeLogs() {
    const res = await api.get("/timelog");
    return res.data;
}

export async function editTimeLog(timeLog: TimeLog, updatedTimeLog: TimeLog) {
    const updates: any = {}

    if (timeLog.description !== updatedTimeLog.description) {
        updates.description = updatedTimeLog.description;
    }
    if (timeLog.category !== updatedTimeLog.category) {
        updates.categoryId = updatedTimeLog.category.id;
    }
    if (timeLog.startTime !== updatedTimeLog.startTime) {
        updates.startTime = updatedTimeLog.startTime;
    }
    if (timeLog.endTime !== updatedTimeLog.endTime) {
        updates.endTime = updatedTimeLog.endTime;
    }
    try {
        const res = await api.patch("/timelog/" + timeLog.id, updates);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

export async function deleteTimeLog(id: number) {
    try {
        const res = await api.delete("/timelog/" + id);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

export async function createTimeLog(timeLog: CreateTimeLog) {

    const newLog:any = {
        ...timeLog
    }
    if(timeLog.category) {
        newLog.categoryId = timeLog.category?.id;
    }
    try {
        const res = await api.post("/timelog", newLog);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
