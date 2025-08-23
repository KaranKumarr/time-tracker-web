import {DateTime, Duration} from "luxon";

export function formatTimeLogDate(time: string) {
    const dt = DateTime.fromISO(time);
    const now = DateTime.now();

    if (dt.year === now.year) {
        return dt.toFormat("ccc, MMM d"); // e.g. "Thu, Aug 22"
    } else {
        return dt.toFormat("ccc, MMM d, yyyy"); // e.g. "Thu, Aug 22, 2024"
    }
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
    const d = Duration.fromObject({ minutes: durationMinutes }).shiftTo("days", "hours", "minutes");

    if (d.days > 0) {
        return `${d.days}d+`;
    } else if (d.hours > 0) {
        return `${d.hours}h ${d.minutes}m`;
    } else {
        return `${d.minutes}m`;
    }
}