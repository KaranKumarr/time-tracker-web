import GoalStatus from "@/lib/types/GoalStatus";

export default interface Category {
    id: number;
    name: string;
    description: string;
    goalHours: number;
    loggedMinutes: number;
    createdAt: string;
    status: GoalStatus;
    deadline: string;
}

