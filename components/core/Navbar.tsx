import React from 'react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Clock} from "lucide-react";

const Navbar = () => {
    return (
        <nav className={'w-full border-b border-border min-h-16 flex flex-col'}>
            <main className={'container py-2 flex justify-between items-center flex-1'}>
                <a href={'/workspace'} className="flex items-center relative z-50">
                    <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary"/>
                    </div>
                    <span className="text-xl ">time<span className={' font-bold text-primary'}>2</span>skill</span>
                </a>
                <Avatar className={'hover:drop-shadow cursor-pointer hover:drop-shadow-accent-foreground transition-all duration-300 '}>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </main>
        </nav>
    );
};

export default Navbar;