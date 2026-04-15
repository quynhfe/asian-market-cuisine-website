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
    <main className="pt-32">
      <StoryHeroSection />
      <StoryAwardSection />
      <ChefStorySection />
      <PhilosophySection />
      <MeetTheFamilySection />
      <TestimonialCarouselSection />
    </main>
  );
}
