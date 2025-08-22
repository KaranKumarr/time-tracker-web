import React from 'react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

const Navbar = () => {
    return (
        <nav className={'w-full border-b border-border'}>
            <main className={'container py-2 flex justify-between items-center'}>

                <a className={'w-min text-primary'} href={'/workspace'}>
                    <h2 className={'!w-max font-normal'}>t-Tracking</h2>
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