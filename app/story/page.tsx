// ─────────────────────────────────────────────────────────────────────────────
// Story Page — assembles all sections; no business logic here
// ─────────────────────────────────────────────────────────────────────────────
import {
  StoryHeroSection,
  StoryAwardSection,
  ChefStorySection,
  PhilosophySection,
  MeetTheFamilySection,
} from "@/components/sections/story/StoryStaticSections";
import TestimonialCarouselSection from "@/components/sections/story/TestimonialCarouselSection";

export default function StoryPage() {
  return (
    <main className="w-full overflow-hidden pt-16 md:pt-20 lg:pt-24">
      <StoryHeroSection />
      <StoryAwardSection />
      <ChefStorySection />
      <PhilosophySection />
      <MeetTheFamilySection />
      <TestimonialCarouselSection />
    </main>
  );
}
