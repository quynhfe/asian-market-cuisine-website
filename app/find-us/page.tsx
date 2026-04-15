// ─────────────────────────────────────────────────────────────────────────────
// Find Us Page — assembles all sections
// ─────────────────────────────────────────────────────────────────────────────
import {
  FindUsHeroSection,
  FindUsBentoSection,
  FindUsDigitalPortalSection,
  FindUsCtaSection,
  FindUsAtmosphereSection,
} from "@/components/sections/find-us/FindUsSections";

export default function FindUsPage() {
  return (
    <main className="pt-32 md:pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <FindUsHeroSection />
      <FindUsBentoSection />
      <FindUsDigitalPortalSection />
      <FindUsCtaSection />
      <FindUsAtmosphereSection />
    </main>
  );
}
