"use client"

import { motion } from "framer-motion"
import { Calendar, CreditCard, Star, Users } from "lucide-react"

export default function StatsSection() {
  const stats = [
    {
      icon: Calendar,
      value: "10,000+",
      label: "Events Hosted",
      description: "Across tech, music, business & private retreats",
      color: "text-[#EAE0CF]",
      bg: "bg-[#4B5694]/30",
      border: "border-[#7288AE]/40",
    },
    {
      icon: Users,
      value: "50,000+",
      label: "Active Community Members",
      description: "Engaged event creators and attendees",
      color: "text-[#EAE0CF]",
      bg: "bg-[#4B5694]/30",
      border: "border-[#7288AE]/40",
    },
    {
      icon: CreditCard,
      value: "$2,000,000+",
      label: "Payments Processed",
      description: "Encrypted, frictionless transaction volume",
      color: "text-[#EAE0CF]",
      bg: "bg-[#4B5694]/30",
      border: "border-[#7288AE]/40",
    },
    {
      icon: Star,
      value: "99.8%",
      label: "Satisfaction Rating",
      description: "Over 8,500 verified organizer & guest reviews",
      color: "text-[#EAE0CF]",
      bg: "bg-[#4B5694]/30",
      border: "border-[#7288AE]/40",
    },
  ]

  return (
    <section className="py-20 bg-[#0e143d] text-[#EAE0CF] relative overflow-hidden border-t border-b border-[#7288AE]/25">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-3xl border border-[#7288AE]/30 bg-[#18225c]/50 p-6 backdrop-blur-xl transition-all duration-300 hover:border-[#7288AE]/60 hover:shadow-xl hover:shadow-[#4B5694]/25"
              >
                <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} border ${stat.border} flex items-center justify-center mb-5`}>
                  <Icon className="h-6 w-6 text-[#EAE0CF]" />
                </div>
                <h3 className="text-3xl font-extrabold text-[#EAE0CF] tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-sm font-semibold text-white mt-1">
                  {stat.label}
                </p>
                <p className="text-xs text-[#7288AE] mt-1 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
