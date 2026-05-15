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

     
      <div className="flex flex-col items-center justify-center gap-4">

        answer question

        <div> 
          <div> {("Q" + (questionIndex + 1) + ".") + questionData[questionIndex].title}</div>
          <div onClick={  ()=>nextQuset(0)}> {questionData[questionIndex].options[0].text}</div>
          <div onClick={  ()=>nextQuset(1)}> {questionData[questionIndex].options[1].text}</div>
          <div onClick={  ()=>nextQuset(2)}> {questionData[questionIndex].options[2].text}</div>
        </div>

       
        
         <Link className="text-white bg-black px-3 py-2 rounded-md" href="prepare">準備看結果</Link>
      </div>
    </>
  );
}
