'use client';

import Image from 'next/image';

export default function Home() {
  const models = [
    { name: 'Kimichat (K2.5)', price: '$0.15', unit: '/1M tokens', desc: 'Fast & accurate Chinese AI' },
    { name: 'Qwen (Max)', price: '$0.20', unit: '/1M tokens', desc: 'Alibaba latest model' },
    { name: 'GLM-4', price: '$0.10', unit: '/1M tokens', desc: 'Zhipu AI model' },
    { name: 'MiniMax', price: '$0.12', unit: '/1M tokens', desc: 'Strong reasoning' },
  ];

  const features = [
    '🔒 Enterprise-grade security',
    '⚡ 99.9% Uptime SLA',
    '🌍 Global CDN acceleration',
    '💬 24/7 Technical support',
    '📊 Usage analytics dashboard',
    '🔧 Easy API integration',
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center py-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            OpenRub
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Premium AI API Gateway for Developers
          </p>
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
            Access Kimichat, Qwen, GLM, and MiniMax APIs at competitive prices. 
            Fast, reliable, and secure.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#pricing" className="px-8 py-4 bg-white text-purple-900 rounded-full font-semibold hover:bg-gray-100 transition">
              View Pricing
            </a>
            <a href="#contact" className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition">
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose OpenRub?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md text-lg">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Transparent Pricing</h2>
          <p className="text-gray-600 text-center mb-12">Pay only for what you use</p>
          
          <div className="grid md:grid-cols-4 gap-6">
            {models.map((model, i) => (
              <div key={i} className="border-2 border-purple-100 rounded-2xl p-6 hover:border-purple-500 transition text-center">
                <h3 className="font-bold text-lg mb-2">{model.name}</h3>
                <p className="text-4xl font-bold text-purple-600 mb-2">{model.price}</p>
                <p className="text-gray-500 text-sm mb-4">{model.unit}</p>
                <p className="text-gray-600">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Coming Soon</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Claude (Anthropic)', 'GPT-4o (OpenAI)', 'Gemini (Google)'].map((m, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-xl">
                <h3 className="font-bold text-lg">{m}</h3>
                <p className="text-gray-400 text-sm mt-2">Coming Q2 2026</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Get Started Today</h2>
          <p className="text-xl opacity-90 mb-8">
            Sign up now and get $10 free credits!
          </p>
          <a href="mailto:support@openrub.com" className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition">
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        <p>© 2026 OpenRub. All rights reserved.</p>
      </footer>
    </main>
  );
}
