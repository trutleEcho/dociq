"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"
import React from "react";

const stats = [
    { label: "Views", value: "847K" },
    { label: "Active Users", value: "2.4K" },
    { label: "Documents", value: "15.8K" },
    { label: "Downloads", value: "142K" },
]

export default function Analytics() {
    return (
        <section className="py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4 text-center relative"
                >
                    <div className="pointer-events-none absolute -top-16 -left-6 select-none text-8xl font-black tracking-tighter text-foreground/5 sm:text-9xl">
                        04
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">
                        <TrendingUp className="h-3.5 w-3.5" />
                        Analytics
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Analytics, at a glance
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Clear numbers. No noise.
                    </p>
                </motion.div>

                <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-16 items-start">
                    {/* Left: Compact stat blocks */}
                    <motion.div
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {stats.map((s, i) => (
                            <Card
                                key={s.label}
                                className="rounded-xl border border-border/60 bg-transparent p-5"
                            >
                                <div className="text-xs text-muted-foreground">{s.label}</div>
                                <div className="mt-2 text-2xl font-semibold">{s.value}</div>
                            </Card>
                        ))}
                    </motion.div>

                    {/* Right: Minimal bar chart */}
                    <motion.div
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        <Card className="rounded-xl border border-border/60 bg-transparent p-6">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium">Document Views</h3>
                                    <div className="text-xs text-muted-foreground">Last 30 days</div>
                                </div>
                                <div className="flex h-32 items-end gap-2">
                                    {[40, 65, 45, 80, 55, 70, 85, 60, 75, 90, 70, 95].map((height, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${height}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.45, delay: 0.2 + index * 0.04 }}
                                            className="flex-1 rounded-sm bg-primary/60"
                                        />
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}