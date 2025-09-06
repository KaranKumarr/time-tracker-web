"use client"
import React, {useEffect, useState} from 'react';
import AddNewTimeLog from "@/components/TimeLog/AddNewTimeLog";
import TimeLogsList from "@/components/TimeLog/TimeLogsList";
import {useTimeLogs} from "@/context/TimeLogContext";
import {useRouter, useSearchParams} from "next/navigation";
import Pagination from "@/components/TimeLog/Pagination";

const Page = () => {

    const {total, loadTimeLogs} = useTimeLogs();
    const params = useSearchParams();
    const router = useRouter();

    const [page, setPage] = useState(Number(params.get("page") || 1));
    const size = Number(params.get("size") || 10); // no need for useState

    useEffect(() => {
        loadTimeLogs({page, size});
        const q = new URLSearchParams(params.toString());
        q.set("page", String(page));
        q.set("size", String(size));
        router.replace(`/workspace?${q.toString()}`);
    }, [page, size]);

    useEffect(() => {
        if (page > Math.max(1, Math.ceil(total / size))) {
            setPage(Math.max(1, Math.ceil(total / size)));
        }
    }, [total, page, size]);

    return (
        <main className={'p-4'}>
            <AddNewTimeLog/>
            <TimeLogsList/>
            <Pagination page={page} pageSize={size} totalItems={total} onPageChange={(newPage) => {
                console.log(newPage)
                setPage(newPage)
            }}/>
        </main>
    );
};

export default Page;