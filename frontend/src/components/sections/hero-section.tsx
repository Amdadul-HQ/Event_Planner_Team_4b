"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Calendar,
  Sparkles,
  Users,
  Search,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap,
  MapPin,
  Flame,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HeroSection() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState<"all" | "free" | "paid">("all")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (searchTerm) params.set("searchTerm", searchTerm)
    if (filterType === "free") params.set("isPaid", "false")
    if (filterType === "paid") params.set("isPaid", "true")
    router.push(`/events?${params.toString()}`)
  }

  return (
    <section className="relative overflow-hidden bg-[#111844] text-[#EAE0CF] py-20 lg:py-28">
      {/* Background glowing gradients & mesh using #4B5694 and #7288AE */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-gradient-to-tr from-[#4B5694]/30 via-[#7288AE]/20 to-[#111844]/10 blur-[130px]" />
        <div className="absolute top-1/3 -left-40 h-[450px] w-[450px] rounded-full bg-[#4B5694]/25 blur-[120px]" />
        <div className="absolute bottom-10 right-0 h-[500px] w-[500px] rounded-full bg-[#7288AE]/20 blur-[140px]" />

        {/* Ambient grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#7288AE15_1px,transparent_1px),linear-gradient(to_bottom,#7288AE15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Hero Content */}
          <motion.div
            className="text-center lg:text-left lg:col-span-7"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#7288AE]/40 bg-[#4B5694]/20 text-[#EAE0CF] text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(75,86,148,0.25)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#EAE0CF] animate-pulse" />
              <span>Next-Gen Event Experience Platform</span>
              <span className="flex h-1.5 w-1.5 rounded-full bg-[#EAE0CF] animate-ping" />
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 text-white">
              Create, Discover & Experience{" "}
              <span className="bg-gradient-to-r from-[#EAE0CF] via-[#7288AE] to-[#EAE0CF] bg-clip-text text-transparent underline decoration-[#4B5694]/50 decoration-wavy underline-offset-8">
                Extraordinary Events
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#7288AE] max-w-2xl mx-auto lg:mx-0 mb-8 font-normal leading-relaxed">
              From tech summits and live festivals to VIP private masterminds. Seamlessly host, monetize, and attend world-class experiences with instant ticket management.
            </p>

            {/* Interactive Search Bar */}
            <motion.form
              onSubmit={handleSearch}
              className="mb-8 p-2 rounded-2xl bg-[#18225c]/80 border border-[#7288AE]/40 backdrop-blur-xl shadow-2xl max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1 flex items-center">
                  <Search className="absolute left-3.5 h-4 w-4 text-[#7288AE]" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search summits, workshops, concerts..."
                    className="w-full bg-transparent pl-10 pr-3 py-2.5 text-sm text-[#EAE0CF] placeholder-[#7288AE] focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-1.5 border-t sm:border-t-0 sm:border-l border-[#7288AE]/30 pt-2 sm:pt-0 sm:pl-2">
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value as any)}
                    className="bg-[#111844] text-[#EAE0CF] text-xs rounded-lg px-2.5 py-2 border border-[#7288AE]/40 focus:outline-none focus:ring-1 focus:ring-[#4B5694]"
                  >
                    <option value="all">All Types</option>
                    <option value="free">Free Access</option>
                    <option value="paid">Paid & VIP</option>
                  </select>

                  <Button
                    type="submit"
                    className="bg-[#4B5694] hover:bg-[#5f6cb5] text-[#EAE0CF] text-xs font-semibold px-4 py-2 rounded-xl shadow-lg shadow-[#4B5694]/30 transition-all duration-200"
                  >
                    Find Events
                  </Button>
                </div>
              </div>
            </motion.form>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                className="bg-[#EAE0CF] text-[#111844] hover:bg-[#f5efe4] font-bold px-7 rounded-xl shadow-xl shadow-[#EAE0CF]/10 group transition-all duration-300"
                asChild
              >
                <Link href="/events">
                  Explore All Events
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-[#7288AE]/50 bg-[#18225c]/50 hover:bg-[#18225c] text-[#EAE0CF] font-semibold px-6 rounded-xl backdrop-blur-sm"
                asChild
              >
                <Link href="/dashboard/create-event">
                  <Zap className="mr-2 h-4 w-4 text-[#EAE0CF]" />
                  Host an Event
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#7288AE]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#EAE0CF]" />
                <span className="text-[#EAE0CF]/90">Instant Ticket Issuance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#7288AE]" />
                <span className="text-[#EAE0CF]/90">Secure SSL Checkout</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="h-4 w-4 text-[#7288AE]" />
                <span className="text-[#EAE0CF]/90">50k+ Active Members</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Glass Showcase Card */}
          <motion.div
            className="lg:col-span-5 relative mx-auto w-full max-w-lg lg:max-w-none"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#4B5694]/40 to-[#7288AE]/30 rounded-3xl blur-2xl -z-10" />

            {/* Main Featured Showcase Card */}
            <div className="relative rounded-3xl overflow-hidden border border-[#7288AE]/40 bg-[#18225c]/90 backdrop-blur-2xl shadow-2xl">
              {/* Image Banner */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#111844]">
                <Image
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80"
                  alt="Global AI & Tech Summit"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111844] via-[#111844]/40 to-transparent" />

                {/* Badges on Image */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <Badge className="bg-[#4B5694]/90 text-[#EAE0CF] font-semibold border-0 px-2.5 py-1 text-xs backdrop-blur-md flex items-center gap-1 shadow-lg">
                    <Flame className="h-3.5 w-3.5 text-[#EAE0CF]" />
                    Trending Summit
                  </Badge>
                  <Badge className="bg-[#EAE0CF] text-[#111844] border-0 font-bold text-xs px-3 py-1 shadow-lg">
                    $150.00
                  </Badge>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="flex items-center gap-2 text-xs text-[#EAE0CF] mb-1">
                    <span className="inline-flex items-center gap-1 bg-[#111844]/80 px-2 py-0.5 rounded-full border border-[#7288AE]/40 backdrop-blur-md">
                      <Calendar className="h-3 w-3 text-[#7288AE]" />
                      Upcoming in 7 Days
                    </span>
                    <span className="inline-flex items-center gap-1 bg-[#111844]/80 px-2 py-0.5 rounded-full border border-[#7288AE]/40 backdrop-blur-md">
                      <Users className="h-3 w-3 text-[#EAE0CF]" />
                      1.4k Attending
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-snug drop-shadow-sm">
                    Global AI & Tech Innovation Summit 2026
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between text-xs text-[#7288AE]">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#EAE0CF] shrink-0" />
                    <span className="truncate max-w-[220px] text-[#EAE0CF]/90">Moscone Center, San Francisco</span>
                  </div>
                  <span className="text-[#EAE0CF] font-semibold">★ 5.0 (24 Reviews)</span>
                </div>

                <div className="pt-2 border-t border-[#7288AE]/30 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-full bg-[#4B5694] border border-[#7288AE]/40 flex items-center justify-center font-bold text-xs text-[#EAE0CF]">
                      SC
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Sarah Chen</p>
                      <p className="text-[10px] text-[#7288AE]">Verified Organizer</p>
                    </div>
                  </div>

                  <Button
                    size="sm"
                    className="bg-[#4B5694] hover:bg-[#5f6cb5] text-[#EAE0CF] text-xs font-semibold rounded-xl"
                    asChild
                  >
                    <Link href="/events">View Event</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Floating Widget 1: Instant Approval */}
            <motion.div
              className="absolute -top-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#111844]/95 border border-[#7288AE]/40 backdrop-blur-xl shadow-2xl"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <div className="h-10 w-10 rounded-xl bg-[#4B5694]/30 border border-[#7288AE]/50 flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-[#EAE0CF]" />
              </div>
              <div>
                <p className="text-[11px] font-medium text-[#7288AE]">Instant Access</p>
                <p className="text-xs font-bold text-[#EAE0CF]">Ticket Confirmed ⚡</p>
              </div>
            </motion.div>

            {/* Floating Widget 2: Satisfaction Score */}
            <motion.div
              className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#111844]/95 border border-[#7288AE]/40 backdrop-blur-xl shadow-2xl"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
            >
              <div className="h-10 w-10 rounded-xl bg-[#4B5694]/30 border border-[#7288AE]/50 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-[#EAE0CF]" />
              </div>
              <div>
                <p className="text-[11px] font-medium text-[#7288AE]">Host Rating</p>
                <p className="text-xs font-bold text-[#EAE0CF]">99.8% Satisfaction</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Hero Stats Strip */}
        <motion.div
          className="mt-16 pt-10 border-t border-[#7288AE]/25 grid grid-cols-2 gap-6 md:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            { value: "10,000+", label: "Events Hosted", desc: "Across 25+ categories" },
            { value: "50,000+", label: "Active Members", desc: "Global attendees & hosts" },
            { value: "100+", label: "Global Cities", desc: "In-person & online streams" },
            { value: "$2M+", label: "Payments Processed", desc: "100% secure escrow" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 rounded-2xl bg-[#18225c]/50 border border-[#7288AE]/30 backdrop-blur-sm text-center sm:text-left transition-all hover:bg-[#18225c]/80 hover:border-[#7288AE]/60"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-[#EAE0CF]">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-white mt-1">{stat.label}</p>
              <p className="text-xs text-[#7288AE] mt-0.5">{stat.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
