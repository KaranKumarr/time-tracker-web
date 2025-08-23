"use client"
import React from 'react';
import Navbar from "@/components/core/Navbar";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/core/AppSidebar";

export default function Layout({
                                   children,
                               }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
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
    );
};
