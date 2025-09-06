import { Card } from "@/components/ui/card";
import {Clock, Target, BarChart3, Calendar, Zap, ListFilter, Download} from "lucide-react";

const Features = () => {
    const features = [
        {
            icon: Target,
            title: "Hour-Based Goals",
            description:
                "Set specific goals with hour targets. Whether it's 50 hours for JavaScript or 200 hours for a side project, track exactly what matters."
        },
        {
            icon: Clock,
            title: "Precise Time Tracking",
            description:
                "Start and stop timers with one click. Our smart tracking automatically categorizes your sessions and maintains accurate records."
        },
        {
            icon: BarChart3,
            title: "Progress Analytics",
            description:
                "Beautiful charts and insights show your velocity, consistency patterns, and goal completion rates over time."
        },
        {
            icon: ListFilter,
            title: "Detailed Session History",
            description:
                "Review all your past sessions in one place with exact start times, end times, and durations."
        },
        {
            icon: Calendar,
            title: "Activity Calendar",
            description:
                "Visualize your journey with a comprehensive calendar view. Plan sessions and track your consistency patterns."
        },
        {
            icon: Download,
            title: "Flexible Data Export",
            description:
                "Export your history in multiple formats like CSV or Excel. Keep backups, share progress, or analyze in your favorite tools."
        }
    ];


    return (
        <section id={'features'} className="py-24 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl max-md:w-full font-bold tracking-tight mb-6 max-md:text-center">
                        Everything You Need to
                        <span className="block text-primary">
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