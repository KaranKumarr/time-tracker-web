import { Separator } from "@/components/ui/separator";
import Logo from "@/components/core/Logo";

const Footer = () => {
    const footerLinks = [
        { name: "Features", href: "#features" },
        { name: "How it Works", href: "#how-it-works" },
        { name: "Pricing", href: "#pricing" },
        { name: "About Us", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Mobile App", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" }
    ];

    return (
        <footer className="bg-card border-t border-border">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-16">
                    <div className="grid lg:grid-cols-7 gap-12">
                        {/* Brand Section */}
                        <div className="lg:col-span-3">
                            <Logo home={'/'}/>
                            <p className="text-muted-foreground mb-6 max-w-sm">
                                Transform your learning journey with hour-based goal tracking. Turn time into expertise, one hour at a time.
                            </p>
                        </div>

                        <div className="lg:col-span-4">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-8">
                                {footerLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                <Separator />

                {/* Bottom Footer */}
                <div className="py-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        © 2025 time2skill. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-6 mt-4 md:mt-0">
                        <span className="text-sm text-muted-foreground">Made with ❤️ for learners worldwide</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;