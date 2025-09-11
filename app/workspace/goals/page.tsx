"use client"
import React, {useEffect, useState} from 'react';
import {useCategories} from "@/context/CategoryContext";
import CategoryList from "@/components/Category/CategoryList";
import GoalStatus from "@/lib/types/GoalStatus";

const Page = () => {

    const {categories} = useCategories()

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

        for (const cat of categories) {
            if (cat.status) {
                groups[cat.status].push(cat);
            }
        }
        setGrouped(groups);
    }, [categories]);

    return (
        <main className={'p-4 space-y-4'}>
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
                        <CategoryList key={status} categories={items} status={status as GoalStatus} />
                ) : null
            )}
        </main>
    );
};

export default Page;