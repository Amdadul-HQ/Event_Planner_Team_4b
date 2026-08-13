"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Lead Tech Conference Organizer",
    event: "Global AI & Tech Summit",
    comment:
      "EvenTora completely elevated how our team operates. The seamless payment escrow, instant ticket QR verification, and custom approval workflows saved us over 40 hours of manual coordination.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "2",
    name: "Alex Rivera",
    role: "Festival Director & Producer",
    event: "Annual Indie Music Festival",
    comment:
      "Having the capability to support both public paid festival tickets and exclusive private artist masterclasses under one unified dashboard has been a complete game changer for our business.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "3",
    name: "Emily Watson",
    role: "Executive Community Manager",
    event: "Founders Mountain Retreat",
    comment:
      "The private event approval pipeline is flawless. We can vet every executive application before confirming tickets, ensuring unmatched networking quality for our private retreats.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "4",
    name: "David Kim",
    role: "Full-Stack Instructor & Developer",
    event: "Next.js 15 Masterclass",
    comment:
      "From ticketing and reminders to live Q&A check-ins, the attendee feedback has been 100% positive. EvenTora is hands-down the most intuitive event software on the market.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [autoplay])

  const handlePrev = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const current = testimonials[activeIndex]

  return (
    <section className="py-24 bg-[#111844] text-[#EAE0CF] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#4B5694]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-[#4B5694]/30 text-[#EAE0CF] border border-[#7288AE]/40 mb-3 px-3 py-1 text-xs">
            <Sparkles className="w-3 h-3 mr-1.5 text-[#EAE0CF]" />
            Organizer & Attendee Voices
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Loved By Thousands Worldwide
          </h2>
          <p className="mt-3 text-[#7288AE] text-base sm:text-lg">
            Hear from industry leaders, creative hosts, and enthusiastic attendees who trust EvenTora.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="rounded-3xl border border-[#7288AE]/35 bg-[#18225c]/80 backdrop-blur-2xl p-8 sm:p-14 shadow-2xl relative">
            {/* Quote Icon */}
            <div className="absolute top-6 right-8 text-[#7288AE]/25">
              <Quote className="h-16 w-16" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#EAE0CF] text-[#EAE0CF]" />
                  ))}
                  <span className="ml-2 text-xs font-semibold text-[#7288AE]">
                    Verified Host Review
                  </span>
                </div>

                {/* Comment */}
                <p className="text-lg sm:text-2xl font-medium text-white leading-relaxed italic">
                  "{current.comment}"
                </p>

                {/* Author Info */}
                <div className="pt-6 border-t border-[#7288AE]/25 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-[#EAE0CF]/70 shadow-lg bg-[#111844]">
                      <Image
                        src={current.avatar}
                        alt={current.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-base font-bold text-white">{current.name}</h4>
                        <CheckCircle2 className="h-4 w-4 text-[#EAE0CF]" />
                      </div>
                      <p className="text-xs text-[#7288AE]">{current.role}</p>
                      <p className="text-[11px] text-[#EAE0CF] font-medium mt-0.5">
                        Host of {current.event}
                      </p>
                    </div>
                  </div>

                  {/* Navigation controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-3 rounded-xl bg-[#111844] hover:bg-[#4B5694] text-[#EAE0CF] border border-[#7288AE]/40 transition-all"
                      aria-label="Previous Testimonial"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-3 rounded-xl bg-[#111844] hover:bg-[#4B5694] text-[#EAE0CF] border border-[#7288AE]/40 transition-all"
                      aria-label="Next Testimonial"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveIndex(idx)
                  setAutoplay(false)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "w-8 bg-[#EAE0CF]" : "w-2 bg-[#7288AE]/40 hover:bg-[#7288AE]"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
