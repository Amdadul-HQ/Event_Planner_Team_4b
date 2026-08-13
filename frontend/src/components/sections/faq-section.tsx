"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const faqs = [
  {
    question: "What event visibility & ticketing types does EvenTora support?",
    answer:
      "EvenTora supports 4 versatile formats: Public Free (instant 1-click RSVP for everyone), Public Paid (open to all with automated Stripe/SSLCommerz payment checkout), Private Free (invite-only or join requests requiring host manual approval), and Private Paid (exclusive VIP application + payment approval pipeline).",
  },
  {
    question: "How do ticket payments and organizer payouts work?",
    answer:
      "When an attendee registers for a paid event, payment is processed securely via SSL-encrypted gateways. For public paid events, digital tickets with QR codes are issued immediately upon successful payment. Hosts can monitor their balance and request instant payouts directly to their bank account.",
  },
  {
    question: "How does the Private Event approval pipeline work?",
    answer:
      "For private events, users submit a join request or enter via a direct email invitation link. As the organizer, you receive instant notifications in your dashboard where you can review applicant profiles and Approve or Reject with a single click.",
  },
  {
    question: "Can I send direct invitations to specific email addresses?",
    answer:
      "Yes! You can invite registered users or email contacts directly. Invitees receive an interactive notification and email with a 1-click RSVP button. For paid private events, invitees can pay and accept seamlessly.",
  },
  {
    question: "Is there a free tier for hosting non-commercial community events?",
    answer:
      "Yes! Free events are 100% free to create and join with zero platform fees. For paid events, a modest standard payment processing fee is applied at checkout to ensure top-grade infrastructure, escrow security, and ticket generation.",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-[#0e143d] text-[#EAE0CF] relative overflow-hidden border-t border-[#7288AE]/25">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-[#4B5694]/30 text-[#EAE0CF] border border-[#7288AE]/40 mb-3 px-3 py-1 text-xs">
            <Sparkles className="w-3 h-3 mr-1.5 text-[#EAE0CF]" />
            Got Questions?
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-[#7288AE] text-base sm:text-lg">
            Everything you need to know about hosting, joining, and monetizing events on EvenTora.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#18225c]/90 border-[#EAE0CF]/60 shadow-xl shadow-[#4B5694]/25"
                    : "bg-[#18225c]/40 border-[#7288AE]/30 hover:border-[#7288AE]/60 hover:bg-[#18225c]/70"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-xl border transition-transform duration-300 shrink-0 ${
                      isOpen
                        ? "bg-[#4B5694] text-[#EAE0CF] border-[#7288AE]/50 rotate-180"
                        : "bg-[#111844] text-[#7288AE] border-[#7288AE]/30"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-[#7288AE]/20 text-sm text-[#EAE0CF]/90 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
