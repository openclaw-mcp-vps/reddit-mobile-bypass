export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] flex flex-col items-center px-4 py-16">
      {/* Hero */}
      <section className="max-w-2xl w-full text-center mb-16">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          No app required
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
          Browse Reddit{" "}
          <span className="text-[#58a6ff]">without the nagging</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          A clean, fast mobile Reddit interface that strips away app download banners, pop-ups, and tracking. Just the content you came for.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Get Started — $3/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-2xl w-full grid grid-cols-3 gap-4 mb-16">
        {[
          { icon: "🚫", label: "No app banners" },
          { icon: "🎨", label: "Custom themes" },
          { icon: "🔒", label: "Privacy first" },
        ].map((f) => (
          <div key={f.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="text-sm text-[#8b949e]">{f.label}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm w-full mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-3 py-1 rounded-full">
            MOST POPULAR
          </div>
          <div className="text-4xl font-bold text-white mb-1">$3</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Clean Reddit browsing — no app prompts",
              "Ad-free experience",
              "Custom dark & light themes",
              "Reddit OAuth login",
              "Priority support",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl w-full mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it work?",
              a: "RedditClean proxies Reddit content through our servers, stripping out app-install banners, tracking scripts, and intrusive prompts before delivering a clean interface to your browser.",
            },
            {
              q: "Is my Reddit account safe?",
              a: "Yes. We use Reddit's official OAuth flow — we never store your password. You authenticate directly with Reddit and we only receive a scoped access token.",
            },
            {
              q: "Can I cancel anytime?",
              a: "Absolutely. Cancel with one click from your billing portal. No questions asked, no hidden fees.",
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} RedditClean. Not affiliated with Reddit, Inc.</p>
      </footer>
    </main>
  );
}
