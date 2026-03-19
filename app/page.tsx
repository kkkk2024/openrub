'use client';

import Image from 'next/image';

export default function Home() {
  const apiModels = [
    { 
      name: 'Kimichat K2.5', 
      price: '$0.15', 
      unit: '/1M tokens', 
      desc: 'Latest model from Moonshot AI. Excellent Chinese language understanding and generation.',
      context: '128K tokens',
      features: ['Fast response', 'Chinese optimized', 'Code support'],
      popular: false
    },
    { 
      name: 'ERNIE 4.0', 
      price: 'From $0.18', 
      unit: '/1M tokens', 
      desc: 'Baidu\'s flagship model. Best-in-class for Chinese language and multimodal capabilities.',
      context: '128K tokens',
      features: ['Multimodal', 'Chinese optimization', 'Reasoning'],
      popular: true
    },
    { 
      name: 'iFlytek Spark', 
      price: 'From $0.15', 
      unit: '/1M tokens', 
      desc: 'iFlytek\'s advanced model. Excellent for voice, education, and Chinese language tasks.',
      context: '64K tokens',
      features: ['Voice support', 'Education focus', 'Real-time'],
      popular: true
    },
    { 
      name: 'Doubao', 
      price: 'From $0.08', 
      unit: '/1M tokens', 
      desc: 'ByteDance\'s cost-effective model. Fast and affordable for basic tasks.',
      context: '32K tokens',
      features: ['Affordable', 'Fast', 'High concurrency'],
      popular: false
    },
    { 
      name: 'GLM-4', 
      price: 'From $0.10', 
      unit: '/1M tokens', 
      desc: 'Zhipu AI powerful model. Cost-effective with excellent performance.',
      context: '128K tokens',
      features: ['Affordable', 'Chinese focus', 'Vision support'],
      popular: false
    },
    { 
      name: 'MiniMax', 
      price: 'From $0.12', 
      unit: '/1M tokens', 
      desc: 'Strong reasoning and text generation. Great for complex tasks.',
      context: '32K tokens',
      features: ['Reasoning', 'Long output', 'Stable'],
      popular: false
    },
  ];

  const gpuServers = [
    {
      name: 'NVIDIA H100',
      price: '$3.50',
      unit: '/hour',
      vram: '80GB HBM3',
      desc: 'Next-gen AI accelerator with 3x performance boost',
      features: ['FP64: 51 TFLOPS', 'FP16: 1,980 TFLOPS', 'Best for: Large-scale training']
    },
    {
      name: 'NVIDIA A100',
      price: '$2.50',
      unit: '/hour',
      vram: '80GB HBM2',
      desc: 'Industry standard for AI training and large language models',
      features: ['FP64: 9.7 TFLOPS', 'FP16: 312 TFLOPS', 'Best for: LLM training']
    },
    {
      name: 'NVIDIA A6000',
      price: '$1.80',
      unit: '/hour',
      vram: '48GB GDDR6X',
      desc: 'Professional visualization and AI inference',
      features: ['FP64: 38.7 TFLOPS', 'FP16: 309 TFLOPS', 'Best for: Inference']
    },
    {
      name: 'NVIDIA A4000',
      price: '$0.90',
      unit: '/hour',
      vram: '16GB GDDR6X',
      desc: 'Cost-effective option for development and testing',
      features: ['FP64: 17.4 TFLOPS', 'FP16: 152 TFLOPS', 'Best for: Development']
    },
  ];

  const services = [
    {
      icon: '🤖',
      title: 'AI Agent Development',
      desc: 'Custom AI agents for your business. We build intelligent assistants tailored to your needs.',
      features: ['Customer support bots', 'Internal assistants', 'Automation']
    },
    {
      icon: '⚙️',
      title: 'API Integration',
      desc: 'We help businesses integrate Chinese AI APIs into their products and workflows.',
      features: ['Technical consultation', 'Custom integration', '24/7 support']
    },
    {
      icon: '📋',
      title: 'Compliance & Localization',
      desc: 'Navigate Chinese AI regulations and adapt products for global markets.',
      features: ['Data compliance', 'Content moderation', 'Market adaptation']
    },
  ];

  const features = [
    { icon: '🔒', title: 'Enterprise-grade Security', desc: 'Your data is encrypted and protected with industry-standard security practices.' },
    { icon: '⚡', title: '99.9% Uptime SLA', desc: 'Guaranteed reliability with redundant infrastructure.' },
    { icon: '🌍', title: 'Global CDN', desc: 'Fast access from anywhere in the world with automatic geographic routing.' },
    { icon: '💬', title: '24/7 Support', desc: 'Round-the-clock technical assistance via email and chat.' },
    { icon: '📊', title: 'Usage Analytics', desc: 'Track your API usage with detailed dashboards and reports.' },
    { icon: '🔧', title: 'Easy Integration', desc: 'Simple REST API with SDKs for popular languages.' },
  ];

  const useCases = [
    '🤖 AI Chatbots',
    '📝 Content Generation',
    '💻 Code Assistance',
    '📧 Email Automation',
    '📱 App Integration',
    '🎓 Educational Tools',
  ];

  const gpuUseCases = [
    '🧠 LLM Training',
    '🎨 AI Image Generation',
    '🎬 Video Rendering',
    '🔬 Scientific Computing',
    '📊 Data Analytics',
    '🎮 Game Development',
  ];

  const faqs = [
    { q: 'How do I get started?', a: 'Sign up for an account, get your API key, and start making requests. We offer $10 free credits for new users!' },
    { q: 'What payment methods do you accept?', a: 'We accept PayPal, credit cards, bank transfers (via Payoneer), and USDT cryptocurrency.' },
    { q: 'Is there a free trial?', a: 'Yes! New users get $10 free credits to test our APIs.' },
    { q: 'How does billing work?', a: 'We bill based on actual usage. You only pay for the tokens you consume.' },
    { q: 'Can I use these APIs for commercial products?', a: 'Yes! All our APIs can be used for commercial purposes.' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center py-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            OpenRub
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-4">
            Your Gateway to China&apos;s Premier AI APIs & GPU Compute
          </p>
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
            Access ERNIE, iFlytek Spark, Doubao, Kimichat, and more. 
            The most comprehensive gateway for Chinese AI technologies to the global market.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#api-pricing" className="px-8 py-4 bg-white text-purple-900 rounded-full font-semibold hover:bg-gray-100 transition">
              View API Pricing
            </a>
            <a href="#services" className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition">
              Our Services
            </a>
          </div>
          <p className="mt-4 text-sm opacity-70">No credit card required for free trial • $10 free credits for new users</p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 mb-4">TRUSTED BY DEVELOPERS WORLDWIDE</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50">
            <span className="text-xl font-bold">🚀</span>
            <span className="text-xl font-bold">💻</span>
            <span className="text-xl font-bold">🤖</span>
            <span className="text-xl font-bold">📱</span>
            <span className="text-xl font-bold">☁️</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose OpenRub?</h2>
          <p className="text-gray-600 text-center mb-12">Built for developers who demand reliability and performance</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Popular Use Cases</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {useCases.map((useCase, i) => (
              <span key={i} className="px-6 py-3 bg-purple-100 text-purple-700 rounded-full text-lg">
                {useCase}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* API Pricing */}
      <section id="api-pricing" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">🌏 China AI API Pricing</h2>
          <p className="text-gray-600 text-center mb-4">Access the best Chinese AI models through a single unified API</p>
          <p className="text-center mb-12 text-purple-600 font-semibold">Pay only for what you use. No hidden fees. No monthly minimums.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apiModels.map((model, i) => (
              <div key={i} className={`bg-white border-2 ${model.popular ? 'border-purple-500 shadow-lg' : 'border-purple-100'} rounded-2xl p-6 hover:border-purple-500 transition text-center relative`}>
                {model.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-bold text-xl mb-2">{model.name}</h3>
                <p className="text-4xl font-bold text-purple-600 mb-1">{model.price}</p>
                <p className="text-gray-500 text-sm mb-4">{model.unit}</p>
                <p className="text-gray-600 mb-4 text-sm">{model.desc}</p>
                <div className="text-xs text-gray-500 mb-4">
                  <p>Context: {model.context}</p>
                </div>
                <div className="text-left text-sm space-y-1">
                  {model.features?.map((f, j) => (
                    <p key={j} className="text-gray-600">✓ {f}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">💳 Accepted Payment Methods</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="font-bold mb-2">Credit Card</h3>
              <p className="text-gray-600 text-sm">Visa, Mastercard, AMEX via Stripe</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl mb-4">🅿️</div>
              <h3 className="font-bold mb-2">PayPal / Payoneer</h3>
              <p className="text-gray-600 text-sm">Bank transfers for businesses</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4l-xl mb-4">₿</div>
              <h3 className="font-bold mb-2">USDT Crypto</h3>
              <p className="text-gray-600 text-sm">Fast and secure blockchain payments</p>
            </div>
          </div>
          
          {/* USDT Addresses */}
          <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
            <h3 className="font-bold text-lg mb-4">📤 USDT Payment Addresses</h3>
            <div className="text-left space-y-4 max-w-xl mx-auto">
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-1">BNB Chain (BEP-20):</p>
                <code className="block bg-white p-3 rounded text-sm break-all border">0x076BB644e9530C8639E46f44D45e7C3841CB11ed</code>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-1">TRC-20 (TRON):</p>
                <code className="block bg-white p-3 rounded text-sm break-all border">TAeSmMx4MeT15GwhtFLad2gZwkSPLThFvn</code>
              </div>
              <p className="text-xs text-gray-500 mt-2">Please send payment screenshot to: support@openrub.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">🤝 Professional Services</h2>
          <p className="text-gray-600 text-center mb-12">Beyond APIs - we help you succeed with Chinese AI</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <div className="space-y-2">
                  {service.features?.map((f, j) => (
                    <p key={j} className="text-sm text-gray-500">• {f}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GPU Pricing */}
      <section id="gpu-pricing" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">🚀 GPU Compute Rental</h2>
          <p className="text-gray-600 text-center mb-4">High-performance GPU servers for AI training and inference</p>
          <p className="text-center mb-12 text-sm text-gray-500">Flexible hourly billing. No long-term commitment.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gpuServers.map((gpu, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-900 to-gray-800 text-white border-2 border-gray-700 rounded-2xl p-6 hover:border-purple-500 transition text-center">
                <h3 className="font-bold text-xl mb-2">{gpu.name}</h3>
                <p className="text-4xl font-bold text-purple-400 mb-1">{gpu.price}</p>
                <p className="text-gray-400 text-sm mb-4">{gpu.unit}</p>
                <p className="text-gray-300 mb-4 text-sm">{gpu.desc}</p>
                <div className="text-xs text-gray-400 mb-4">
                  <p className="font-semibold text-purple-300">{gpu.vram}</p>
                </div>
                <div className="text-left text-sm space-y-1">
                  {gpu.features?.map((f, j) => (
                    <p key={j} className="text-gray-400">• {f}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GPU Use Cases */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">GPU Compute Use Cases</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {gpuUseCases.map((useCase, i) => (
              <span key={i} className="px-6 py-3 bg-gray-800 text-gray-300 rounded-full text-lg">
                {useCase}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Coming Soon</h2>
          <p className="text-gray-600 mb-8">More models and services on the way</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {['Claude (Anthropic)', 'GPT-4o (OpenAI)', 'Gemini (Google)'].map((m, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-lg">{m}</h3>
                <p className="text-gray-500 text-sm mt-2">Coming Q2 2026</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="space-y-8">
            {[
              { step: '1', title: 'Create Account', desc: 'Sign up in seconds. No credit card required.' },
              { step: '2', title: 'Get API Key', desc: 'Receive your unique API key instantly.' },
              { step: '3', title: 'Make Requests', desc: 'Start making API calls with our simple documentation.' },
              { step: '4', title: 'Pay As You Go', desc: 'Only pay for the tokens you actually use.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-xl">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your AI Journey Today</h2>
          <p className="text-xl opacity-90 mb-4">
            Sign up now and get <span className="font-bold text-yellow-300">$10 free credits</span>!
          </p>
          <p className="text-lg opacity-80 mb-8">
            No credit card required. Start building in minutes.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:support@openrub.com?subject=Sign%20up%20request&body=Hello,%20I%20want%20to%20sign%20up%20for%20OpenRub.%20Please%20help%20me%20get%20started." 
               className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition">
              Contact Us
            </a>
          </div>
          <p className="mt-6 text-sm opacity-70">Or email: support@openrub.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        <p>© 2026 OpenRub. All rights reserved.</p>
        <p className="text-sm mt-2">Registered in United Kingdom | support@openrub.com</p>
      </footer>
    </main>
  );
}
