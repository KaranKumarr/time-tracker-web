import { Card } from "@/components/ui/card";
import { ArrowRight, Target, Play, BarChart3 } from "lucide-react";

const HowItWorks = () => {
    const steps = [
        {
            step: "01",
            icon: Target,
            title: "Set Your Goal",
            description: "Define what you want to learn and how many hours you'll commit. Be specific: 'Master React.js - 120 hours' or 'Conversational French - 80 hours'."
        },
        {
            step: "02",
            icon: Play,
            title: "Start Tracking",
            description: "Hit the timer when you begin learning. Whether it's watching tutorials, reading, or practicing - every minute counts toward your goal."
        },
        {
            step: "03",
            icon: BarChart3,
            title: "Monitor Progress",
            description: "Watch your progress bars fill up and analyze your learning patterns. Celebrate milestones and adjust your pace as needed."
        }
    ];

    return (
        <section id={'how-it-works'} className="py-24 px-6 lg:px-8 bg-gradient-secondary">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                        Simple Process,
                        <span className="block bg-gradient-primary bg-clip-text text-primary">
              Powerful Results
            </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Transform your learning journey in three simple steps. No complexity, just results.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        const isLast = index === steps.length - 1;

                        return (
                            <div key={index} className="relative">
                                <Card className="p-8 bg-card/50 backdrop-blur-sm border-border text-center relative z-10">
                                    <div className="mb-6">
                                        <div className="text-6xl font-bold text-primary/20 mb-4">{step.step}</div>
                                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                                            <Icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <h3 className="text-2xl font-semibold mb-4 max-md:text-center max-md:w-full">{step.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                    </div>
                                </Card>

                                {/* Arrow connector */}
                                {!isLast && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                                        <ArrowRight className="w-8 h-8 text-primary/40" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;