import CategoryShowcaseSection from "@/components/sections/category-showcase-section";
import CtaSection from "@/components/sections/cta-section";
import EventTypesSection from "@/components/sections/event-types-section";
import FaqSection from "@/components/sections/faq-section";
import FeaturedEventsSection, { Event } from "@/components/sections/featured-events-section";
import HeroSection from "@/components/sections/hero-section";
import HowItWorksSection from "@/components/sections/how-it-works-section";
import NewsletterSection from "@/components/sections/newsletter-section";
import StatsSection from "@/components/sections/stats-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

const HomePage = ({ events }: { events: Event[] }) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#111844] text-[#EAE0CF]">
      <main>
        <Suspense fallback={<div className="h-96 flex items-center justify-center bg-[#111844]"><Loader2 className="h-8 w-8 text-[#4B5694] animate-spin" /></div>}>
          <HeroSection />
        </Suspense>

        <Suspense fallback={<div className="h-96 flex items-center justify-center bg-[#111844]"><Loader2 className="h-8 w-8 text-[#4B5694] animate-spin" /></div>}>
          <CategoryShowcaseSection />
        </Suspense>

        <Suspense fallback={<div className="h-96 flex items-center justify-center bg-[#111844]"><Loader2 className="h-8 w-8 text-[#4B5694] animate-spin" /></div>}>
          <FeaturedEventsSection events={events} />
        </Suspense>

        <Suspense fallback={<div className="h-96 flex items-center justify-center bg-[#111844]"><Loader2 className="h-8 w-8 text-[#4B5694] animate-spin" /></div>}>
          <EventTypesSection />
        </Suspense>

        <Suspense fallback={<div className="h-96 flex items-center justify-center bg-[#111844]"><Loader2 className="h-8 w-8 text-[#4B5694] animate-spin" /></div>}>
          <HowItWorksSection />
        </Suspense>

        <Suspense fallback={<div className="h-96 flex items-center justify-center bg-[#111844]"><Loader2 className="h-8 w-8 text-[#4B5694] animate-spin" /></div>}>
          <StatsSection />
        </Suspense>

        <Suspense fallback={<div className="h-96 flex items-center justify-center bg-[#111844]"><Loader2 className="h-8 w-8 text-[#4B5694] animate-spin" /></div>}>
          <TestimonialsSection />
        </Suspense>

        <Suspense fallback={<div className="h-96 flex items-center justify-center bg-[#111844]"><Loader2 className="h-8 w-8 text-[#4B5694] animate-spin" /></div>}>
          <FaqSection />
        </Suspense>

        <Suspense fallback={<div className="h-96 flex items-center justify-center bg-[#111844]"><Loader2 className="h-8 w-8 text-[#4B5694] animate-spin" /></div>}>
          <NewsletterSection />
        </Suspense>

        <Suspense fallback={<div className="h-96 flex items-center justify-center bg-[#111844]"><Loader2 className="h-8 w-8 text-[#4B5694] animate-spin" /></div>}>
          <CtaSection />
        </Suspense>
      </main>
    </div>
  );
};

export default HomePage;