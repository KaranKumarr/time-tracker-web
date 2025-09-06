import {DateTime} from "luxon";

export function formatTimeLogDate(time: string) {
    const dt = DateTime.fromISO(time);
    const now = DateTime.now();

    if (dt.year === now.year) {
        return dt.toFormat("ccc, MMM d"); // e.g. "Thu, Aug 22"
    } else {
        return dt.toFormat("ccc, MMM d, yyyy"); // e.g. "Thu, Aug 22, 2024"
    }
}

export function generateTimeLogCode(
    id: number | string,
    dateString: string
): string {
    const date = new Date(dateString); // parse backend date string

    const month = String(date.getMonth() + 1).padStart(2, "0"); // 01-12
    const day = String(date.getDate()).padStart(2, "0");        // 01-31
    const idPart = String(id).padStart(2, "0");                 // pad at least 2 digits

    return `TL-${month}${day}-${idPart}`;
}

export function formatStartEndEndTime(startTime: string, endTime: string) {

    const endDate = DateTime.fromISO(endTime)
    const startDate = DateTime.fromISO(startTime)

    let timeString = startDate.toFormat("HH:mm");

    if(endDate.toFormat("dd/MM/yyyy") === startDate.toFormat("dd/MM/yyyy")) {
        timeString += " - " + endDate.toFormat("HH:mm");
    }else{
        timeString += " - " + endDate.toFormat("HH:mm, MMM d");
    }

    return timeString
}

export function formatMinutesDurationToHours(durationMinutes: number) {
    if (!Number.isFinite(durationMinutes) || durationMinutes < 0) durationMinutes = 0;

    const total = Math.floor(durationMinutes);

    if (total === 0) return "<1m";

    const days = Math.floor(total / 1440);               // 1440 = 24 * 60
    const hours = Math.floor((total % 1440) / 60);
    const minutes = total % 60;

    if (days > 0) return `${days}d+`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
}

export function formatAddNewLogTime (totalSeconds: number) {
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const secs = String(totalSeconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
};