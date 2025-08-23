import Category from "@/lib/types/Category";

export default interface TimeLog {
    id: number;
    description: string;
    durationMinutes: number | null;
    category:Category;
    startTime: string;
    endTime: string | null;
}

