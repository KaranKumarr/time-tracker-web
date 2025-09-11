import React from 'react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Logo from "@/components/core/Logo";

const Navbar = () => {
    return (
        <nav className={'w-full border-b border-border min-h-16 flex flex-col'}>
            <main className={'container py-2 flex justify-between items-center flex-1'}>
               <Logo home={'/workspace'}/>
                <Avatar className={'hover:drop-shadow cursor-pointer hover:drop-shadow-accent-foreground transition-all duration-300 '}>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </main>
        </nav>
    );
};

export default Navbar;