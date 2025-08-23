"use client"
import React from 'react';
import AddNewTimeLog from "@/components/TimeLog/AddNewTimeLog";
import TimeLogsList from "@/components/TimeLog/TimeLogsList";

const Page = () => {

    return (
        <main className={'p-4'}>
            <AddNewTimeLog/>
            <TimeLogsList/>
        </main>
    );
};

export default Page;