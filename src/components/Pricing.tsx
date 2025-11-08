"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
    {
        name: "Starter",
        price: "Free",
        description: "For individuals",
        features: [
            "Up to 20 documents",
            "1GB storage",
            "Basic analytics",
            "Email support",
        ],
    },
    {
        name: "Professional",
        price: "$49",
        description: "For growing teams",
        special_discount: "($19 first month)",
        features: [
            "Unlimited documents",
            "100GB storage",
            "Advanced analytics",
            "Priority support",
            "Custom branding",
        ],
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For organizations",
        features: [
            "Unlimited storage",
            "Dedicated support",
            "SLA guarantee",
            "Custom integrations",
            "Advanced security",
        ],
    },
]

export default function Pricing() {
    return (
        <section className="py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Pricing
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Simple plans. Clear value.
                    </p>
                </motion.div>

                <div className="mt-14 grid gap-6 lg:grid-cols-3">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                        >
                            <Card className="relative h-full rounded-xl border border-border/60 bg-transparent p-6">
                                <div className="flex flex-col gap-5">
                                    <div>
                                        <h3 className="text-xl font-semibold">{plan.name}</h3>
                                        <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
                                    </div>

                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-semibold">{plan.price}</span>
                                        {plan.price !== "Custom" && (
                                            <span className="text-xs text-muted-foreground">/month</span>
                                        )}
                                    </div>
                                    {plan.special_discount && (
                                        <p className="mt-1 font-thin text-sm">{plan.special_discount}</p>
                                    )}

                                    <Button
                                        className="w-full rounded-xl"
                                        variant={plan.popular ? "default" : "outline"}
                                        size="lg"
                                    >
                                        <a href="#contact">{plan.price === "Custom" ? "Contact Sales" : "Get Started"}</a>
                                    </Button>

                                    <div className="space-y-3 pt-4">
                                        {plan.features.map((feature) => (
                                            <div key={feature} className="flex items-start gap-3">
                                                <div className="mt-0.5 rounded-full border border-border/60 p-1">
                                                    <Check className="h-3.5 w-3.5 text-muted-foreground" />
                                                </div>
                                                <span className="text-sm text-muted-foreground">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}