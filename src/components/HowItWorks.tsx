"use client"

import { motion } from "framer-motion"
import { Upload, Share2, BarChart3 } from "lucide-react"
import React from "react";

const steps = [
    {
        icon: Upload,
        step: "01",
        title: "Upload",
        description: "Drag and drop your files. We handle the rest.",
    },
    {
        icon: Share2,
        step: "02",
        title: "Share",
        description: "Secure links with permissions and expiry.",
    },
    {
        icon: BarChart3,
        step: "03",
        title: "Track",
        description: "See views and engagement in real-time.",
    },
]

export default function HowItWorks() {
    return (
        <section className="border-t border-border py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center relative"
                >
                    <div className="pointer-events-none absolute -top-16 -left-6 select-none text-8xl font-black tracking-tighter text-foreground/5 sm:text-9xl">
                        03
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">How it works</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Three steps. Zero friction.
                    </p>
                </motion.div>

                <div className="mt-14 grid gap-10 lg:grid-cols-3">
                    {steps.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.06 }}
                                className="flex items-start gap-4"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-border/60 text-muted-foreground">
                                    <Icon className="h-5 w-5" />
                                </div>

                                <div className="space-y-1.5">
                                    <div className="text-xs font-semibold text-muted-foreground">STEP {step.step}</div>
                                    <h3 className="text-lg font-semibold">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground">{step.description}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}