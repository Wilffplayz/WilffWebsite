import React from 'react';
import { ArrowRight, Discord, Youtube, Shield, Paintbrush, Flame } from 'lucide-react';

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
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#5865F2] hover:bg-[#5865F2]/90 font-bold transition-all transform hover:-translate-y-0.5"
              >
                Join Our Discord
                <ArrowRight size={18} />
              </a>
              <a 
                href="https://www.youtube.com/@wilffplayz/videos" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 font-bold transition-all transform hover:-translate-y-0.5"
              >
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
