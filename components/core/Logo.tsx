import React from 'react';
import {Clock} from "lucide-react";


function Logo({home}: { home: string }) {
    return (
        <a href={home} className="flex items-center relative z-50 Logo">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary"/>
            </div>
            <span className="text-xl  font-medium">
          time<span className={" font-bold text-primary"}>2</span>goal
        </span>
        </a>
    );
}

export default Logo;