"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePsyStore } from "@/store/store";



export default function Home() {

const psyData = usePsyStore((state) => state.psyData);
const setScore = usePsyStore((state) => state.setScore);



const router = useRouter()



const questionData = psyData.quizData;
  

const[questionIndex, setQuestionIndex  ]    = useState(0);     


function nextQuset(optionIndex: number) {

  console.log   ("目前分數" + psyData.score)

  console.log   ("使用者選擇：" + optionIndex);

  const selectedValue = questionData?.[questionIndex]?.options?.[optionIndex]?.value ?? 0;
  setScore(psyData.score + selectedValue);

  if(questionIndex != questionData.length-1){
  console.log   ("下一題");
  setQuestionIndex(questionIndex + 1);

  }else{
    console.log   ("準備進入結果");
    router.push("/prepare")
  }
}

  return (
    <>

     
      {/* <div className="flex flex-col items-center justify-center gap-4"> 

        answer question

        <div> 
          <div> {("Q" + (questionIndex + 1) + ".") + questionData[questionIndex].title}</div>
          <div onClick={  ()=>nextQuset(0)}> {questionData[questionIndex].options[0].text}</div>
          <div onClick={  ()=>nextQuset(1)}> {questionData[questionIndex].options[1].text}</div>
          <div onClick={  ()=>nextQuset(2)}> {questionData[questionIndex].options[2].text}</div>
          <div onClick={  ()=>nextQuset(3)}> {questionData[questionIndex].options[3].text}</div>
        </div>

       
        
        {/* <Link className="text-white bg-black px-3 py-2 rounded-md" href="prepare">準備看結果</Link> 
      </div> */}

{/* ================= 1. 【獨立背景層】：鎖死背景 ================= */}
<div className="absolute inset-0 z-0 pointer-events-none transition-all duration-500 overflow-hidden">
        <img 
          src={questionData[questionIndex].bg || "/bg_question.png"} 
          alt="題目背景"
          className="w-full h-full object-cover opacity-90" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#080d13]/90" />
      </div>

      {/* ================= 2. 【隱形不滾動盒子】：移除 overflow-y-auto，全面禁止滾動 ================= */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 pointer-events-none">
        
        {/* ================= 3. 【NDS 主機外殼】：寬度擴大至 480px，間距 gap 縮小 ================= */}
        <div className="w-full max-w-[360px] shrink-0 bg-[#1a1f26]/90 backdrop-blur-md rounded-2xl p-3 shadow-[0_0_50px_rgba(0,0,0,0.9)] border-2 border-[#2d3540] flex flex-col gap-2 pointer-events-auto">
          
          {/* --- 上半部螢幕：移除 aspect-[4/3]，使其變寬變扁 --- */}
          <div className="w-full bg-[#0c121a] rounded-lg border-2 border-[#121820] shadow-[inset_0_0_15px_rgba(0,0,0,0.9)] overflow-hidden relative flex flex-col justify-between p-2">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#102030]/10 to-[#0c121a] pointer-events-none" />
            <div className="absolute top-1.5 left-1.5 w-1 h-1 rounded-full bg-cyan-400/20 blur-xs animate-pulse" />

            {/* 頂部資訊列 */}
            <div className="relative z-10 flex justify-between items-center text-[9px] tracking-widest text-slate-500 font-mono mb-1">
              <span>AREA // GREENPATH</span>
              <span className="text-cyan-400/60 animate-pulse">● QUESTION {questionIndex + 1}</span>
            </div>

            {/* 圖片區：高度固定為 90px，在寬螢幕下會呈現漂亮的扁扁橫幅 (Banner) 感 */}
            <div className="relative w-full h-[90px] mb-1 rounded-md overflow-hidden bg-slate-950/50 border border-slate-900/50 flex items-center justify-center">
              <img 
                src={questionData[questionIndex].screenImg || "/me4.jpg"} 
                alt="密林神殿石門"
                className="w-full h-full object-cover opacity-80"
              />
            </div>

            {/* 題目區：微調邊距 */}
            <div className="relative z-10 bg-black/50 backdrop-blur-xs p-2 rounded-md border border-slate-800/80 shadow-md">
              <p className="text-[11px] text-[#e2e8f0] leading-relaxed tracking-wide text-justify">
                {("Q" + (questionIndex + 1) + ". ") + questionData[questionIndex].title}
              </p>
            </div>
          </div>

          {/* --- NDS 中間轉軸：高度稍微縮短 --- */}
          <div className="w-full h-2 bg-gradient-to-b from-[#121820] via-[#2d3540] to-[#121820] rounded-sm shadow-inner flex justify-between px-12 items-center">
            <div className="w-12 h-0.5 bg-[#121820] rounded-full" />
            <div className="w-12 h-0.5 bg-[#121820] rounded-full" />
          </div>

          {/* --- 下半部螢幕：移除 aspect-[4/3]，緊湊型 2x2 按鍵格式 --- */}
          <div className="w-full bg-[#0f1622] rounded-lg border-2 border-[#121820] shadow-[inset_0_0_15px_rgba(0,0,0,0.9)] p-2 relative">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,32,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(18,24,32,0.03)_1px,transparent_1px)] bg-[size:3px_3px] pointer-events-none" />

            {/* 2x2 網格：降低行高與按鈕高度，確保不撐爆畫面 */}
            <div className="grid grid-cols-2 gap-2 w-full relative z-10">
              
              {/* 選項 A */}
              <button onClick={() => nextQuset(0)} className="group relative text-left bg-[#162030]/50 hover:bg-[#1d2d44]/80 border border-slate-800 hover:border-cyan-500/40 rounded-lg p-2 pt-5 transition-all duration-150 active:scale-[0.99] flex flex-col justify-center min-h-[56px]">
                <span className="absolute left-2 top-1.5 w-3 h-3 rounded-full border border-slate-600 group-hover:border-cyan-400 group-hover:bg-cyan-500/10 flex items-center justify-center text-[8px] text-cyan-400 font-mono">A</span>
                <p className="text-[10px] text-slate-400 group-hover:text-white transition-colors leading-normal break-all">
                  {questionData[questionIndex].options[0].text}
                </p>
              </button>

              {/* 選項 B */}
              <button onClick={() => nextQuset(1)} className="group relative text-left bg-[#162030]/50 hover:bg-[#1d2d44]/80 border border-slate-800 hover:border-cyan-500/40 rounded-lg p-2 pt-5 transition-all duration-150 active:scale-[0.99] flex flex-col justify-center min-h-[56px]">
                <span className="absolute left-2 top-1.5 w-3 h-3 rounded-full border border-slate-600 group-hover:border-cyan-400 group-hover:bg-cyan-500/10 flex items-center justify-center text-[8px] text-cyan-400 font-mono">B</span>
                <p className="text-[10px] text-slate-400 group-hover:text-white transition-colors leading-normal break-all">
                  {questionData[questionIndex].options[1].text}
                </p>
              </button>

              {/* 選項 C */}
              <button onClick={() => nextQuset(2)} className="group relative text-left bg-[#162030]/50 hover:bg-[#1d2d44]/80 border border-slate-800 hover:border-cyan-500/40 rounded-lg p-2 pt-5 transition-all duration-150 active:scale-[0.99] flex flex-col justify-center min-h-[56px]">
                <span className="absolute left-2 top-1.5 w-3 h-3 rounded-full border border-slate-600 group-hover:border-cyan-400 group-hover:bg-cyan-500/10 flex items-center justify-center text-[8px] text-cyan-400 font-mono">C</span>
                <p className="text-[10px] text-slate-400 group-hover:text-white transition-colors leading-normal break-all">
                  {questionData[questionIndex].options[2].text}
                </p>
              </button>

              {/* 選項 D */}
              <button onClick={() => nextQuset(3)} className="group relative text-left bg-[#162030]/50 hover:bg-[#1d2d44]/80 border border-slate-800 hover:border-cyan-500/40 rounded-lg p-2 pt-5 transition-all duration-150 active:scale-[0.99] flex flex-col justify-center min-h-[56px]">
                <span className="absolute left-2 top-1.5 w-3 h-3 rounded-full border border-slate-600 group-hover:border-cyan-400 group-hover:bg-cyan-500/10 flex items-center justify-center text-[8px] text-cyan-400 font-mono">D</span>
                <p className="text-[10px] text-slate-400 group-hover:text-white transition-colors leading-normal break-all">
                  {questionData[questionIndex].options[3].text}
                </p>
              </button>

            </div>

          </div>
        </div>
      </div>

    </>
  );
}
