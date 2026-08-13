"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Laptop,
  Music,
  Briefcase,
  Palette,
  Crown,
  Leaf,
  Sparkles,
  ArrowUpRight,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const categories = [
  {
    id: "tech",
    name: "Tech & AI Summits",
    count: "45+ Events",
    icon: Laptop,
    gradient: "from-[#4B5694]/30 to-[#7288AE]/20",
    border: "group-hover:border-[#EAE0CF]/50",
    iconColor: "text-[#EAE0CF]",
    description: "AI conferences, hackathons, and developer bootcamps.",
  },
  {
    id: "music",
    name: "Music & Live Concerts",
    count: "32+ Events",
    icon: Music,
    gradient: "from-[#4B5694]/30 to-[#7288AE]/20",
    border: "group-hover:border-[#EAE0CF]/50",
    iconColor: "text-[#EAE0CF]",
    description: "Indie gigs, electronic raves, and music festivals.",
  },
  {
    id: "business",
    name: "Business & Pitch Nights",
    count: "28+ Events",
    icon: Briefcase,
    gradient: "from-[#4B5694]/30 to-[#7288AE]/20",
    border: "group-hover:border-[#EAE0CF]/50",
    iconColor: "text-[#EAE0CF]",
    description: "Startup pitches, VC networking, and founder masterminds.",
  },
  {
    id: "design",
    name: "Design & Creative Arts",
    count: "38+ Events",
    icon: Palette,
    gradient: "from-[#4B5694]/30 to-[#7288AE]/20",
    border: "group-hover:border-[#EAE0CF]/50",
    iconColor: "text-[#EAE0CF]",
    description: "UI/UX design systems, 3D art, and graphic exhibitions.",
  },
  {
    id: "vip",
    name: "VIP Private Galas",
    count: "16+ Events",
    icon: Crown,
    gradient: "from-[#4B5694]/30 to-[#7288AE]/20",
    border: "group-hover:border-[#EAE0CF]/50",
    iconColor: "text-[#EAE0CF]",
    description: "Exclusive invite-only dinners and executive retreats.",
  },
  {
    id: "community",
    name: "Community & Green Eco",
    count: "24+ Events",
    icon: Leaf,
    gradient: "from-[#4B5694]/30 to-[#7288AE]/20",
    border: "group-hover:border-[#EAE0CF]/50",
    iconColor: "text-[#EAE0CF]",
    description: "Charity galas, tree plantation, and eco sustainability drives.",
  },
]

export default function CategoryShowcaseSection() {
  return (
    <section className="py-20 bg-[#0e143d] text-[#EAE0CF] relative overflow-hidden border-b border-[#7288AE]/25">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#4B5694]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <Badge className="bg-[#4B5694]/30 text-[#EAE0CF] border border-[#7288AE]/40 mb-3 px-3 py-1 text-xs">
              <Sparkles className="w-3 h-3 mr-1.5 text-[#EAE0CF]" />
              Browse by Category
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Explore What Matters To You
            </h2>
            <p className="mt-2 text-[#7288AE] text-base max-w-xl">
              Curated experiences designed to spark ideas, expand your network, and celebrate culture.
            </p>
          </div>

          <Link
            href="/events"
            className="mt-4 md:mt-0 inline-flex items-center text-sm font-semibold text-[#EAE0CF] hover:text-white transition-colors group"
          >
            View All Categories
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <Link
                  href={`/events?searchTerm=${encodeURIComponent(category.name.split(" ")[0])}`}
                  className={`group relative block rounded-2xl border border-[#7288AE]/30 bg-[#18225c]/50 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#4B5694]/20 ${category.border}`}
                >
                  {/* Card Background Gradient */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10`}
                  />

                  <div className="flex items-start justify-between">
                    <div className={`p-3.5 rounded-xl bg-[#4B5694]/40 border border-[#7288AE]/40 ${category.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#111844] text-[#EAE0CF] border border-[#7288AE]/40">
                      {category.count}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mt-5 group-hover:text-[#EAE0CF] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-[#7288AE] mt-1.5 line-clamp-2 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#7288AE]/20 flex items-center justify-between text-xs font-medium text-[#7288AE] group-hover:text-[#EAE0CF] transition-colors">
                    <span>Explore Events</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#EAE0CF]" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
