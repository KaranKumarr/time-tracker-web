enum GoalStatus {
    ACTIVE = "ACTIVE",       // currently in progress
    COMPLETED = "COMPLETED", // finished successfully
    ARCHIVED = "ARCHIVED",   // hidden but not deleted
    EXPIRED = "EXPIRED",     // deadline passed without completion
}

export default GoalStatus;