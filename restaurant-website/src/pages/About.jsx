import { chefs, history } from "../data/menu";

export default function About() {
  return (
    <div>
      <div className="bg-secondary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">About Us</h1>
          <p className="text-stone-400 max-w-xl mx-auto">
            Our story, our passion, our people
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium text-sm tracking-wider uppercase mb-2">
                Since {history.founded}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed whitespace-pre-line">
                {history.story}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=700&h=500&fit=crop"
                alt="Restaurant interior"
                className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />
            <div className="space-y-8">
              {history.milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`flex flex-col md:flex-row items-center gap-4 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white rounded-xl p-5 shadow-sm inline-block">
                      <span className="text-primary font-bold text-lg">{m.year}</span>
                      <p className="text-stone-600 mt-1">{m.event}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow z-10 shrink-0" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chefs */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm tracking-wider uppercase mb-2">
              The Talent
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Meet Our Chefs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chefs.map((chef) => (
              <div
                key={chef.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-lg transition-shadow"
              >
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{chef.name}</h3>
                  <p className="text-primary text-sm font-medium mb-1">{chef.title}</p>
                  <p className="text-xs text-stone-400 mb-3">{chef.specialty}</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{chef.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
