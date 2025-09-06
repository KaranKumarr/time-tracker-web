import { Button } from "@/components/ui/button";
import { Clock, Target, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-productivity.png";

const Hero = () => {
    return (
        <section id={'hero'} className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-secondary" />

            {/* Glow effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <div className="text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start mb-6">
                            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border">
                                <Clock className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-muted-foreground">Time-based learning goals</span>
                            </div>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                            Master Any
                            <span className="block bg-gradient-primary bg-clip-text text-primary">
                Skill in Hours
              </span>
                        </h1>

                        <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                            Set hour-based learning goals like &#34;Learn German A1 – 100 hours&#34; and track your progress with precision. Turn time into expertise.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="lg" className="text-lg px-8 py-6">
                                Start Learning
                            </Button>
                            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                                Watch Demo
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="flex justify-center lg:justify-start mt-12 space-x-8">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">10K+</div>
                                <div className="text-sm text-muted-foreground">Learning Hours</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">2.5K+</div>
                                <div className="text-sm text-muted-foreground">Active Learners</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">94%</div>
                                <div className="text-sm text-muted-foreground">Goal Completion</div>
                            </div>
                        </div>
                    </div>

                    {/* Right image */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-glow">
                            <img
                                src={'https://images8.alphacoders.com/112/1125196.jpg'}
                                alt="Productivity workspace showing time tracking and learning progress"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 bg-card/90 backdrop-blur-sm rounded-xl p-4 border border-border shadow-card">
                            <div className="flex items-center space-x-3">
                                <Target className="w-6 h-6 text-primary" />
                                <div>
                                    <div className="font-semibold text-sm">German A1</div>
                                    <div className="text-xs text-muted-foreground">45/100 hours</div>
                                </div>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2 mt-2">
                                <div className="bg-primary h-2 rounded-full" style={{width: '45%'}}></div>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-sm rounded-xl p-4 border border-border shadow-card">
                            <div className="flex items-center space-x-3">
                                <TrendingUp className="w-6 h-6 text-primary" />
                                <div>
                                    <div className="font-semibold text-sm">+2.5h today</div>
                                    <div className="text-xs text-muted-foreground">Great progress!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;