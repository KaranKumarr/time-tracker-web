import { Card } from "@/components/ui/card";
import { Clock, Target, BarChart3, Trophy, Calendar, Zap } from "lucide-react";

const Features = () => {
    const features = [
        {
            icon: Target,
            title: "Hour-Based Goals",
            description: "Set specific learning goals with hour targets. Whether it's 50 hours for JavaScript or 200 hours for fluent Spanish, track exactly what matters."
        },
        {
            icon: Clock,
            title: "Precise Time Tracking",
            description: "Start and stop timers with one click. Our smart tracking automatically categorizes your learning sessions and maintains accurate records."
        },
        {
            icon: BarChart3,
            title: "Progress Analytics",
            description: "Beautiful charts and insights show your learning velocity, consistency patterns, and goal completion rates over time."
        },
        {
            icon: Trophy,
            title: "Achievement System",
            description: "Celebrate milestones with achievements and badges. Stay motivated with streaks, weekly targets, and completion rewards."
        },
        {
            icon: Calendar,
            title: "Learning Calendar",
            description: "Visualize your learning journey with a comprehensive calendar view. Plan sessions and track your consistency patterns."
        },
        {
            icon: Zap,
            title: "Smart Reminders",
            description: "Intelligent notifications keep you on track without being annoying. Customize reminders based on your learning schedule."
        }
    ];

    return (
        <section id={'features'} className="py-24 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                        Everything You Need to
                        <span className="block bg-gradient-primary bg-clip-text text-primary">
              Master Your Goals
            </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Powerful features designed to transform your learning ambitions into measurable progress.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300 hover:scale-105">
                                <div className="mb-6">
                                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                        <Icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;