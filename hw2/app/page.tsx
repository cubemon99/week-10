"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function handleStart() {
    // 點擊右方路牌後，跳轉到你的第一題測驗頁面（請根據你實際的路由名稱修改，例如 "quiz" 或 "question"）
    router.push("/question"); 
  }

  return (
    <>
      {/* ================= 1. 【第一人稱洞穴背景層】：固定定死，鎖定視角 ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none transition-all duration-500 overflow-hidden">
        <img 
          src="/bg_start.png" // 建議換成具有深邃洞穴、岩壁或地下遺蹟感覺的大圖
          alt="深邃洞穴入口"
          className="w-full h-full object-cover scale-105 animate-[pulse_6s_infinite_ease-in-out]" // 微幅呼吸動畫，模擬第一人稱心跳視覺
        />
        {/* 第一人稱重度暗角遮罩：四周極黑、中央微亮，做出從洞口往內看的深邃窺探感 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.6)_50%,rgba(5,10,15,0.95)_100%)]" />
      </div>

      {/* ================= 2. 【主要互動容器】：左右排版（中央說明、右側路牌） ================= */}
      <div className="absolute inset-0 z-10 flex items-center justify-center p-8 pointer-events-none">
        
        {/* 建立一個最大寬度 720px 的左右分欄水平畫布 */}
        <div className="w-full max-w-[720px] grid grid-cols-12 gap-6 items-center">
          
          {/* ================= 【中央偏左：說明石碑對話框】 ================= */}
          <div className="col-span-8 bg-[#0c121af0] backdrop-blur-md rounded-xl p-5 border-2 border-slate-800 shadow-[0_0_40px_rgba(0,0,0,0.8),inset_0_0_15px_rgba(0,0,0,0.9)] flex flex-col gap-2.5 pointer-events-auto">
            
            {/* 系統微型小標 */}
            <div className="flex justify-between items-center text-[8px] tracking-widest text-slate-500 font-mono border-b border-slate-800/60 pb-1">
              <span>SYSTEM // SECTOR_UNKNOWN</span>
              <span className="text-cyan-400/50 animate-pulse">● SIGNAL_DETECTED</span>
            </div>

            {/* 心理測驗主標題 */}
            <h1 className="text-sm font-bold text-slate-100 tracking-widest uppercase font-mono">
              // 潛意識神殿：聖巢人格軌跡探測
            </h1>

            {/* 測驗說明文字 */}
            <div className="text-[11.5px] text-slate-300 leading-relaxed text-justify space-y-2 font-sans border-t border-b border-slate-800/40 py-2.5">
              <p>
                「你站在一座巨大的地下洞穴入口。濕冷的霧氣從腳下蔓延，耳邊隱約傳來古老巨石位移的低鳴。這座神殿不接納凡俗的偽裝，它只透過你靈魂最直覺的抉擇來顯影。」
              </p>
              <p className="text-slate-400">
                本測驗是一場結合<span className="text-cyan-400/80">冒險決策</span>的深層探索。你將面對 6 題關乎生存、策略與直覺的險境抉擇，最終神殿將剖析出你在現實群體中真實的潛意識特質。
              </p>
            </div>

           
            
          </div>

          {/* ================= 【右側：實體指路牌按鈕】 ================= */}
          <div className="col-span-4 flex justify-center pointer-events-auto">
            
            <button
              onClick={handleStart}
              className="group relative flex flex-col items-center justify-center bg-gradient-to-b from-[#1d2d44]/90 to-[#0f172a]/90 hover:from-[#243b55] hover:to-[#162238] text-slate-300 hover:text-white border-2 border-slate-700 hover:border-cyan-400 rounded-lg py-4 px-3 w-full max-w-[160px] shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] active:scale-[0.96] tracking-widest text-center"
            >
              {/* 木質/石牌路牌的箭頭頂部裝飾 */}
              <div className="absolute -top-2 w-3 h-3 bg-slate-700 group-hover:bg-cyan-400 rotate-45 border-l-2 border-t-2 border-inherit transition-colors duration-300" />
              
              {/* 路牌主要符文文字 */}
              <span className="text-[9px] text-cyan-400 font-mono mb-1 tracking-widest group-hover:animate-pulse">
                ▼ ENTER_CAVE
              </span>
              
              <p className="text-xs font-black tracking-widest border-t border-slate-800 group-hover:border-cyan-500/30 pt-1.5 w-full">
                開 始 探 索
              </p>

              {/* 路牌底座木樁小視覺 */}
              <div className="absolute -bottom-3.5 w-2 h-3.5 bg-slate-800 border-x border-b border-slate-700 rounded-b-sm group-hover:bg-slate-700 transition-colors" />
            </button>

          </div>

        </div>
      </div>
    </>
  );
}