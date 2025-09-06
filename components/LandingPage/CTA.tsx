import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
    return (
        <section className="py-24 px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Card className="relative overflow-hidden bg-gradient-primary p-12 lg:p-16 text-center border-0 shadow-glow">
                    {/* Background effects */}
                    <div className="absolute inset-0 bg-gradient-primary opacity-90" />
                    <div className="absolute top-0 left-1/4 w-32 h-32 bg-foreground/10 rounded-full blur-2xl" />
                    <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-foreground/10 rounded-full blur-2xl" />

                    <div className="relative z-10">
                        <div className="flex justify-center mb-6">
                            <div className="flex items-center space-x-2 bg-foreground/10 backdrop-blur-sm rounded-full px-4 py-2">
                                <Sparkles className="w-4 h-4 tebg-foreground" />
                                <span className="text-sm font-medium tebg-foreground">Start your journey today</span>
                            </div>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold tebg-foreground mb-6">
                            Ready to Turn Time Into
                            <span className="block">Expertise?</span>
                        </h2>

                        <p className="text-xl tebg-foreground/90 mb-8 max-w-2xl mx-auto">
                            Join thousands of learners who've transformed their ambitions into measurable skills. Start tracking your first learning goal today.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="text-lg px-8 py-6"
                            >
                                Get Started Free
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="lg"
                                className="text-lg px-8 py-6 tebg-foreground border bordbg-foreground/20 hover:bg-foreground/10"
                            >
                                Schedule Demo
                            </Button>
                        </div>

                        <div className="mt-8 text-sm tebg-foreground/70">
                            No credit card required • Free forever plan available
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default CTA;