"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Zap, ShieldCheck, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section className="py-24 bg-[#0e143d] text-[#EAE0CF] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-[#7288AE]/40 bg-gradient-to-br from-[#4B5694]/40 via-[#18225c]/90 to-[#111844] p-8 sm:p-16 backdrop-blur-2xl shadow-2xl text-center"
        >
          {/* Ambient Glow Bubbles */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#4B5694]/30 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#7288AE]/25 rounded-full blur-[100px] pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#7288AE]/40 bg-[#4B5694]/30 text-[#EAE0CF] text-xs font-semibold mb-6 shadow-[0_0_20px_rgba(75,86,148,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-[#EAE0CF] animate-pulse" />
            <span>Launch Your Next Event in Minutes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-2xl mx-auto leading-tight">
            Ready to Create an{" "}
            <span className="bg-gradient-to-r from-[#EAE0CF] via-white to-[#7288AE] bg-clip-text text-transparent">
              Unforgettable Experience?
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#7288AE] max-w-xl mx-auto leading-relaxed">
            Join thousands of visionary organizers and passionate attendees connecting every day through EvenTora.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#EAE0CF] text-[#111844] hover:bg-[#f5efe4] font-bold px-8 py-6 rounded-2xl shadow-xl shadow-[#EAE0CF]/10 text-sm sm:text-base group transition-all duration-300"
              asChild
            >
              <Link href="/register">
                Get Started for Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-[#7288AE]/40 bg-[#111844]/60 hover:bg-[#111844] text-[#EAE0CF] font-semibold px-8 py-6 rounded-2xl text-sm sm:text-base backdrop-blur-md"
              asChild
            >
              <Link href="/events">
                Explore Marketplace
              </Link>
            </Button>
          </div>

          {/* Bottom Perks */}
          <div className="mt-12 pt-8 border-t border-[#7288AE]/25 flex flex-wrap items-center justify-center gap-8 text-xs text-[#7288AE]">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-[#EAE0CF]" />
              <span className="text-[#EAE0CF]/90">Instant Setup — No Credit Card Needed</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#7288AE]" />
              <span className="text-[#EAE0CF]/90">100% Encrypted Escrow Payouts</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-[#EAE0CF] fill-[#EAE0CF]" />
              <span className="text-[#EAE0CF]/90">4.9/5 Average User Satisfaction</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
