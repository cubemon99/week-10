"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";



export default function Home() {

const router = useRouter()



 let questionData = [
    {
    title: "question A",
          options: [
            {
            text:"option A",
            value: 1
            },
            {
            text:"option B",
            value: 2
            },
            {
            text:"option C",
            value: 3
            }
                  ]
   },
            {title: "question B",
              options: [
                {
                text:"option A",
                value: 1
                },
                {
                text:"option B",
                value: 2
                }, 
                {
                text:"option C",
                value: 3
                }
                
    ]
  },
            {title: "question C",
              options: [
                {
                text:"option A",
                value: 1
                },
                {
                text:"option B",
                value: 2
                }, 
                {
                text:"option C",
                value: 3
                }
          ]
          },
          ]
  

const[questionIndex, setQuestionIndex  ]    = useState(0);     


function nextQuset(optionIndex:any){

  console.log   ("使用者選擇：" + optionIndex);


  if(questionIndex != questionData.length-1){
  console.log   ("下一題");
  setQuestionIndex(questionIndex+1);

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
