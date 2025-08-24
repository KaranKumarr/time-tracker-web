"use client"
import React from 'react';
import Navbar from "@/components/core/Navbar";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/core/AppSidebar";
import {CategoryProvider} from "@/context/CategoryContext";
import {TimeLogProvider} from "@/context/TimeLogContext";

export default function Layout({
                                   children,
                               }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <CategoryProvider>
            <TimeLogProvider>
                <SidebarProvider>
                    <div className="flex flex-col w-full">
                        <Navbar/>
                        <div className="flex">
                            <AppSidebar/>
                            <SidebarInset>
                                {children}
                            </SidebarInset>
                        </div>
                    </div>
                </SidebarProvider>
            </TimeLogProvider>
        </CategoryProvider>
    );
};
