"use client"
import Link from "next/link";

import { useState, useEffect } from "react";

export default function Home() {



  return (
    <>

      
      {/* ================= 1. 【獨立背景層】：鎖死背景不露白 ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none transition-all duration-500 overflow-hidden">
        <img 
          src="/bg_prepare.png" // 可依需求替換成你的冒險背景大圖
          alt="題目背景"
          className="w-full h-full object-cover opacity-70" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#080d13]/90" />
      </div>

      {/* ================= 2. 【隱形不滾動盒子】：鎖死 NDS 位置 ================= */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 pointer-events-none">
        
        {/* ================= 3. 【NDS 主機外殼】：維持 480px 寬扁比例 ================= */}
        <div className="w-full max-w-[480px] shrink-0 bg-[#1a1f26]/90 backdrop-blur-md rounded-2xl p-3 shadow-[0_0_50px_rgba(0,0,0,0.9)] border-2 border-[#2d3540] flex flex-col gap-2 pointer-events-auto">
          
          {/* --- 上半部螢幕：進度與提示 --- */}
          <div className="w-full bg-[#0c121a] rounded-lg border-2 border-[#121820] shadow-[inset_0_0_15px_rgba(0,0,0,0.9)] overflow-hidden relative flex flex-col justify-between p-3 min-h-[140px]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#102030]/10 to-[#0c121a] pointer-events-none" />
            
            {/* 頂部資訊列 */}
            <div className="relative z-10 flex justify-between items-center text-[9px] tracking-widest text-slate-500 font-mono">
              <span>SYSTEM // PATH_COMPLETED</span>
              <span className="text-cyan-400/70 animate-pulse">● READY</span>
            </div>

            {/* 中間提示文字 */}
            <div className="relative z-10 my-auto text-center">
              <h2 className="text-xs font-bold text-slate-200 tracking-widest uppercase font-mono mb-1">
                // ALL_ANSWERS_RECORDED
              </h2>
              <p className="text-[11px] text-[#e2e8f0] leading-relaxed tracking-wide">
                「你成功穿越了密林與古老神殿。現在封印即將解除，石門後方正隱隱散發出屬於你潛意識的核心光芒……」
              </p>
            </div>

            {/* 底部裝飾條 */}
            <div className="w-full bg-cyan-500/10 border border-cyan-500/20 rounded py-0.5 text-center text-[8px] text-cyan-400/70 font-mono tracking-widest animate-pulse">
              [ COMPILING PSYCHOLOGICAL PROFILE ]
            </div>
          </div>

          {/* --- NDS 中間轉軸 --- */}
          <div className="w-full h-2 bg-gradient-to-b from-[#121820] via-[#2d3540] to-[#121820] rounded-sm shadow-inner flex justify-between px-12 items-center">
            <div className="w-12 h-0.5 bg-[#121820] rounded-full" />
            <div className="w-12 h-0.5 bg-[#121820] rounded-full" />
          </div>

          {/* --- 下半部螢幕：把 Link 做成唯一的實體大按鍵 --- */}
          <div className="w-full bg-[#0f1622] rounded-lg border-2 border-[#121820] shadow-[inset_0_0_15px_rgba(0,0,0,0.9)] p-4 relative flex items-center justify-center min-h-[90px]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,32,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(18,24,32,0.03)_1px,transparent_1px)] bg-[size:3px_3px] pointer-events-none" />

            {/* 整合：你原本的 <Link href="result">看結果</Link> */}
            {/* 將其放大、填滿下螢幕，並套上空洞騎士風格的螢光邊框特效 */}
            <Link 
              href="result" 
              className="w-full h-full min-h-[56px] flex flex-col items-center justify-center bg-[#1d2d44]/40 hover:bg-[#243b55]/80 border-2 border-cyan-500/30 hover:border-cyan-400 rounded-xl shadow-lg transition-all duration-200 active:scale-[0.98] group relative z-10"
            >
              <span className="text-[9px] text-cyan-400 font-mono tracking-widest mb-0.5 group-hover:animate-pulse">
                ▼ TOUCH TO UNVEIL
              </span>
              <p className="text-xs font-bold text-slate-200 group-hover:text-white tracking-widest">
                啟動儀式：查看測驗結果
              </p>
            </Link>

          </div>
        </div>
      </div>

    </>
  );
}
