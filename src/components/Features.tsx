"use client"

import { motion } from "framer-motion"
import { Shield, BarChart3, Share2, Lock, Eye, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"
import React from "react";

const features = [
    {
        icon: Shield,
        title: "Military-Grade Security",
        description: "End-to-end encryption ensures your documents are protected at every step.",
    },
    {
        icon: BarChart3,
        title: "Real-Time Analytics",
        description: "Track views, downloads, and engagement with comprehensive analytics dashboards.",
    },
    {
        icon: Share2,
        title: "Smart Sharing",
        description: "Share documents with customizable permissions and expiration dates.",
    },
    {
        icon: Lock,
        title: "Access Control",
        description: "Granular permissions let you control exactly who can view, edit, or share.",
    },
    {
        icon: Eye,
        title: "View Tracking",
        description: "See who viewed your documents, when, and for how long in real-time.",
    },
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Upload and access your documents instantly with our global CDN.",
    },
]

export default function Features() {
    return (
        <section className="py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center relative"
                >
                    <div className="pointer-events-none absolute -top-16 -left-6 select-none text-8xl font-black tracking-tighter text-foreground/5 sm:text-9xl">
                        02
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        What you get
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Focused tools for secure sharing and insight.
                    </p>
                </motion.div>

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <Card className="h-full rounded-xl border border-border/60 bg-transparent p-6">
                                    <div className="space-y-3">
                                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/60 text-muted-foreground">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <h3 className="text-base font-medium">{feature.title}</h3>
                                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                                    </div>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}