'use client'

import { useState } from 'react'

const viralNiches = {
  'Challenge Videos': {
    description: 'High-energy competitive content with stunts and experiments',
    prompts: [
      "I survived 24 hours in a HAUNTED ASYLUM with NO LIGHTS (Security footage reveals SHOCKING truth)",
      "I ate ONLY GAS STATION FOOD for 7 DAYS straight... The results shocked my doctor",
      "Building the WORLD'S LARGEST LEGO HOUSE and spending 24 hours inside (100,000+ pieces)",
      "I tried EVERY FAST FOOD SECRET MENU ITEM in one day ($1000+ spent)",
      "Last to leave the FREEZING COLD POOL wins $10,000 (Extreme endurance challenge)"
    ]
  },
  'Transformation Content': {
    description: '30-day challenges and before/after transformations',
    prompts: [
      "I trained like a NAVY SEAL for 30 days... Here's what happened to my body",
      "I tried the MILLIONAIRE MORNING ROUTINE for 30 days (Life-changing results)",
      "From ZERO to 100K subscribers in 90 days (The EXACT strategy I used)",
      "I learned a NEW LANGUAGE in 30 days using AI (You won't believe the results)",
      "I quit SOCIAL MEDIA for 30 days... My brain completely changed"
    ]
  },
  'Product Reviews & Unboxing': {
    description: 'Testing and reviewing trending products',
    prompts: [
      "I bought the MOST EXPENSIVE items on Amazon... Are they worth it?",
      "Testing VIRAL TikTok products so you don't have to (Scams exposed)",
      "I spent $10,000 on MYSTERY TECH BOXES from eBay (Found something INSANE)",
      "Amazon's MOST RETURNED products... I tested them all (Shocking discoveries)",
      "I bought EVERYTHING in a WISH AD... Here's what actually arrived"
    ]
  },
  'Educational Explainers': {
    description: 'Mind-blowing facts and how things work',
    prompts: [
      "Why 99% of people fail at THIS (The science behind success)",
      "I exposed the DARK TRUTH about [trending topic] that NO ONE talks about",
      "How to make $10,000/month with AI in 2025 (Step-by-step breakdown)",
      "The psychology trick that MANIPULATES your brain (Used by advertisers)",
      "I decoded the ALGORITHM: This is exactly how to go VIRAL in 2025"
    ]
  },
  'Gaming Content': {
    description: 'Gaming challenges and viral moments',
    prompts: [
      "I beat [popular game] using ONLY my VOICE... It was IMPOSSIBLE",
      "What happens if you collect EVERY ITEM in [game]? (10,000+ hours)",
      "I hired a REAL DETECTIVE to solve this game's mystery (Mind-blowing)",
      "Speed-running [game] but every death I buy ONE thing from Amazon",
      "I let TWITCH CHAT control my life for 24 hours (Total chaos)"
    ]
  },
  'AI & Technology': {
    description: 'AI tools, automation, and future tech',
    prompts: [
      "I used AI to create a FULL MOVIE in 24 hours (The results are terrifying)",
      "ChatGPT wrote my ENTIRE YouTube script for 30 days... Here's what happened",
      "I built a $10,000/month business using ONLY AI tools (Complete breakdown)",
      "AI predicted my FUTURE using my data... I'm scared",
      "I replaced myself with AI for ONE WEEK (No one noticed)"
    ]
  },
  'Personal Finance': {
    description: 'Money-making strategies and financial advice',
    prompts: [
      "How I make $50,000/month at age 23 (5 income streams revealed)",
      "I tried every PASSIVE INCOME method for 90 days (Honest results)",
      "From BROKE to $100K in savings: The method NO ONE talks about",
      "I asked MILLIONAIRES their best money advice... This one trick changed everything",
      "How to retire by 30: The REALISTIC blueprint (Not clickbait)"
    ]
  },
  'Reaction Videos': {
    description: 'Reacting to viral content and trends',
    prompts: [
      "Doctor reacts to DANGEROUS TikTok health trends (Please stop doing this)",
      "Lawyer exposes the TRUTH about [viral controversy] (They're all wrong)",
      "I watched 100 hours of [topic] so you don't have to (My brain hurts)",
      "Professional chef rates every VIRAL FOOD HACK (Most are terrible)",
      "Millionaire reacts to how BROKE people spend money (Mind-blowing)"
    ]
  },
  'YouTube Shorts Viral': {
    description: 'Short-form content optimized for virality',
    prompts: [
      "POV: You discover a secret room in your house #shorts (Part 1)",
      "This one trick INSTANTLY improves [skill] (Try it now)",
      "Things that just make SENSE in [topic] #relatable",
      "Asking strangers 'How much money do you make?' (Shocking answers)",
      "I can't believe this ACTUALLY works... *tries viral hack*"
    ]
  },
  'Horror & Mystery': {
    description: 'Scary stories, investigations, and mysteries',
    prompts: [
      "I explored the MOST HAUNTED location on Earth... Something followed me home",
      "I investigated a REAL UNSOLVED MYSTERY from my hometown (Police involved)",
      "This TRUE STORY is more terrifying than any horror movie",
      "I found DISTURBING footage on a camera I bought at a yard sale",
      "Deep diving into the CREEPIEST internet mystery of 2025 (Solved?)"
    ]
  }
}

export default function Home() {
  const [selectedNiche, setSelectedNiche] = useState('Challenge Videos')
  const [generatedPrompt, setGeneratedPrompt] = useState('')

  const generatePrompt = () => {
    const niche = viralNiches[selectedNiche as keyof typeof viralNiches]
    const randomPrompt = niche.prompts[Math.floor(Math.random() * niche.prompts.length)]
    setGeneratedPrompt(randomPrompt)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt)
    alert('Prompt copied to clipboard!')
  }

  return (
    <div className="container">
      <div className="header">
        <h1>🚀 Viral YouTube Video Prompt Generator</h1>
        <p>Generate eye-catching video ideas based on 2025's hottest trending niches</p>
      </div>

      <div className="generator-card">
        <div className="niche-selector">
          <label htmlFor="niche">Select Your Viral Niche:</label>
          <select
            id="niche"
            value={selectedNiche}
            onChange={(e) => setSelectedNiche(e.target.value)}
          >
            {Object.entries(viralNiches).map(([niche, data]) => (
              <option key={niche} value={niche}>
                {niche} - {data.description}
              </option>
            ))}
          </select>
        </div>

        <button className="generate-btn" onClick={generatePrompt}>
          ✨ Generate Viral Video Prompt
        </button>

        {generatedPrompt && (
          <div className="prompt-result">
            <h3>🎬 Your Viral Video Prompt:</h3>
            <div className="prompt-text">{generatedPrompt}</div>
            <button className="copy-btn" onClick={copyToClipboard}>
              📋 Copy to Clipboard
            </button>
          </div>
        )}
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>70%</h3>
          <p>Increase in engagement with short-form content</p>
        </div>
        <div className="stat-card">
          <h3>500M+</h3>
          <p>Monthly active users in gaming niche</p>
        </div>
        <div className="stat-card">
          <h3>#1</h3>
          <p>Product reviews are the most watched video type</p>
        </div>
        <div className="stat-card">
          <h3>3x</h3>
          <p>More likely to watch how-to videos than read instructions</p>
        </div>
      </div>
    </div>
  )
}
