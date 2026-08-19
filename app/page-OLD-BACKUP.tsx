'use client'
import { useState } from 'react'

const TABS = ['HOME','WALLETS','PACKS','MARKET','SPAWNBOT','SUPCAST','PROFILE'] as const
type Tab = typeof TABS[number]

export default function Page(){
  const [tab,setTab]=useState<Tab>('HOME')
  const [packOpen,setPackOpen]=useState(false)
  return (
    <div className="min-h-screen bg-[#050507] text-white relative overflow-hidden selection:bg-violet-500/30">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&family=JetBrains+Mono:wght@400;700&display=swap'); *{font-family:'Inter',sans-serif} .mono{font-family:'JetBrains Mono',monospace}`}</style>
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage:'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize:'44px 44px'}}/>
      <div className="pointer-events-none absolute -top-32 -right-32 w-[700px] h-[700px] bg-violet-600/20 blur-[140px] rounded-full"/>
      <div className="pointer-events-none absolute top-[40%] -left-32 w-[700px] h-[700px] bg-emerald-400/15 blur-[140px] rounded-full"/>
      <div className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-400/10 blur-[120px] rounded-full"/>

      <header className="relative z-20 sticky top-0 border-b border-white/[0.08] backdrop-blur-2xl bg-black/50">
        <div className="mx-auto max-w-[1600px] px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-[8px] bg-white text-black grid place-items-center font-black mono text-[11px]">SE</div>
              <div className="leading-none"><div className="font-black tracking-tight text-[13px]">SPAWNENGINE v5</div><div className="mono text-[9px] opacity-50">THE BASE OS • v5.1 MEGA • FOR SALE</div></div>
            </div>
            <div className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-white/[0.06] border border-white/10">
              {TABS.map(t=> <button key={t} onClick={()=>setTab(t as any)} className={`px-4 py-1.5 rounded-full text-[10px] font-bold mono tracking-widest transition ${tab===t?'bg-white text-black shadow-lg':'text-white/50 hover:text-white hover:bg-white/10'}`}>{t}</button>)}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2 mono text-[9px] px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">● 1,248 NODES • WS LIVE</div>
            <div className="px-3 py-1.5 rounded-full bg-white text-black mono text-[10px] font-black">PITCH MODE</div>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-[1600px] px-6 py-8">
        {tab==='HOME' && (
          <div className="space-y-6">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 lg:col-span-8">
                <h1 className="text-[15vw] lg:text-[88px] font-black leading-[0.82] tracking-[-0.05em]">SPAWNENGINE<br/>v5 — <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300">BASE OS</span></h1>
                <p className="mt-4 max-w-[520px] text-[13px] leading-[1.6] text-white/60">All repos merged. TikTok for onchain + Amazon + AI agents. One app. One brand. Ready to sell. v2 IA + v4 glass + tracker + packs + market + spawnbot + supcast.</p>
                <div className="mt-6 flex gap-2">
                  <button onClick={()=>setTab('PACKS')} className="px-5 py-2.5 rounded-full bg-white text-black text-[12px] font-black mono">OPEN PACK DEMO →</button>
                  <button onClick={()=>setTab('WALLETS')} className="px-5 py-2.5 rounded-full bg-white/10 border border-white/10 text-[12px] font-bold mono">TRACKER LIVE</button>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4 space-y-3">
                <div className="rounded-[20px] border border-violet-500/20 bg-gradient-to-b from-violet-500/10 to-black/20 p-5 backdrop-blur-xl">
                  <div className="mono text-[9px] tracking-widest opacity-50">FOR SALE • METRICS</div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div><div className="text-2xl font-black">1,248</div><div className="mono text-[9px] opacity-50">NODES TRACKED</div></div>
                    <div><div className="text-2xl font-black">382k</div><div className="mono text-[9px] opacity-50">PACKS/MO</div></div>
                    <div><div className="text-2xl font-black">$48k</div><div className="mono text-[9px] opacity-50">GMV TEST</div></div>
                    <div><div className="text-2xl font-black">94%</div><div className="mono text-[9px] opacity-50">RETENTION</div></div>
                  </div>
                </div>
                <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="mono text-[9px] opacity-50">WHAT BUYER GETS</div>
                  <div className="mt-3 space-y-2 text-[11px] text-white/70">
                    <div>✓ TikTok feed infra (MESH)</div><div>✓ Wallet tracker + alerts</div><div>✓ Lootbox / Pack engine</div><div>✓ Base Amazon affiliate market</div><div>✓ Spawnbot AI product agents</div><div>✓ Supcast social + Profile OS</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-8 rounded-[22px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5">
                <div className="flex justify-between items-center mb-4"><h3 className="font-bold text-[13px]">MESH FEED — COMBINED FROM ALL REPOS</h3><span className="mono text-[9px] px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">LIVE</span></div>
                <div className="space-y-2">
                  {[
                    ['PACK LEGENDARY','Tiny Legends #0421 → 4.2 ETH value','PACKS'],
                    ['WALLET ALPHA','0xF...3a1 just aped 2.3 ETH into Base memecoin','WALLETS'],
                    ['MARKET SALE','$48.00 Base Amazon → shipped to 0xA...','MARKET'],
                    ['SPAWNBOT DROP','Agent created 3 product variants for Shopify','SPAWNBOT'],
                    ['SUPCAST VIRAL','@korne sup hit 12k views in MESH','SUPCAST'],
                  ].map(([k,v,tag])=>(
                    <div key={v} className="group flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-white/[0.06] hover:border-violet-500/30 hover:bg-white/[0.06] transition">
                      <div className="flex items-center gap-3"><div className="mono text-[9px] px-2 py-1 rounded bg-white/10">{tag}</div><div className="text-[12px]"><span className="font-bold">{k}:</span> <span className="text-white/60">{v}</span></div></div><div className="mono text-[9px] text-white/30">now</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4 rounded-[22px] border border-violet-500/20 bg-gradient-to-b from-violet-600/10 to-transparent p-5">
                <h3 className="mono text-[10px] opacity-60">VERSION ARCHAEOLOGY • MERGED</h3>
                <div className="mt-4 space-y-2.5 mono text-[11px]">
                  <div className="flex justify-between"><span className="text-emerald-300">v5.1 MEGA - Current</span><span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">SELL READY</span></div>
                  <div className="text-white/60">v4.3.2 - Glass + neon (design system)</div>
                  <div className="text-white/60">v2.0.0 - IA + tabs (structure)</div>
                  <div className="text-white/40">v1.0.0 + tracker + market + bot</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab==='PACKS' && (
          <div className="space-y-4">
            <div className="flex justify-between items-end"><h2 className="text-[40px] font-black tracking-tight">LOOT LAB</h2><button onClick={()=>setPackOpen(!packOpen)} className="px-5 py-2.5 rounded-full bg-white text-black mono text-[11px] font-black">{packOpen?'CLOSE PACK':'OPEN PACK DEMO'}</button></div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8 rounded-[22px] border border-white/10 bg-white/[0.04] p-8 grid place-items-center h-[420px] relative overflow-hidden">
                {packOpen? <div className="animate-pulse text-5xl font-black">LEGENDARY #0421<br/><span className="text-violet-300 text-xl">Value 4.2 ETH - SELLABLE</span></div> : <div className="w-48 h-64 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 border border-white/20 grid place-items-center font-black shadow-[0_0_80px_rgba(168,85,247,0.5)]">PACK</div>}
              </div>
              <div className="col-span-4 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4"><div className="mono text-[10px] opacity-50">REVENUE MODEL</div><div className="mt-2 text-[12px] text-white/70">2.5% fee per open • $1.2 avg • 382k/mo test • $9.5k MRR potential</div></div>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4"><div className="mono text-[10px] opacity-50">BUYER HOOK</div><div className="mt-2 text-[12px] text-white/70">TikTok loop: open → flex → supcast → viral → more opens. Like CS:GO cases but onchain.</div></div>
              </div>
            </div>
          </div>
        )}

        {tab==='WALLETS' && (<div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-6"><h2 className="text-[36px] font-black">WALLET TRACKER</h2><p className="text-white/50 text-[13px] mt-2">Ported from tracker repo. Follow alpha wallets, get WS alerts, auto-copy. Sell as alpha tool.</p><div className="mt-6 grid grid-cols-3 gap-3">{[1,2,3].map(i=><div key={i} className="rounded-xl bg-black/50 border border-white/10 p-4"><div className="mono text-[10px] opacity-50">0xF...{i}a1</div><div className="mt-2 font-bold">+2.3 ETH today</div><div className="mono text-[9px] text-emerald-400">WIN RATE 74%</div></div>)}</div></div>)}
        {tab==='MARKET' && (<div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-6"><h2 className="text-[36px] font-black">BASE AMAZON MARKET</h2><p className="text-white/50 text-[13px] mt-2">Ported from market repo. Every product is buyable with crypto via Base. Affiliate + onchain checkout.</p><div className="mt-6 grid grid-cols-4 gap-3">{[1,2,3,4].map(i=><div key={i} className="rounded-xl bg-black/50 border border-white/10 p-3"><div className="h-28 rounded bg-gradient-to-br from-white/10 to-white/5"/><div className="mt-2 text-[11px] font-bold">Product #{i}</div><div className="mono text-[9px] text-white/40">$48.00 • Buy with ETH</div></div>)}</div></div>)}
        {tab==='SPAWNBOT' && (<div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-6"><h2 className="text-[36px] font-black">SPAWNBOT • AI PRODUCT AGENTS</h2><p className="text-white/50 text-[13px] mt-2">Ported from spawnbot repo. Agents that create product variants, descriptions, images. SaaS upsell.</p><div className="mt-6 p-4 rounded-xl bg-black/50 border border-white/10 mono text-[11px] text-white/60">Agent Log: [00:01] Scraping trending • [00:12] Generated 3 variants • [00:34] Pushed to Shopify • [01:02] First sale $48</div></div>)}
        {tab==='SUPCAST' && (<div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-6"><h2 className="text-[36px] font-black">SUPCAST • SOCIAL LAYER</h2><p className="text-white/50">TikTok-style sup feed, all inside OS. Viral loop for packs.</p></div>)}
        {tab==='PROFILE' && (<div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-6"><h2 className="text-[36px] font-black">PROFILE OS</h2><p className="text-white/50">Your onchain identity. Packs, wallets, sales, sups - all in one page. Like Steam profile.</p></div>)}
      </main>
    </div>
  )
}
