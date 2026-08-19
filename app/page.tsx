'use client'
import { useState, useEffect } from 'react'

const TABS = [
  {id:'HOME', label:'HOME', sub:'Mesh Feed'},
  {id:'WALLETS', label:'WALLETS', sub:'Follow + Alpha'},
  {id:'PACKS', label:'PACKS', sub:'Loot Lab'},
  {id:'MARKET', label:'MARKET', sub:'Base Amazon'},
  {id:'SPAWNBOT', label:'SPAWNBOT', sub:'Product Agent'},
  {id:'SUPCAST', label:'SUPCAST', sub:'Rep Economy'},
  {id:'PROFILE', label:'PROFILE', sub:'Identity + XP'},
] as const
type TabId = typeof TABS[number]['id']

export default function Page(){
  const [tab,setTab]=useState<TabId>('HOME')
  const [packOpen,setPackOpen]=useState(false)
  const [gas,setGas]=useState(0.23)
  useEffect(()=>{ const i=setInterval(()=>setGas(+(0.18+Math.random()*0.14).toFixed(2)),2500); return ()=>clearInterval(i)},[])
  useEffect(()=>{ window.scrollTo({top:0, behavior:'smooth'}); setPackOpen(false) },[tab])

  return (
    <div className="min-h-screen bg-[#060608] text-white selection:bg-violet-500/30 relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-violet-600/20 blur-[140px] rounded-full"/>
        <div className="absolute top-[40%] -left-40 w-[700px] h-[700px] bg-emerald-400/10 blur-[130px] rounded-full"/>
      </div>

      <header className="relative z-30 sticky top-0 backdrop-blur-2xl bg-[#050507]/90 border-b border-white/[0.06]">
        <div className="flex items-center h-[48px]">
          <div className="flex items-center gap-2 px-4 shrink-0">
            <div className="w-7 h-7 rounded-[8px] bg-white text-black grid place-items-center font-black text-[10px]">S5</div>
            <div className="leading-none hidden md:block">
              <div className="font-black text-[11px] tracking-tight flex gap-1.5"><span>SPAWNENGINE</span><span className="px-1.5 py-0 rounded-[4px] bg-white text-black text-[9px]">v5</span><span className="opacity-40 font-normal mono text-[9px] mt-[1px]">BASE OS • MASTER SPEC</span></div>
              <div className="mono text-[8px] opacity-40 tracking-[0.12em]">EVENT → XP → REPUTATION → POWER</div>
            </div>
          </div>
          <div className="flex-1 flex h-full">
            {TABS.map(t=>{
              const active=tab===t.id
              return (
                <button key={t.id} onClick={()=>setTab(t.id)} className={`flex-1 md:flex-none md:w-[160px] h-full border-r border-white/[0.05] px-4 flex items-center justify-between md:justify-start gap-3 transition-all ${active?'bg-white text-black':'bg-transparent text-white/50 hover:text-white hover:bg-white/[0.04]'}`}>
                  <div className="flex items-center gap-2">
                    <span className="mono text-[9px] opacity-50 hidden lg:inline">{String(TABS.indexOf(t)+1).padStart(2,'0')}</span>
                    <span className="text-[11px] font-black tracking-wide">{t.label}</span>
                  </div>
                  <span className="mono text-[8px] opacity-50 hidden xl:inline">{t.sub}</span>
                </button>
              )
            })}
          </div>
        </div>
      </header>

      <main className="relative z-20">
        {tab==='HOME' && (
          <div className="px-6 md:px-10 pt-10 pb-20">
            <div className="max-w-[1400px]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] mono text-[9px] tracking-[0.15em] text-white/60 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400"/>MASTER SPEC MERGE • 7 MODULES → 1 OS • RENSAD • NO SENASTE / NO BOTKYRKA
              </div>
              <h1 className="text-[14vw] md:text-[88px] font-black leading-[0.85] tracking-[-0.05em]">
                SPAWNENGINE<br/>
                <span className="inline-flex gap-3"><span className="text-[#FF6EC7]">v5</span><span className="text-white/20">—</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-cyan-300">THE</span></span><br/>
                <span className="text-white/15">BASE OS</span>
              </h1>
              <p className="mt-6 max-w-[560px] text-[15px] leading-[1.6] text-white/50">Ultimate merge. v2 structure + v4 aesthetics + all modules. Not docs — a product spec that raises <span className="text-white font-bold">$5M</span>. Onchain TikTok + Alpha Radar + Game Progression. <span className="text-emerald-300">Rensad från kommun-appar.</span></p>
              <div className="mt-7 flex gap-3">
                <div className="px-4 py-3 rounded-[14px] bg-white/[0.04] border border-white/[0.06] mono text-[10px]"><div className="opacity-40 text-[8px] tracking-widest">EVENT MODEL</div><div className="mt-1 font-bold text-violet-300">MeshEvent Core</div></div>
                <div className="px-4 py-3 rounded-[14px] bg-white/[0.04] border border-white/[0.06] mono text-[10px]"><div className="opacity-40 text-[8px] tracking-widest">FEED TYPE</div><div className="mt-1 font-bold text-pink-300">TikTok Onchain</div></div>
                <div className="px-4 py-3 rounded-[14px] bg-white/[0.04] border border-white/[0.06] mono text-[10px]"><div className="opacity-40 text-[8px] tracking-widest">MOAT</div><div className="mt-1 font-bold text-emerald-300">SpawnBot Agent</div></div>
              </div>
            </div>

            <div className="mt-20 grid grid-cols-12 gap-8 max-w-[1400px]">
              <div className="col-span-12 lg:col-span-8 space-y-4">
                <div className="rounded-[20px] border border-white/[0.06] bg-white/[0.03] p-5">
                  <div className="flex justify-between"><h3 className="mono text-[11px] tracking-widest opacity-50">MESH FEED • LIVE TICKER</h3><span className="mono text-[9px] px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">● WS MOCK</span></div>
                  <div className="mt-4 space-y-2">
                    {[
                      ['PACKS','Pack Legendary opened #0421 → 4.2 ETH','now'],
                      ['WALLETS','0xF...3a1 aped 2.3 ETH Base memecoin','12s'],
                      ['MARKET','Base Amazon sale $48 shipped','24s'],
                    ].map(([a,b,c])=>(
                      <div key={b} className="flex justify-between items-center p-3 rounded-[12px] bg-black/40 border border-white/[0.05]"><div className="flex gap-2 items-center"><span className="mono text-[8px] px-2 py-1 rounded-full bg-white/10">{a}</span><span className="text-[12px] text-white/70">{b}</span></div><span className="mono text-[9px] opacity-30">{c}</span></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4 rounded-[20px] border border-white/[0.06] bg-[#0F111A]/80 p-5 backdrop-blur">
                <div className="mono text-[10px] tracking-widest opacity-40">VERSION ARCHAEOLOGY → v5 MERGE (RENSAD)</div>
                <div className="mt-4 space-y-2 mono text-[10px]">
                  <div className="p-3 rounded-[12px] bg-pink-500/10 border border-pink-500/20"><div className="font-bold text-pink-300">g-spawnengine-v-4.vercel.app BEST</div><div className="opacity-50 text-[9px] mt-1">AESTHETIC PEAK • design system</div></div>
                  <div className="p-3 rounded-[12px] bg-violet-500/10 border border-violet-500/20"><div className="font-bold text-violet-300">veni-vibe.vercel.app</div><div className="opacity-50 text-[9px] mt-1">PACKS + VIBEMARKET • loot lab</div></div>
                  <div className="p-3 rounded-[12px] bg-emerald-500/10 border border-emerald-500/20"><div className="font-bold text-emerald-300">spv-4-0.vercel.app</div><div className="opacity-50 text-[9px] mt-1">COMPACT ENGINE • gamification</div></div>
                  <div className="p-3 rounded-[12px] bg-white/[0.03] border border-white/[0.06] opacity-40 line-through">senaste.vercel.app • BORTTAGEN • MINI TRACKER</div>
                  <div className="p-3 rounded-[12px] bg-white/[0.03] border border-white/[0.06] opacity-40 line-through">VABotkyrka • BORTTAGEN • KOMMUN APP</div>
                </div>
                <div className="mt-4 p-2.5 rounded-[10px] bg-emerald-500/10 border border-emerald-500/20 mono text-[9px] text-emerald-300">✓ RENSAD: senaste + Botkyrka borttagna från THE BASE OS</div>
              </div>
            </div>
          </div>
        )}

        {tab==='WALLETS' && (
          <div className="px-6 md:px-10 pt-6 pb-20">
            <div className="flex items-end gap-4 mb-8"><div className="text-[80px] font-black leading-none opacity-[0.06]">02</div><div><div className="mono text-[9px] tracking-[0.2em] opacity-40">SOCIAL INTELLIGENCE • PERSONAL RADAR</div><h2 className="text-[34px] font-black tracking-tight -mt-1">WALLETS — FOLLOW + ALPHA</h2></div></div>
            <div className="grid grid-cols-12 gap-5 max-w-[1400px]">
              <div className="col-span-12 lg:col-span-8 rounded-[22px] border border-white/[0.08] bg-[#111326]/80 backdrop-blur p-6">
                <div className="flex justify-between items-center"><h3 className="font-bold text-[13px]">WarpAI • Wallet Activity • LIVE</h3><div className="flex gap-2 mono text-[9px]"><span className="px-2.5 py-1 rounded-full bg-white/10">BASE GAS {gas} gwei</span><span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300">● 1,248 TRACKED</span></div></div>
                <div className="mt-5 space-y-2">
                  {[
                    {w:'0xA9c..913 • Hot pulls', act:'Opened Legendary #0421 → 4.2 ETH', tag:'🔥 ALPHA'},
                    {w:'rainbow.vibe • Swap spree', act:'Swapped 2.3 ETH → Base memecoin', tag:'⚡ FAST'},
                  ].map(r=>(
                    <div key={r.w} className="flex justify-between items-center p-4 rounded-[14px] bg-black/40 border border-white/[0.06]"><div className="flex items-center gap-3"><div className="w-1 h-8 rounded-full bg-gradient-to-b from-violet-400 to-cyan-400"/><div><div className="mono text-[11px] font-bold">{r.w}</div><div className="text-[12px] text-white/60 mt-0.5">{r.act}</div></div></div><span className="mono text-[9px] px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.08]">{r.tag}</span></div>
                  ))}
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4 rounded-[20px] border border-white/[0.08] bg-white/[0.04] p-5"><div className="mono text-[10px] opacity-40">GROK/CLAUDE TASK</div><div className="mt-2 text-[11px] leading-relaxed text-white/60">Koppla Alchemy WS base-mainnet + filtrera Transfer. Ingen senaste/Botkyrka kod här.</div></div>
            </div>
          </div>
        )}

        {tab==='PACKS' && (
          <div className="px-6 md:px-10 pt-6 pb-20">
            <div className="flex items-end gap-4 mb-8"><div className="text-[80px] font-black leading-none opacity-[0.06]">03</div><div><div className="mono text-[9px] tracking-[0.2em] opacity-40">VIBE + GAMIFICATION • MONEY LOOP</div><h2 className="text-[34px] font-black tracking-tight -mt-1">PACKS — LOOT + PULL LAB</h2></div></div>
            <div className="grid grid-cols-12 gap-5 max-w-[1400px]">
              <div className="col-span-12 lg:col-span-7 rounded-[28px] border border-white/[0.08] bg-[#111326]/80 backdrop-blur p-8 h-[520px] grid place-items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-fuchsia-500/10 to-cyan-500/10"/>
                {!packOpen ? (
                  <button onClick={()=>setPackOpen(true)} className="relative z-10 group"><div className="w-[220px] h-[320px] rounded-[24px] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 border border-white/20 grid place-items-center font-black text-[22px] shadow-[0_0_100px_rgba(168,85,247,0.5)] rotate-2 group-hover:rotate-0 transition-transform">PACK</div><div className="mt-6 mono text-[11px] px-4 py-2 rounded-full bg-white text-black font-black mx-auto">OPEN PACK • 0.02 ETH • 2.5% FEE</div></button>
                ) : (
                  <div className="relative z-10 text-center"><div className="text-[72px] font-black leading-none">LEGENDARY<br/><span className="text-[24px] text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-cyan-300">#0421 • 4.2 ETH • +420 XP</span></div><button onClick={()=>setPackOpen(false)} className="mt-8 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 mono text-[11px]">OPEN AGAIN</button></div>
                )}
              </div>
              <div className="col-span-12 lg:col-span-5 rounded-[20px] border border-white/[0.08] bg-white/[0.04] p-5"><div className="mono text-[10px] opacity-40">REVENUE MODEL</div><div className="mt-3 text-[13px] text-white/70">2.5% fee per open • 382k/mo test → $9.5k MRR potential. Rensad pitch, ingen kommun-app.</div></div>
            </div>
          </div>
        )}

        {(tab==='MARKET' || tab==='SPAWNBOT' || tab==='SUPCAST' || tab==='PROFILE') && (
          <div className="px-6 md:px-10 pt-6 pb-20">
            <div className="max-w-[1400px] rounded-[22px] border border-white/[0.08] bg-white/[0.04] p-10 text-center">
              <h2 className="text-[42px] font-black">{tab} — RENSAD MODULE</h2>
              <p className="mt-3 text-white/50">Ingen senaste.vercel.app, ingen VA Botkyrka här. Bara THE BASE OS moduler.</p>
            </div>
          </div>
        )}
      </main>

      <style>{`.mono{font-family:'JetBrains Mono',monospace}`}</style>
    </div>
  )
}
