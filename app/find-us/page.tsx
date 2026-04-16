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
    <main className="pt-20 md:pt-28 lg:pt-36 pb-16 md:pb-24 px-4 md:px-8 lg:px-12 w-full overflow-hidden">
      <FindUsHeroSection />
      <FindUsBentoSection />
      <FindUsDigitalPortalSection />
      <FindUsCtaSection />
      <FindUsAtmosphereSection />
    </main>
  );
}
