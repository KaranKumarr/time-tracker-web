"use client"

import { Button } from "@/components/ui/button";
import { Clock, Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href={'/'} className="flex items-center">
                        <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                            <Clock className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-xl ">time<span className={' font-bold text-primary'}>2</span>skill</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                            Features
                        </a>
                        <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                            How it Works
                        </a>
                        <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                            Pricing
                        </a>
                        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                            About
                        </a>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="ghost">Sign In</Button>
                        <Button variant="default">Get Started</Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <Menu className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-border">
                        <div className="px-4 py-6 space-y-4">
                            <a href="#features" className="block text-muted-foreground hover:text-foreground transition-colors">
                                Features
                            </a>
                            <a href="#how-it-works" className="block text-muted-foreground hover:text-foreground transition-colors">
                                How it Works
                            </a>
                            <a href="#pricing" className="block text-muted-foreground hover:text-foreground transition-colors">
                                Pricing
                            </a>
                            <a href="#about" className="block text-muted-foreground hover:text-foreground transition-colors">
                                About
                            </a>
                            <div className="pt-4 space-y-2">
                                <Button variant="ghost" className="w-full">Sign In</Button>
                                <Button variant="default" className="w-full">Get Started</Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;