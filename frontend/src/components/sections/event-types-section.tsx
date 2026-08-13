"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Globe,
  Lock,
  CreditCard,
  UserCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function EventTypesSection() {
  const [activeTab, setActiveTab] = useState("public-free")

  const eventTypes = [
    {
      id: "public-free",
      title: "Public Free Events",
      tagline: "Instant Access & Open Community Gatherings",
      badge: "Community Favorite",
      description:
        "Open to everyone worldwide with frictionless 1-click registration. Ideal for tech meetups, webinars, public workshops, and community fundraisers.",
      icon: Globe,
      features: [
        "Visible to all visitors & search engines",
        "Instant one-click registration & digital ticket",
        "No payment gateway setup required",
        "Real-time attendee roster & check-in QR scanner",
      ],
      flow: ["1. Discover Event", "2. 1-Click RSVP", "3. Receive Instant Ticket"],
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "public-paid",
      title: "Public Paid Events",
      tagline: "Monetized Conferences & Ticketed Summits",
      badge: "Highest Revenue",
      description:
        "Open to the public with secure integrated payment processing. Perfect for global conferences, industry conventions, concerts, and masterclasses.",
      icon: CreditCard,
      features: [
        "Worldwide discovery with instant checkout",
        "Automated SSL / Stripe card payment gateway",
        "Immediate ticket issuance upon payment confirmation",
        "Automatic revenue tracking & financial payouts",
      ],
      flow: ["1. Select Tickets", "2. Secure Checkout", "3. Verified Entry Pass"],
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "private-free",
      title: "Private Free Events",
      tagline: "Curated Guestlists & Approval Workflows",
      badge: "Exclusive Access",
      description:
        "Only accessible via direct invitation or host approval. Tailored for corporate all-hands, private masterminds, secret clubs, and VIP communities.",
      icon: Lock,
      features: [
        "Hidden or locked for non-invited members",
        "Join request system with host approval queue",
        "Direct email invitations with RSVP tracking",
        "Full guest verification and privacy controls",
      ],
      flow: ["1. Request Access / Invite", "2. Host Review", "3. Approved Access Pass"],
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "private-paid",
      title: "Private Paid Events",
      tagline: "Premium Masterclasses & Executive Dinners",
      badge: "High-Ticket VIP",
      description:
        "The gold standard for high-ticket experiences. Attendees request access or receive invitations, complete payment, and get approved by the host.",
      icon: UserCheck,
      features: [
        "Invite-only or application-based screening",
        "Integrated high-ticket payment verification",
        "Host dual-step approval before final confirmation",
        "Dedicated VIP attendee management & concierge",
      ],
      flow: ["1. Apply / Get Invited", "2. Complete VIP Payment", "3. Host Final Approval"],
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    },
  ]

  const activeEvent = eventTypes.find((e) => e.id === activeTab) || eventTypes[0]
  const ActiveIcon = activeEvent.icon

  return (
    <section className="py-24 bg-[#0e143d] text-[#EAE0CF] relative overflow-hidden border-t border-b border-[#7288AE]/25">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#4B5694]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge className="bg-[#4B5694]/30 text-[#EAE0CF] border border-[#7288AE]/40 mb-3 px-3 py-1 text-xs">
            <Sparkles className="w-3 h-3 mr-1.5 text-[#EAE0CF]" />
            Ultimate Flexibility
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Engineered For Every Event Format
          </h2>
          <p className="mt-3 text-[#7288AE] text-base sm:text-lg">
            Whether you are hosting an open community workshop or a $500 VIP executive dinner, our platform adapts to your exact business model.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12">
          {eventTypes.map((type) => {
            const Icon = type.icon
            const isSelected = activeTab === type.id
            return (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#18225c] border-[#EAE0CF] shadow-xl shadow-[#4B5694]/30 scale-102"
                    : "bg-[#18225c]/40 border-[#7288AE]/30 hover:border-[#7288AE]/60 hover:bg-[#18225c]/70"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`p-2.5 rounded-xl ${
                      isSelected ? "bg-[#4B5694] text-[#EAE0CF]" : "bg-[#111844] text-[#7288AE]"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  {isSelected && (
                    <span className="flex h-2 w-2 rounded-full bg-[#EAE0CF] animate-ping" />
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-snug">{type.title}</h4>
                  <p className="text-[11px] text-[#7288AE] mt-1">{type.badge}</p>
                </div>
              </button>
            )
          })}
        </div>

        {/* Active Tab Preview Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEvent.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl border border-[#7288AE]/30 bg-[#18225c]/80 backdrop-blur-2xl p-6 sm:p-10 max-w-5xl mx-auto shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Details & Features */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <Badge className="bg-[#4B5694]/40 text-[#EAE0CF] border border-[#7288AE]/40 px-3 py-1 text-xs font-semibold">
                    {activeEvent.badge}
                  </Badge>
                  <span className="text-xs text-[#7288AE] font-medium">{activeEvent.tagline}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeEvent.title}
                </h3>

                <p className="text-sm sm:text-base text-[#EAE0CF]/90 leading-relaxed">
                  {activeEvent.description}
                </p>

                {/* Feature Checklist */}
                <div className="space-y-3 pt-2">
                  {activeEvent.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 p-1 rounded-full bg-[#4B5694]/30 text-[#EAE0CF] shrink-0">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#EAE0CF]">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Workflow Timeline */}
                <div className="pt-4 border-t border-[#7288AE]/20">
                  <p className="text-xs font-semibold text-[#7288AE] uppercase tracking-wider mb-3">
                    Attendee Workflow
                  </p>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {activeEvent.flow.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-[#111844]/80 border border-[#7288AE]/30 text-[11px] font-semibold text-[#EAE0CF]"
                      >
                        {step}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    className="bg-[#4B5694] hover:bg-[#5f6cb5] text-[#EAE0CF] font-semibold rounded-xl text-xs px-6 py-2.5 shadow-lg shadow-[#4B5694]/30"
                    asChild
                  >
                    <Link href="/dashboard/create-event">
                      Host a {activeEvent.title.replace("Events", "Event")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Column: Visual Image Mockup */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden border border-[#7288AE]/40 shadow-2xl h-72 sm:h-80 w-full bg-[#111844]">
                  <Image
                    src={activeEvent.image}
                    alt={activeEvent.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111844] via-[#111844]/30 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#111844]/90 border border-[#7288AE]/40 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ActiveIcon className="h-4 w-4 text-[#EAE0CF]" />
                        <span className="text-xs font-bold text-white">{activeEvent.title}</span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#EAE0CF]">Live Preview</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
