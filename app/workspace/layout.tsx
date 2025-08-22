"use client"
import React from 'react';
import Navbar from "@/components/core/Navbar";

export default function Layout({
                                   children,
                               }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <Navbar/>
            {children}
        </main>
    );
};
