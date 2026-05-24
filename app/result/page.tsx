"use client";
import { useState, useEffect } from "react";
import { usePsyStore } from "@/store/store";
import { useRouter } from "next/navigation";

export default function Result() {
  const router = useRouter();
  const psyData = usePsyStore((state) => state.psyData);
  const setPsyScore = usePsyStore((state) => state.setScore);
  const [psyResult, setPsyResult] = useState<React.ReactNode>(<></>);

  // 控制隨結果動態更換的大背景與懸賞令插圖
  const [bgImg, setBgImg] = useState("/bg_greenpath.jpg");
  const [screenImg, setScreenImg] = useState("/me4.jpg");

  useEffect(() => {
    getResult();
  }, [psyData.score]);

  function getResult() {
    if (psyData.score < 10) {
      setBgImg("/bg_result.png");      
      setScreenImg("/result_a.png");   
      setPsyResult(
        <div className="space-y-1.5 text-amber-950">
          <p className="font-bold text-[13px] border-b border-amber-950/20 pb-0.5">【無畏的開拓先鋒】(The Fearless Vanguard)</p>
          <p><strong>★ 冒險特質：</strong> 你的字典裡沒有「撤退」這兩個字！你擁有極高的行動力與爆發力，遇到困難習慣「直球對決」。你享受腎上腺素飆升的快感，是團隊中最強悍的破壞力輸出。</p>
          <p><strong>★ 性格盲區：</strong> 有時候衝得太快，容易踩到隊友設好的陷阱，或者是忘記帶回程的地圖。</p>
          <p><strong>★ 靈魂格言：</strong> 「與其在原地思考失敗的機率，不如直接上去給世界一拳！」</p>
          <p><strong>★ 合拍隊友：</strong> 選擇 B 的智囊（他能幫你踩煞車）。</p>
        </div>
      );
    } else if (psyData.score >= 10 && psyData.score < 16) {
      setBgImg("/bg_result.png");        
      setScreenImg("/result_b.png"); 
      setPsyResult(
        <div className="space-y-1.5 text-amber-950">
          <p className="font-bold text-[13px] border-b border-amber-950/20 pb-0.5">【博學的遺跡智囊】(The Scholar Archeologist)</p>
          <p><strong>★ 冒險特質：</strong> 你是靠腦袋闖蕩江湖的策略家。比起蠻力，你更相信邏輯、數據與線索。在動手之前，你必須掌握 80% 以上的資訊。你擅長在混亂中理出頭緒，破譯密碼和看穿機關是你的拿手好戲。</p>
          <p><strong>★ 性格盲區：</strong> 容易陷入「分析癱瘓」，想得太多導致錯失最佳的進攻時機。</p>
          <p><strong>★ 靈魂格言：</strong> 「一切未知的背後，都不過是一場等待被破解的方程式。」</p>
          <p><strong>★ 合拍隊友：</strong> 選擇 D 的倖存者（他能確保你在思考時不會被暗算）</p>
        </div>
      );
    } else if (psyData.score >= 16 && psyData.score < 21) {
      setBgImg("/bg_result.png");         
      setScreenImg("/result_c.png");     
      setPsyResult(
        <div className="space-y-1.5 text-amber-950">
          <p className="font-bold text-[13px] border-b border-amber-950/20 pb-0.5">【神秘的靈性行者】(The Mystic Wayfarer)</p>
          <p><strong>★ 冒險特質：</strong> 你擁有超乎常人的直覺與共情能力。你來冒險不是為了發財，而是為了尋找生命的意義。你能看穿萬物的善意與惡意，甚至連機關和野獸在你眼裡都有獨特的靈性。你總能用出人意料的方式化險為夷。</p>
          <p><strong>★ 性格盲區：</strong> 太過感性，有時候會對明顯帶有敵意的危險抱持不切實際的慈悲心。</p>
          <p><strong>★ 靈魂格言：</strong> 「眼睛看不到的風景，要用心去傾聽。萬物皆有其流動的旋律。」</p>
          <p><strong>★ 合拍隊友：</strong> 選擇 A 的先鋒（他能在你發善心時保護你）。</p>
        </div>
      );
    } else {
      setBgImg("/bg_result.png");       
      setScreenImg("/result_d.png");   
      setPsyResult(
        <div className="space-y-1.5 text-amber-950">
          <p className="font-bold text-[13px] border-b border-amber-950/20 pb-0.5">【冷靜的終極倖存者】(The Ultimate Survivor)</p>
          <p><strong>★ 冒險特質：</strong> 你是絕對的務實主義者。對你來說，拿多少寶藏都是虛的，安全回家、口袋賺飽才是真的。你擅長隱藏自己、規避風險，並將手邊的資源利用到極致。你是最可靠的後勤，也是最後能活著走出神殿的人。</p>
          <p><strong>★ 性格盲區：</strong> 有時候顯得過於現實或保守，可能會因此錯過一些突破性的奇蹟大獎。</p>
          <p><strong>★ 靈魂格言：</strong> 「英雄往往都死在神殿裡，而我，只想活著去酒館喝下一杯黑啤酒。」</p>
          <p><strong>★ 合拍隊友：</strong> 選擇 C 的行者（他能帶你看到生存以外的美好世界）。</p>
        </div>
      );
    }
  }

  function playAgain() {
    setPsyScore(0);
    router.push("/");
  }

  return (
    <>
      {/* 為了完美在所有瀏覽器隱藏滾動軸，注入全域微量 CSS 樣式 */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* ================= 1. 【獨立全螢幕背景】：固定鎖死大背景 ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none transition-all duration-500 overflow-hidden">
        <img 
          src={bgImg} 
          alt="聖巢背景"
          className="w-full h-full object-cover opacity-60" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[#060b10]/95" />
      </div>

      {/* ================= 2. 【隱形不滾動容器】：完美置中懸賞令 ================= */}
      <div className="absolute inset-0 z-10 flex flex-col items-center overflow-y-auto py-8 pointer-events-none">
        
        {/* ================= 3. 【復古懸賞通緝令主體】：【關鍵修正】加上 my-auto (大螢幕置中) 與 shrink-0 (防壓扁) ================= */}
        <div className="w-full max-w-[420px] shrink-0 my-auto bg-[#ebdcb9] text-amber-950 rounded-sm px-6 py-5 shadow-[0_0_60px_rgba(0,0,0,0.95),inset_0_0_30px_rgba(139,94,26,0.25)] border-4 border-[#3a2d1d] flex flex-col gap-3.5 relative pointer-events-auto overflow-hidden">
          
          {/* 四周暗角復古灼燒感裝飾 */}
          <div className="absolute inset-0 border-[10px] border-transparent shadow-[inset_0_0_20px_rgba(0,0,0,0.35)] pointer-events-none" />

         {/* 頂部標題：WANTED (字體微調小一點點點) */}
         <div className="text-center relative z-10">
            <h1 className="text-2xl font-black tracking-[0.25em] uppercase font-serif border-b-2 border-amber-950/30 pb-0.5 flex items-center justify-center gap-2">
              <span>⚔</span> WANTED <span>⚔</span>
            </h1>
          </div>

          {/* 【縮短處 1】：詳細解析文本區，最大高度縮減至 max-h-[105px] */}
          <div className="relative z-10 text-[10px] leading-relaxed text-justify font-sans max-h-[105px] overflow-y-auto pr-0.5 no-scrollbar">
            {psyResult}
          </div>

          {/* 中間核心：通緝犯肖像照片 (高 115px 橫幅) */}
          <div className="relative w-full h-[115px] rounded-xs overflow-hidden bg-amber-950/20 border-2 border-amber-950/80 shadow-md flex items-center justify-center">
            <img 
              src={screenImg} 
              alt="通緝犯頭像"
              className="w-full h-full object-cover grayscale-[15%] contrast-[105%]" 
            />
            <div className="absolute inset-0 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]" />
          </div>

          {/* 【修正 2】：移除了 REWARD: UNKNOWN，直接乾淨顯示最後積分 */}
          <div className="relative z-10 text-center bg-amber-950/10 border border-amber-950/25 rounded py-1.5 font-sans font-bold text-[12px] tracking-widest">
            懸賞積分：<span className="text-amber-800 text-sm font-black font-mono">{psyData.score},000</span>
          </div>

          {/* 【核心縮短處 4】：按鈕排版從 flex-col 改為橫向並排 (grid grid-cols-2) */}
          <div className="relative z-10 grid grid-cols-2 gap-2 w-full pt-1.5 border-t border-amber-950/20 font-sans font-bold text-[11px]">
            
            {/* 再玩一次按鈕 */}
            <button 
              onClick={playAgain}
              className="w-full bg-gradient-to-b from-[#3d3123] to-[#271e14] hover:from-[#4d3f30] hover:to-[#33281c] text-[#f4edd2] border-2 border-[#1c140c] rounded-md py-2 px-4 shadow-[0_3px_6px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.15)] transition-all duration-150 active:scale-[0.98] active:shadow-inner flex items-center justify-center gap-2"
            >
              <span>🐌</span> 再玩一次
            </button>
            
            {/* 分享按鈕 */}
            <button 
              onClick={() => alert("通緝令已複製，快去召集同伴吧！")}
              className="w-full bg-gradient-to-b from-[#4d4032]/90 to-[#382d21]/90 hover:from-[#594b3c] hover:to-[#423628] text-[#e8dfc5] border border-[#2a2015] rounded-md py-1.5 text-center shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition-all duration-150 active:scale-[0.98]"
            >
              分享你的角色
            </button>
            
          </div>

        </div>
      </div>
    </>
  );
}