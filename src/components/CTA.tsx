"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export default function CTA() {
    const [email, setEmail] = useState("")

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault()
    //     // Handle form submission
    //     console.log("Email submitted:", email)
    // }

    return (
        <section id="contact" className="border-t border-border py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Start with DocsIQ today
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Try it free. No clutter.
                    </p>

                    <form action="https://formsubmit.co/dociq@lakshaykumar.com" method="POST" className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                        <Input
                            type="email"
                            placeholder="Work email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="h-12 rounded-xl border-border bg-background px-6 text-base sm:w-80"
                            required
                        />
                        <Button type="submit" size="lg" className="gap-2 rounded-xl">
                            Get Started
                            <ArrowRight className="h-5 w-5" />
                        </Button>
                    </form>

                    <div className="mt-4 text-sm text-muted-foreground">
                        No credit card required. (We will get back to you within 24 hours.)
                    </div>
                </motion.div>
            </div>
        </section>
    )
}