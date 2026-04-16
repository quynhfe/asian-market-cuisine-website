// ─────────────────────────────────────────────────────────────────────────────
// Menu Page — assembles all sections
// ─────────────────────────────────────────────────────────────────────────────
import MenuHeroSection from "@/components/sections/menu/MenuHeroSection";
import MenuTabsSection from "@/components/sections/menu/MenuTabsSection";

export default function MenuPage() {
  return (
    <main className="w-full overflow-hidden">
      <MenuHeroSection />
      <MenuTabsSection />
    </main>
  );
}
