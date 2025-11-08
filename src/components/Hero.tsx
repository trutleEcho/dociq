"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import React from "react"
import {Button} from "./ui/button";

export default function Hero() {
    return (
        <section className="relative overflow-hidden border-b border-border">
            {/* Ambient gradient + soft grid mask for a unique-but-minimal feel */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(600px 400px at 10% -10%, hsl(260 100% 60% / 0.12), transparent 60%), radial-gradient(900px 500px at 100% 120%, hsl(210 70% 60% / 0.08), transparent 60%)",
                }}
            />
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.4]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                    maskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
                }}
            />

            <div className="container relative mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-8"
                    >
                        <div className="relative">
                            {/* Big subtle number to create a distinct typographic signature */}
                            <div className="pointer-events-none absolute -top-30 -left-6 select-none text-8xl font-black tracking-tighter text-foreground/5 sm:text-9xl">
                                01
                            </div>
                            <h1 className="relative text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                                Share smarter. {" "}
                                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Track better.
                </span>
                            </h1>
                        </div>

                        <p className="max-w-xl text-lg text-muted-foreground">
                            Upload, share, and analyze your documents — all in one secure platform.
                        </p>

                        {/* Minimal CTAs */}
                        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                           <a href="#contact">
                               <Button size="lg" className="gap-2 rounded-xl">
                                   Get Started
                                   <ArrowRight className="h-5 w-5" />
                               </Button>
                           </a>
                            <a href="#contact">
                               <Button size="lg" variant="ghost" className="rounded-xl border border-border/60 hover:bg-background/50">
                                   Book a Demo
                               </Button>
                           </a>
                        </div>

                        {/* Tiny descriptor pills for clarity without visual noise */}
                        <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
                            {["Upload", "Share", "Restrict", "Brand", "Measure"].map((t) => (
                                <span key={t} className="rounded-full border border-border/60 px-3 py-1">
                  {t}
                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Visual: Looping marquee of capabilities (distinctive yet minimal) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 shadow-xl">
                            {/* Soft inner glow */}
                            <div className="pointer-events-none absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-primary/15 to-purple-500/15 blur-xl" />

                            {/* Corner accents */}
                            <div className="pointer-events-none absolute left-6 top-6 h-6 w-6 rounded-md border border-border/60" />
                            <div className="pointer-events-none absolute right-6 bottom-6 h-6 w-6 rounded-md border border-border/60" />

                            {/* Marquee */}
                            <div className="relative w-full overflow-hidden">
                                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-card to-transparent" />
                                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-card to-transparent" />
                                <div className="flex">
                                    {/** Track duplicated for seamless loop */}
                                    {[0, 1].map((track) => (
                                        <motion.div
                                            key={track}
                                            className="flex min-w-max items-center gap-3 pr-6"
                                            animate={{ x: ["0%", "-50%"] }}
                                            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                                        >
                                            {["Upload", "Share", "Track", "Secure", "Brand", "Restrict", "Measure"].map((item) => (
                                                <div
                                                    key={`${track}-${item}`}
                                                    className="rounded-xl border border-border/70 bg-background/40 px-5 py-3 text-sm backdrop-blur-sm"
                                                >
                                                    {item}
                                                </div>
                                            ))}
                                            {["Upload", "Share", "Track", "Secure", "Brand", "Restrict", "Measure"].map((item) => (
                                                <div
                                                    key={`dup-${track}-${item}`}
                                                    className="rounded-xl border border-border/70 bg-background/40 px-5 py-3 text-sm backdrop-blur-sm"
                                                >
                                                    {item}
                                                </div>
                                            ))}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Subtle caption */}
                            <div className="mt-6 text-center text-sm text-muted-foreground">
                                Built for clarity — no fluff.
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}