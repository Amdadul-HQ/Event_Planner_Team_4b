/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Star,
  Users,
  Sparkles,
  Lock,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export type Event = {
  id: string
  title: string
  description: string
  dateTime: string
  eventImgUrl: string
  venue: string
  isPublic: boolean
  isPaid: boolean
  fee: number
  creatorId: string
  createdAt: string
  updatedAt: string
  creator?: {
    id: string
    name: string
    email: string
    role: string
  }
  reviews?: Array<{
    id: string
    rating: number
    comment: string
  }>
  invitations?: Array<{
    id: string
    status: string
  }>
  participations?: Array<{
    id: string
    status: string
    paid: boolean
  }>
}

export default function FeaturedEventsSection({ events = [] }: { events?: Event[] }) {
  const [activeTab, setActiveTab] = useState<"all" | "upcoming" | "paid" | "free" | "private">("all")

  // Fallback demo events if none provided
  const allEvents = events.length > 0 ? events : []

  // Filter events based on active tab
  const filteredEvents = allEvents.filter((ev) => {
    const isUpcoming = new Date(ev.dateTime) >= new Date()
    if (activeTab === "upcoming") return isUpcoming
    if (activeTab === "paid") return ev.isPaid
    if (activeTab === "free") return !ev.isPaid
    if (activeTab === "private") return !ev.isPublic
    return true
  })

  // Format fee helper ($15000 cents -> $150.00)
  const formatFee = (fee: number) => {
    if (!fee || fee === 0) return "Free"
    const amount = fee > 500 ? fee / 100 : fee
    return `$${amount.toFixed(2)}`
  }

  // Calculate average rating
  const getRatingInfo = (reviews?: Array<{ rating: number }>) => {
    if (!reviews || reviews.length === 0) return { avg: "5.0", count: 0 }
    const total = reviews.reduce((acc, r) => acc + r.rating, 0)
    return { avg: (total / reviews.length).toFixed(1), count: reviews.length }
  }

  return (
    <section className="py-24 bg-[#111844] text-[#EAE0CF] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#4B5694]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#7288AE]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="bg-[#4B5694]/30 text-[#EAE0CF] border border-[#7288AE]/40 mb-3 px-3 py-1 text-xs">
            <Sparkles className="w-3 h-3 mr-1.5 text-[#EAE0CF]" />
            Curated Experiences
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Discover Extraordinary Events
          </h2>
          <p className="mt-3 text-[#7288AE] text-base sm:text-lg">
            Join the most anticipated summits, intimate masterminds, concerts, and hands-on workshops worldwide.
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Events" },
              { id: "upcoming", label: "🔥 Upcoming" },
              { id: "paid", label: "💎 Paid & VIP" },
              { id: "free", label: "✨ Free Access" },
              { id: "private", label: "🔒 Private Exclusive" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-[#4B5694] text-[#EAE0CF] shadow-lg shadow-[#4B5694]/40 scale-105 border border-[#7288AE]/50"
                    : "bg-[#18225c]/80 text-[#7288AE] hover:text-[#EAE0CF] hover:bg-[#18225c] border border-[#7288AE]/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <div className="text-center py-16 bg-[#18225c]/40 rounded-3xl border border-[#7288AE]/30">
            <p className="text-[#7288AE] text-base">No events found in this category.</p>
            <Button
              className="mt-4 bg-[#4B5694] hover:bg-[#5f6cb5] text-[#EAE0CF] text-xs font-semibold rounded-xl"
              onClick={() => setActiveTab("all")}
            >
              Show All Events
            </Button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredEvents.map((event, idx) => {
                const eventDate = new Date(event.dateTime)
                const ratingInfo = getRatingInfo(event.reviews)
                const participantCount =
                  (event.participations?.length || 0) +
                  (event.invitations?.filter((i) => i.status === "ACCEPTED").length || 0)

                return (
                  <motion.div
                    key={event.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="group"
                  >
                    <div className="h-full flex flex-col rounded-3xl border border-[#7288AE]/30 bg-[#18225c]/70 backdrop-blur-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#4B5694]/25 hover:border-[#7288AE]/60 transition-all duration-300 hover:-translate-y-2">
                      {/* Event Image Banner */}
                      <div className="relative h-52 w-full overflow-hidden bg-[#111844]">
                        <Image
                          src={event.eventImgUrl || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-108"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111844] via-[#111844]/30 to-transparent" />

                        {/* Top Badges */}
                        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            {event.isPublic ? (
                              <Badge className="bg-[#111844]/90 hover:bg-[#111844] text-[#EAE0CF] border border-[#7288AE]/40 text-[11px] font-semibold backdrop-blur-md flex items-center gap-1">
                                <Globe className="w-3 h-3 text-[#7288AE]" />
                                Public
                              </Badge>
                            ) : (
                              <Badge className="bg-[#111844]/90 hover:bg-[#111844] text-[#EAE0CF] border border-[#7288AE]/40 text-[11px] font-semibold backdrop-blur-md flex items-center gap-1">
                                <Lock className="w-3 h-3 text-[#7288AE]" />
                                Private
                              </Badge>
                            )}
                          </div>

                          <Badge
                            className={`text-xs font-bold px-3 py-1 border-0 backdrop-blur-md shadow-md ${
                              event.isPaid
                                ? "bg-[#4B5694] text-[#EAE0CF]"
                                : "bg-[#EAE0CF] text-[#111844]"
                            }`}
                          >
                            {formatFee(event.fee)}
                          </Badge>
                        </div>

                        {/* Bottom Tag */}
                        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-[#EAE0CF]">
                          <span className="inline-flex items-center gap-1 bg-[#111844]/80 px-2.5 py-1 rounded-full border border-[#7288AE]/30 text-[11px] backdrop-blur-md">
                            <Calendar className="w-3 h-3 text-[#7288AE]" />
                            {eventDate.toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>

                          <span className="inline-flex items-center gap-1 bg-[#111844]/80 px-2.5 py-1 rounded-full border border-[#7288AE]/30 text-[11px] backdrop-blur-md">
                            <Clock className="w-3 h-3 text-[#7288AE]" />
                            {eventDate.toLocaleTimeString("en-US", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      </div>

                      {/* Event Details Body */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-[#EAE0CF] transition-colors line-clamp-1">
                            {event.title}
                          </h3>

                          <p className="mt-2 text-xs sm:text-sm text-[#7288AE] line-clamp-2 leading-relaxed">
                            {event.description}
                          </p>

                          <div className="mt-4 flex items-center gap-1.5 text-xs text-[#7288AE]">
                            <MapPin className="w-3.5 h-3.5 text-[#EAE0CF] shrink-0" />
                            <span className="truncate text-[#EAE0CF]/80">{event.venue}</span>
                          </div>
                        </div>

                        {/* Creator & Review Stats */}
                        <div className="mt-6 pt-4 border-t border-[#7288AE]/25 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-7 w-7 rounded-full bg-[#4B5694] border border-[#7288AE]/40 flex items-center justify-center font-bold text-[11px] text-[#EAE0CF]">
                              {event.creator?.name?.slice(0, 2).toUpperCase() || "EV"}
                            </div>
                            <div className="text-left">
                              <p className="text-xs font-semibold text-white truncate max-w-[100px]">
                                {event.creator?.name || "Host"}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 text-xs text-[#EAE0CF] font-semibold">
                              <Star className="w-3.5 h-3.5 fill-[#EAE0CF] text-[#EAE0CF]" />
                              <span>{ratingInfo.avg}</span>
                            </div>

                            <div className="flex items-center gap-1 text-xs text-[#7288AE]">
                              <Users className="w-3.5 h-3.5 text-[#EAE0CF]" />
                              <span>{participantCount}</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Link */}
                        <div className="mt-4">
                          <Button
                            className="w-full bg-[#4B5694] hover:bg-[#5f6cb5] text-[#EAE0CF] text-xs font-semibold py-2.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 group/btn"
                            asChild
                          >
                            <Link href={`/events/${event.id}`}>
                              <span>View Full Details</span>
                              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1 text-[#EAE0CF]" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {/* View All CTA */}
        <div className="mt-14 text-center">
          <Button
            size="lg"
            className="bg-[#EAE0CF] text-[#111844] hover:bg-[#f5efe4] font-bold px-8 rounded-xl shadow-xl shadow-[#EAE0CF]/10 group"
            asChild
          >
            <Link href="/events">
              Explore All {allEvents.length} Events
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
