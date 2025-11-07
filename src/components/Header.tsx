"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import React from "react"
import Image from "next/image";

const navigation = [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
            <nav className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image src="/banner1.png" alt="DocsIQ Logo" width={200} height={50} />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden items-center gap-4 md:flex">
                    {/*<Button variant="ghost">Sign In</Button>*/}
                    <a className="rounded-xl bg-primary p-5 cursor-pointer" href="#contact" >Start Free Trial</a>
                </div>

                {/* Mobile Menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                        <div className="flex flex-col gap-6 py-6">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="mt-6 flex flex-col gap-3">
                                <Button variant="outline" className="w-full">Sign In</Button>
                                <Button className="w-full">Start Free Trial</Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    )
}
