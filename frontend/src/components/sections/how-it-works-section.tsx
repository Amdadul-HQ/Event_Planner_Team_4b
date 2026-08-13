"use client"

import { motion } from "framer-motion"
import {
  CalendarPlus,
  Share2,
  UsersRound,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const steps = [
  {
    number: "01",
    title: "Design & Publish",
    tagline: "Live in under 2 minutes",
    description:
      "Choose between Public or Private, configure optional ticketing fees, set event venue or live virtual stream links, and customize custom registration rules.",
    icon: CalendarPlus,
  },
  {
    number: "02",
    title: "Promote & Manage Guests",
    tagline: "Direct invites & instant approval",
    description:
      "Send direct email invitations to VIP members, review pending join requests, collect instant payments, and manage your attendee roster with 1-click controls.",
    icon: Share2,
  },
  {
    number: "03",
    title: "Host & Build Community",
    tagline: "Seamless check-ins & reviews",
    description:
      "Scan attendee tickets at the door, deliver unforgettable live experiences, collect verified reviews, and establish your loyal community of recurring attendees.",
    icon: UsersRound,
  },
]

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-[#111844] text-[#EAE0CF] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#4B5694]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-[#4B5694]/30 text-[#EAE0CF] border border-[#7288AE]/40 mb-3 px-3 py-1 text-xs">
            <Sparkles className="w-3 h-3 mr-1.5 text-[#EAE0CF]" />
            Simple 3-Step Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            How EvenTora Works
          </h2>
          <p className="mt-3 text-[#7288AE] text-base sm:text-lg">
            A frictionless platform built for organizers and attendees alike. From planning to execution in three intuitive steps.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative rounded-3xl border border-[#7288AE]/30 bg-[#18225c]/60 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#4B5694]/25 hover:border-[#7288AE]/60"
              >
                {/* Step Top */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-[#4B5694]/40 border border-[#7288AE]/40 text-[#EAE0CF] group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-3xl font-black text-[#7288AE]/50 group-hover:text-[#EAE0CF] transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#EAE0CF] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-[#EAE0CF]/80 mt-1">{step.tagline}</p>

                <p className="mt-3 text-xs sm:text-sm text-[#7288AE] leading-relaxed">
                  {step.description}
                </p>

                <div className="mt-6 pt-4 border-t border-[#7288AE]/25 flex items-center justify-between text-xs text-[#7288AE]">
                  <span className="flex items-center gap-1.5 text-[#EAE0CF] font-medium">
                    <ShieldCheck className="h-4 w-4 text-[#EAE0CF]" />
                    Automated & Secure
                  </span>
                  <Zap className="h-4 w-4 text-[#EAE0CF] group-hover:animate-bounce" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Button
            size="lg"
            className="bg-[#EAE0CF] text-[#111844] hover:bg-[#f5efe4] font-bold px-8 rounded-xl shadow-xl shadow-[#EAE0CF]/10 group"
            asChild
          >
            <Link href="/register">
              Start Creating Now — It's Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
