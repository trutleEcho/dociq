"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const testimonials = [
    {
        content: "DocsIQ transformed how we handle client documents. The tracking features are invaluable for understanding engagement.",
        author: "Aryan Bakle",
        role: "VP of Operations",
        company: "Mordern Painters",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    {
        content: "Security was our top concern. DocsIQ's encryption and access controls give us complete peace of mind.",
        author: "Anish Bachewar",
        role: "CEO",
        company: "Stealth startup",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    {
        content: "The analytics dashboard is incredible. We can finally measure document performance and optimize our content strategy.",
        author: "Aryan Saxena",
        role: "Freelancer",
        company: "Web3 product designer",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
]

export default function Testimonials() {
    return (
        <section className="border-y border-border py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        What our customers say
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Short, honest quotes. No fluff.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.author}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                        >
                            <Card className="h-full rounded-xl border border-border/60 bg-transparent p-6">
                                <div className="flex flex-col gap-5">
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        &#34;{testimonial.content}&#34;
                                    </p>

                                    <div className="flex items-center gap-3">
                                        {/*<img*/}
                                        {/*    src={testimonial.avatar}*/}
                                        {/*    alt={testimonial.author}*/}
                                        {/*    className="h-10 w-10 rounded-full object-cover"*/}
                                        {/*/>*/}
                                        <div className="text-sm">
                                            <div className="font-medium">{testimonial.author}</div>
                                            <div className="text-muted-foreground">
                                                {testimonial.role} · {testimonial.company}
                                            </div>
                                        </div>
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