"use client"
import React, {useEffect, useState} from 'react';
import {useCategories} from "@/context/CategoryContext";
import CategoryList from "@/components/Category/CategoryList";
import GoalStatus from "@/lib/types/GoalStatus";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import CategoryDialog from "@/components/Category/CategoryDialog";

const Page = () => {

    const {categories, handleCreateCategory} = useCategories()

    const [grouped, setGrouped] = useState<Record<GoalStatus, typeof categories>>({
        [GoalStatus.ACTIVE]: [],
        [GoalStatus.COMPLETED]: [],
        [GoalStatus.ARCHIVED]: [],
        [GoalStatus.EXPIRED]: [],
    });

    useEffect(() => {
        const groups: Record<GoalStatus, typeof categories> = {
            [GoalStatus.ACTIVE]: [],
            [GoalStatus.COMPLETED]: [],
            [GoalStatus.ARCHIVED]: [],
            [GoalStatus.EXPIRED]: [],
        };

        const now = new Date();

        for (const cat of categories) {
            let status = cat.status;

            // if not completed and has a deadline in the past → show as EXPIRED
            if (
                status !== GoalStatus.COMPLETED &&
                status !== GoalStatus.ARCHIVED &&
                cat.deadline &&
                new Date(cat.deadline) < now
            ) {
                status = GoalStatus.EXPIRED;
            }

            groups[status].push(cat);
        }

        setGrouped(groups);
    }, [categories]);


    return (
        <main className={'p-4 space-y-4 relative'}>
            <header>
                <h2>
                    Goals
                </h2>
                <p>
                    Set clear goals and track your progress over time.
                </p>
            </header>

            {Object.entries(grouped).map(([status, items]) =>
                items.length > 0 ? (
                    <CategoryList key={status} categories={items} status={status as GoalStatus}/>
                ) : null
            )}


            <CategoryDialog
                initialCategory={{
                    id: 0,
                    name: "",
                    description: "",
                    goalHours: 0,
                    loggedMinutes: 0,
                    createdAt: "",
                    deadline: null,
                    status: GoalStatus.ACTIVE,
                }}
                title="Create Category"
                onSubmit={(cat) => {
                    handleCreateCategory(cat)
                }}
            >
                <Button size={'lg'} className={'fixed right-0 bottom-0 m-12'}>
                    <Plus/>
                </Button>
            </CategoryDialog>
        </main>
    );
};

export default Page;