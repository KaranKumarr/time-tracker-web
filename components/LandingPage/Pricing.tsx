import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
    const plans = [
        {
            name: "Free",
            price: "€0",
            period: "forever",
            description: "Perfect for getting started with goal tracking",
            features: [
                "Track unlimited skills",
                "Up to 6 active goals at once",
                "Basic stats (daily totals, streak)",
                "Local data export (CSV/JSON)"
            ],
            cta: "Get Started Free",
            popular: false
        },
        {
            name: "Lifetime",
            price: "€24",
            period: "one-time",
            description: "Best value for long-term learners",
            features: [
                "All features from Monthly",
                "One-time payment, no subscription",
                "Lifetime updates",
                "Priority feature requests"
            ],
            cta: "Buy Lifetime Access",
            popular: true
        },
        {
            name: "Monthly",
            price: "€8",
            period: "per month",
            description: "For learners who want full features and flexibility",
            features: [
                "Unlimited learning goals",
                "Advanced progress visualizations",
                "Priority support",
                "Dark mode & personalization"
            ],
            cta: "Start Monthly Plan",
            popular: false
        },

    ];


    return (
        <section id={'pricing'} className="py-24 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                        Simple Pricing for
                        <span className="block text-primary">Every Learner</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Start free and upgrade when you're ready. All plans include our core tracking features.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <Card key={index} className={`relative p-8 ${plan.popular ? 'border-primary shadow-glow' : 'border-border'}`}>
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="flex items-center space-x-1 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                                        <Star className="w-4 h-4" />
                                        <span>Most Popular</span>
                                    </div>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-semibold mb-2 max-md:w-full max-md:text-center">{plan.name}</h3>
                                <div className="mb-4">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="text-muted-foreground ml-2">/{plan.period}</span>
                                </div>
                                <p className="text-muted-foreground">{plan.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center space-x-3">
                                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                                variant={plan.popular ? "default" : "outline"}
                            >
                                {plan.cta}
                            </Button>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-muted-foreground mb-4">All plans include a 14-day free trial</p>
                    <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
                        <span>✓ No setup fees</span>
                        <span>✓ Cancel anytime</span>
                        <span>✓ 30-day money back</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;