import React from 'react';
import { ArrowRight, Youtube, Shield, Paintbrush, Flame } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#8B5CF6] selection:text-white overflow-hidden relative">
      
      {/* Visual Background Glow Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#4C1D95]/20 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#8B5CF6]/10 blur-[150px] pointer-events-none" />

      {/* Premium Glassmorphic Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#050505]/60 border-b border-[#8B5CF6]/10 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-[#8B5CF6]">
            WILFFTEMPLE
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-[#8B5CF6] transition-colors">About</a>
          <a href="#builds" className="hover:text-[#8B5CF6] transition-colors">Builds</a>
          <a href="#apply" className="hover:text-[#8B5CF6] transition-colors">Apply</a>
          <a href="#tickets" className="hover:text-[#8B5CF6] transition-colors">Support</a>
        </nav>
        <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#4C1D95] to-[#8B5CF6] text-sm font-semibold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:brightness-110 transition-all">
          Portal Login
        </button>
      </header>

      {/* Cinematic Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-xs font-semibold text-[#8B5CF6]">
              <Flame size={12} className="animate-pulse" />
              PREMIUM MINECRAFT CREATIVE COMMUNITY
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
              Welcome to the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-purple-400 to-white">
                Wilfftemple
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-xl">
              A futuristic collective designed exclusively for elite Minecraft builders, creators, and visionaries. Showcase your creations, grab schematics, and shape the meta.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="https://discord.gg/DEgVSUtDUm" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#5865F2] hover:bg-[#5865F2]/90 font-bold transition-all transform hover:-translate-y-0.5"
              >
                {/* Official Discord SVG Logo */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
                </svg>
                Join Our Discord
                <ArrowRight size={18} />
              </a>
              <a 
                href="https://www.youtube.com/@wilffplayz/videos" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 font-bold transition-all transform hover:-translate-y-0.5"
              >
                <Youtube size={20} />
                Watch on YouTube
              </a>
            </div>
          </div>

          {/* Right Image/Banner Display (Glassmorphic Window) */}
          <div className="lg:col-span-5 relative">
            <div className="p-2 rounded-3xl bg-gradient-to-b from-[#8B5CF6]/30 to-transparent border border-[#8B5CF6]/20 shadow-[0_0_50px_rgba(139,92,246,0.15)]">
              <div className="bg-[#050505] rounded-[22px] overflow-hidden">
                <img 
                  src="/aaron1708_-_pfp_-enchanced.jpg" 
                  alt="Wilfftemple Mascot" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Live Social Statistics Cards (Glassmorphism) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-[#8B5CF6]/30 transition-all group backdrop-blur-sm">
            <Shield className="text-[#8B5CF6] mb-4 group-hover:scale-110 transition-transform" size={28} />
            <h3 className="text-xl font-bold">Secure Portal</h3>
            <p className="text-gray-400 text-sm mt-2">Sign in using Discord OAuth to access premium builds, download verified .schems, and track roles.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-[#8B5CF6]/30 transition-all group backdrop-blur-sm">
            <Paintbrush className="text-[#8B5CF6] mb-4 group-hover:scale-110 transition-transform" size={28} />
            <h3 className="text-xl font-bold">Build Galleries</h3>
            <p className="text-gray-400 text-sm mt-2">Filter and inspect creations from elite builders categorized by Medieval, Fantasy, Modern, and Terrain styles.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-[#8B5CF6]/30 transition-all group backdrop-blur-sm">
            <span className="text-2xl font-bold text-[#8B5CF6] mb-4 block">100%</span>
            <h3 className="text-xl font-bold">Community-Driven</h3>
            <p className="text-gray-400 text-sm mt-2">Apply for roles, submit tickets directly to staff, and shape the community platform from your dashboard.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
