"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Mail, Sparkles, BellRing } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
      setTimeout(() => {
        setIsSubmitted(false)
      }, 4000)
    }
  }

  return (
    <section className="py-20 bg-[#111844] text-[#EAE0CF] relative overflow-hidden border-t border-[#7288AE]/25">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="mx-auto max-w-4xl rounded-3xl border border-[#7288AE]/35 bg-[#18225c]/80 p-8 sm:p-12 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#4B5694]/25 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <Badge className="bg-[#4B5694]/30 text-[#EAE0CF] border border-[#7288AE]/40 px-3 py-1 text-xs">
                <BellRing className="w-3 h-3 mr-1.5 text-[#EAE0CF]" />
                Never Miss a Major Event
              </Badge>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Get Weekly Curated Event Highlights
              </h2>

              <p className="text-sm text-[#7288AE] leading-relaxed">
                Join 25,000+ creators and event enthusiasts. Receive early-bird ticket alerts, exclusive VIP discount drops, and keynote announcements directly to your inbox.
              </p>

              {isSubmitted ? (
                <motion.div
                  className="flex items-center gap-2 p-3.5 rounded-xl bg-[#4B5694]/30 border border-[#EAE0CF]/40 text-[#EAE0CF] text-sm font-semibold"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#EAE0CF]" />
                  <span>You're subscribed! Check your inbox for your first weekly digest.</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 pt-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#7288AE]" />
                    <Input
                      type="email"
                      placeholder="Enter your email address..."
                      className="w-full pl-10 pr-3 py-5 rounded-xl bg-[#111844]/90 border-[#7288AE]/40 text-[#EAE0CF] placeholder-[#7288AE] focus:border-[#EAE0CF] focus:ring-1 focus:ring-[#4B5694]"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-[#EAE0CF] hover:bg-[#f5efe4] text-[#111844] font-bold px-6 py-5 rounded-xl shadow-lg shadow-[#EAE0CF]/10 transition-all shrink-0 text-sm"
                  >
                    Subscribe
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </form>
              )}

              <p className="text-[11px] text-[#7288AE]">
                🔒 Zero spam. Unsubscribe with 1-click anytime.
              </p>
            </div>

            <div className="md:col-span-5 hidden md:flex flex-col gap-3">
              <div className="p-4 rounded-2xl bg-[#111844]/60 border border-[#7288AE]/30 backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#4B5694]/40 text-[#EAE0CF]">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">VIP Early Bird Alerts</p>
                    <p className="text-[11px] text-[#7288AE]">Get notified 24h before public sale</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#111844]/60 border border-[#7288AE]/30 backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#4B5694]/40 text-[#EAE0CF]">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Curated Recommendations</p>
                    <p className="text-[11px] text-[#7288AE]">Events tailored to your interests</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
