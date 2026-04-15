// ── Home: Visit Us Section ────────────────────────────────────────────────────
export default function VisitUsSection() {
  return (
    <section className="py-16 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32 items-center">
        {/* Map image */}
        <div className="order-2 lg:order-1">
          <div className="h-[300px] md:h-[500px] w-full rounded-lg overflow-hidden contrast-125 editorial-shadow">
            <img
              alt="Da Nang Map"
              className="w-full h-full object-cover"
              src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/515590256_122147298134779385_259304247821687170_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&oh=00_Af25QOTOhk99DtRAHLWuftiBvPDX2pE_UNVwJEgKVrUr8w&oe=69D9E3B3"
            />
          </div>
        </div>

        {/* Info */}
        <div className="order-1 lg:order-2">
          <span className="font-label uppercase tracking-[0.2em] text-[10px] text-on-surface-variant mb-4 block">Location &amp; Hours</span>
          <h2 className="font-headline italic text-4xl md:text-6xl mb-8 md:mb-12">Visit Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 mb-12">
            {[
              { label: "Address", value: "49 Trần Văn Đán, Hòa Hải, Ngũ Hành Sơn, Da Nang, Vietnam" },
              { label: "Hours", value: "Mon–Sat: 11:00 AM – 9:00 PM (Closed Sundays)" },
            ].map(({ label, value }) => (
              <div key={label}>
                <h4 className="font-label uppercase tracking-widest text-[10px] md:text-xs text-secondary mb-2">{label}</h4>
                <p className="text-on-surface-variant text-base md:text-lg">{value}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <button className="w-full sm:w-auto bg-on-surface text-background px-10 py-4 rounded-full font-label uppercase tracking-[0.15em] text-xs flex items-center justify-center gap-3 hover:bg-primary transition-all">
              <span className="material-symbols-outlined text-sm">map</span>
              Get Directions
            </button>
            <button className="w-full sm:w-auto bg-secondary-container text-on-secondary-container px-10 py-4 rounded-full font-label uppercase tracking-[0.15em] text-xs flex items-center justify-center gap-3 hover:scale-105 transition-all">
              <span className="material-symbols-outlined text-sm">delivery_dining</span>
              Order on GrabFood
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
