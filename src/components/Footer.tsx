"use client"

import { Github, Twitter, Linkedin } from "lucide-react"
import React from "react"
import Image from "next/image";

const navigation = [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
]

// const navigation = {
//     product: [
//         { name: "Features", href: "#" },
//         { name: "Pricing", href: "#" },
//         // { name: "Security", href: "#" },
//         // { name: "Roadmap", href: "#" },
//     ],
//     company: [
//         { name: "About", href: "#" },
//         // { name: "Blog", href: "#" },
//         // { name: "Careers", href: "#" },
//         { name: "Contact", href: "#" },
//     ],
//     resources: [
//         // { name: "Documentation", href: "#" },
//         // { name: "API Reference", href: "#" },
//         { name: "Help Center", href: "#" },
//         { name: "Status", href: "#" },
//     ],
//     legal: [
//         { name: "Privacy", href: "#" },
//         { name: "Terms", href: "#" },
//         // { name: "Cookie Policy", href: "#" },
//         // { name: "Licenses", href: "#" },
//     ],
// }

const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "GitHub", icon: Github, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
]

export default function Footer() {
    return (
        <footer className="border-t border-border bg-card">
            <div className="container mx-auto">
                {/*<div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">*/}
                    {/*<div>*/}
                    {/*    <h3 className="text-sm font-semibold">Product</h3>*/}
                    {/*    <ul className="mt-4 space-y-3">*/}
                    {/*        {navigation.product.map((item) => (*/}
                    {/*            <li key={item.name}>*/}
                    {/*                <a*/}
                    {/*                    href={item.href}*/}
                    {/*                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"*/}
                    {/*                >*/}
                    {/*                    {item.name}*/}
                    {/*                </a>*/}
                    {/*            </li>*/}
                    {/*        ))}*/}
                    {/*    </ul>*/}
                    {/*</div>*/}

                    {/*<div>*/}
                    {/*    <h3 className="text-sm font-semibold">Company</h3>*/}
                    {/*    <ul className="mt-4 space-y-3">*/}
                    {/*        {navigation.company.map((item) => (*/}
                    {/*            <li key={item.name}>*/}
                    {/*                <a*/}
                    {/*                    href={item.href}*/}
                    {/*                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"*/}
                    {/*                >*/}
                    {/*                    {item.name}*/}
                    {/*                </a>*/}
                    {/*            </li>*/}
                    {/*        ))}*/}
                    {/*    </ul>*/}
                    {/*</div>*/}

                    {/*<div>*/}
                    {/*    <h3 className="text-sm font-semibold">Resources</h3>*/}
                    {/*    <ul className="mt-4 space-y-3">*/}
                    {/*        {navigation.resources.map((item) => (*/}
                    {/*            <li key={item.name}>*/}
                    {/*                <a*/}
                    {/*                    href={item.href}*/}
                    {/*                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"*/}
                    {/*                >*/}
                    {/*                    {item.name}*/}
                    {/*                </a>*/}
                    {/*            </li>*/}
                    {/*        ))}*/}
                    {/*    </ul>*/}
                    {/*</div>*/}

                    {/*<div>*/}
                    {/*    <h3 className="text-sm font-semibold">Legal</h3>*/}
                    {/*    <ul className="mt-4 space-y-3">*/}
                    {/*        {navigation.legal.map((item) => (*/}
                    {/*            <li key={item.name}>*/}
                    {/*                <a*/}
                    {/*                    href={item.href}*/}
                    {/*                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"*/}
                    {/*                >*/}
                    {/*                    {item.name}*/}
                    {/*                </a>*/}
                    {/*            </li>*/}
                    {/*        ))}*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                {/*</div>*/}

                <div className="pt-8">
                    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                        <div className="flex items-center gap-2">
                            <Image src="/banner1.png" alt="DocsIQ Logo" width={200} height={50} />
                        </div>

                        <div className="flex items-center gap-6">
                            {/*{socialLinks.map((social) => {*/}
                            {/*    const Icon = social.icon*/}
                            {/*    return (*/}
                            {/*        <a*/}
                            {/*            key={social.name}*/}
                            {/*            href={social.href}*/}
                            {/*            className="text-muted-foreground hover:text-foreground transition-colors"*/}
                            {/*            aria-label={social.name}*/}
                            {/*        >*/}
                            {/*            <Icon className="h-5 w-5" />*/}
                            {/*        </a>*/}
                            {/*    )*/}
                            {/*})}*/}
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
                        </div>
                    </div>

                    <div className="mt-8 text-center text-sm text-muted-foreground">
                        © {new Date().getFullYear()} DocsIQ. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}
