import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import HowItWorks from "@/components/HowItWorks"
import Analytics from "@/components/Analytics"
import Testimonials from "@/components/Testimonials"
import Pricing from "@/components/Pricing"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
import ScrollSection from "@/components/ScrollSection"

export default function Home() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <ScrollSection>
                    <Hero />
                </ScrollSection>
                <ScrollSection as="section" id="features">
                    <Features />
                </ScrollSection>
                <ScrollSection as="section" id="how-it-works">
                    <HowItWorks />
                </ScrollSection>
                <ScrollSection>
                    <Analytics />
                </ScrollSection>
                <ScrollSection as="section" id="testimonials">
                    <Testimonials />
                </ScrollSection>
                <ScrollSection as="section" id="pricing">
                    <Pricing />
                </ScrollSection>
                <ScrollSection>
                    <CTA />
                </ScrollSection>
            </main>
            <Footer />
        </div>
    )
}