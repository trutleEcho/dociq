"use client"

import {useState} from "react"
import {motion} from "framer-motion"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea"
import {Calendar as CalendarComponent} from "@/components/ui/calendar"
import {Calendar, Check, CalendarIcon} from "lucide-react"
import Link from "next/link"
import {format} from "date-fns"
import {cn} from "@/lib/utils"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area"
import Header from "@/components/Header";

export default function BookDemoPage() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        datetime: null as Date | null,
        message: "",
    })
    const [errors, setErrors] = useState({
        name: "",
        company: "",
        email: "",
        datetime: "",
    })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const {name, value} = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))

        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }))
        }
    }

    const handleDateSelect = (date: Date | undefined) => {
        if (date) {
            setFormData((prev) => ({
                ...prev,
                datetime: date,
            }))
            setErrors((prev) => ({
                ...prev,
                datetime: "",
            }))
        }
    }

    const handleTimeChange = (type: "hour" | "minute" | "ampm", value: string) => {
        const currentDate = formData.datetime || new Date()
        const newDate = new Date(currentDate)

        if (type === "hour") {
            const hour = parseInt(value, 10)
            const currentHours = newDate.getHours()
            const isPM = currentHours >= 12
            newDate.setHours(isPM ? (hour === 12 ? 12 : hour + 12) : (hour === 12 ? 0 : hour))
        } else if (type === "minute") {
            newDate.setMinutes(parseInt(value, 10))
        } else if (type === "ampm") {
            const hours = newDate.getHours()
            if (value === "AM" && hours >= 12) {
                newDate.setHours(hours - 12)
            } else if (value === "PM" && hours < 12) {
                newDate.setHours(hours + 12)
            }
        }

        setFormData((prev) => ({
            ...prev,
            datetime: newDate,
        }))
        setErrors((prev) => ({
            ...prev,
            datetime: "",
        }))
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen">
                <Header/>

                <section className="relative overflow-hidden">
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            backgroundImage:
                                "radial-gradient(600px 400px at 50% 50%, hsl(260 100% 60% / 0.12), transparent 60%)",
                        }}
                    />

                    <div className="container relative mx-auto px-4 py-32 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{opacity: 0, scale: 0.95}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.5}}
                            className="mx-auto max-w-2xl text-center"
                        >
                            <div
                                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-border/60 bg-card/50">
                                <Check className="h-8 w-8 text-primary"/>
                            </div>

                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                Demo Booked!
                            </h1>

                            <p className="mt-4 text-lg text-muted-foreground">
                                Thank you for your interest in DocsIQ. We&#39;ll reach out to you shortly at{" "}
                                <span className="font-medium text-foreground">{formData.email}</span> to confirm your
                                demo session.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
                                <Button size="lg" asChild className="rounded-xl">
                                    <Link href="/">Back to Home</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        )
    }

    return (
        <div className="min-h-screen">
            <Header/>

            <section className="relative overflow-hidden border-b border-border pt-[3rem]">
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage:
                            "radial-gradient(600px 400px at 50% -10%, hsl(260 100% 60% / 0.12), transparent 60%)",
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

                <div className="container relative mx-auto px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
                    <div className="mx-auto max-w-2xl">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            className="text-center"
                        >
                            <div
                                className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 select-none text-8xl font-black tracking-tighter text-foreground/5 sm:text-9xl">
                                001
                            </div>

                            <div
                                className="relative mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4"/>
                                <span>Book Your Demo</span>
                            </div>

                            <h1 className="relative text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                Experience DocsIQ{" "}
                                <span
                                    className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                                    in Action
                                </span>
                            </h1>

                            <p className="mt-4 text-lg text-muted-foreground">
                                Schedule a personalized demo and discover how DocsIQ can transform your document
                                workflow.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.1}}
                            className="mt-12"
                        >
                            <div
                                className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-8 shadow-xl sm:p-10">
                                <div
                                    className="pointer-events-none absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-primary/15 to-purple-500/15 blur-xl"/>

                                <form action="https://formsubmit.co/dociq@lakshaykumar.com" method="POST" className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name *</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className={cn(
                                                "rounded-xl border-border/60",
                                                errors.name && "border-red-500 focus-visible:ring-red-500"
                                            )}
                                        />
                                        {errors.name && (
                                            <p className="text-sm text-red-500">{errors.name}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="company">Company Name *</Label>
                                        <Input
                                            id="company"
                                            name="company"
                                            type="text"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Acme Inc."
                                            className={cn(
                                                "rounded-xl border-border/60",
                                                errors.company && "border-red-500 focus-visible:ring-red-500"
                                            )}
                                        />
                                        {errors.company && (
                                            <p className="text-sm text-red-500">{errors.company}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Work Email *</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@company.com"
                                            className={cn(
                                                "rounded-xl border-border/60",
                                                errors.email && "border-red-500 focus-visible:ring-red-500"
                                            )}
                                        />
                                        {errors.email && (
                                            <p className="text-sm text-red-500">{errors.email}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="datetime">Preferred Date & Time *</Label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    className={cn(
                                                        "w-full justify-start text-left font-normal rounded-xl border-border/60",
                                                        !formData.datetime && "text-muted-foreground",
                                                        errors.datetime && "border-red-500"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4"/>
                                                    {formData.datetime ? (
                                                        format(formData.datetime, "MM/dd/yyyy hh:mm aa")
                                                    ) : (
                                                        <span>Select date and time</span>
                                                    )}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <div className="sm:flex">
                                                    <CalendarComponent
                                                        mode="single"
                                                        selected={formData.datetime || undefined}
                                                        onSelect={handleDateSelect}
                                                        disabled={(date) => date < new Date()}
                                                        initialFocus
                                                    />
                                                    <div
                                                        className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
                                                        <ScrollArea className="w-64 sm:w-auto">
                                                            <div className="flex sm:flex-col p-2">
                                                                {Array.from({length: 12}, (_, i) => i + 1)
                                                                    .reverse()
                                                                    .map((hour) => (
                                                                        <Button
                                                                            key={hour}
                                                                            size="icon"
                                                                            type="button"
                                                                            variant={
                                                                                formData.datetime &&
                                                                                (formData.datetime.getHours() % 12 || 12) === hour
                                                                                    ? "default"
                                                                                    : "ghost"
                                                                            }
                                                                            className="sm:w-full shrink-0 aspect-square"
                                                                            onClick={() =>
                                                                                handleTimeChange("hour", hour.toString())
                                                                            }
                                                                        >
                                                                            {hour}
                                                                        </Button>
                                                                    ))}
                                                            </div>
                                                            <ScrollBar
                                                                orientation="horizontal"
                                                                className="sm:hidden"
                                                            />
                                                        </ScrollArea>
                                                        <ScrollArea className="w-64 sm:w-auto">
                                                            <div className="flex sm:flex-col p-2">
                                                                {Array.from({length: 12}, (_, i) => i * 5).map(
                                                                    (minute) => (
                                                                        <Button
                                                                            key={minute}
                                                                            size="icon"
                                                                            type="button"
                                                                            variant={
                                                                                formData.datetime &&
                                                                                formData.datetime.getMinutes() === minute
                                                                                    ? "default"
                                                                                    : "ghost"
                                                                            }
                                                                            className="sm:w-full shrink-0 aspect-square"
                                                                            onClick={() =>
                                                                                handleTimeChange("minute", minute.toString())
                                                                            }
                                                                        >
                                                                            {minute.toString().padStart(2, "0")}
                                                                        </Button>
                                                                    )
                                                                )}
                                                            </div>
                                                            <ScrollBar
                                                                orientation="horizontal"
                                                                className="sm:hidden"
                                                            />
                                                        </ScrollArea>
                                                        <ScrollArea className="">
                                                            <div className="flex sm:flex-col p-2">
                                                                {["AM", "PM"].map((ampm) => (
                                                                    <Button
                                                                        key={ampm}
                                                                        size="icon"
                                                                        type="button"
                                                                        variant={
                                                                            formData.datetime &&
                                                                            ((ampm === "AM" &&
                                                                                    formData.datetime.getHours() < 12) ||
                                                                                (ampm === "PM" &&
                                                                                    formData.datetime.getHours() >= 12))
                                                                                ? "default"
                                                                                : "ghost"
                                                                        }
                                                                        className="sm:w-full shrink-0 aspect-square"
                                                                        onClick={() => handleTimeChange("ampm", ampm)}
                                                                    >
                                                                        {ampm}
                                                                    </Button>
                                                                ))}
                                                            </div>
                                                        </ScrollArea>
                                                    </div>
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                        {errors.datetime && (
                                            <p className="text-sm text-red-500">{errors.datetime}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message (Optional)</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your use case or any specific questions you have..."
                                            rows={4}
                                            className="rounded-xl border-border/60 resize-none"
                                            maxLength={500}
                                        />
                                        <p className="text-xs text-muted-foreground text-right">
                                            {formData.message.length}/500 characters
                                        </p>
                                    </div>

                                    {formData.datetime && (
                                        <input
                                            type="hidden"
                                            name="datetime"
                                            value={format(formData.datetime, "yyyy-MM-dd hh:mm aa")}
                                        />
                                    )}

                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={isSubmitting}
                                        className="w-full rounded-xl text-white"
                                    >
                                        {isSubmitting ? "Booking..." : "Book Demo"}
                                    </Button>

                                    <p className="text-center text-sm text-muted-foreground">
                                        We&#39;ll reach out within 24 hours to confirm your session.
                                    </p>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}