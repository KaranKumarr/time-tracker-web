import * as React from "react"
import {ChevronDownIcon} from "lucide-react"

import {Button} from "@/components/ui/button"
import {Calendar} from "@/components/ui/calendar"
import {Input} from "@/components/ui/input"
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import {DateTime} from "luxon";

type DateTimePickerProps = {
    initialDate: string | null;
    onDateTimeChange: (date: string) => void;
}

export default function DateTimePicker({initialDate, onDateTimeChange}: DateTimePickerProps) {
    const [open, setOpen] = React.useState(false)
    const [date, setDate] = React.useState<Date | undefined>(initialDate ? DateTime.fromISO(initialDate).toJSDate() : undefined)
    const [time, setTime] = React.useState<string>(initialDate ?
        DateTime.fromISO(initialDate).toFormat("HH:mm:ss") : ""
    )

    return (
        <div className="flex space-x-1">
            <div className="flex flex-col gap-3">
                <Input
                    onChange={(event) => {
                        setTime(event.target.value) // only update time state
                        const dt = DateTime.fromJSDate(date ?? new Date());
                        // Merge current date with new time
                        const [hours, minutes, seconds] = event.target.value.split(":").map(Number);
                        const updated = dt.set({hour: hours, minute: minutes, second: seconds});
                        const newDate = updated.toISO({includeOffset: false})
                        setDate(updated.toJSDate());
                        if (newDate) {
                            onDateTimeChange(newDate);
                        }
                    }}
                    type="time"
                    id="time-picker"
                    step="1"
                    value={time}
                    className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                />
            </div>
            <div className="flex flex-col gap-3">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            id="date-picker"
                            className="w-32 justify-between font-normal"
                        >
                            {date ? date.toLocaleDateString() : "Select date"}
                            <ChevronDownIcon/>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                        <Calendar
                            defaultMonth={date ?? new Date()}
                            mode="single"
                            selected={date ?? new Date()}
                            captionLayout="dropdown"
                            onSelect={(date) => {
                                setDate(date)
                                const dt = DateTime.fromJSDate(date ?? new Date());
                                const [hours, minutes, seconds] = time.split(":").map(Number);
                                const updated = dt.set({hour: hours, minute: minutes, second: seconds});
                                const newDate = updated.toISO({includeOffset: false})
                                setDate(updated.toJSDate());
                                if (newDate) {
                                    onDateTimeChange(newDate);
                                }
                                if (time.length === 0) {
                                    setTime("00:00:00")
                                }
                                setOpen(false)
                            }}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}
