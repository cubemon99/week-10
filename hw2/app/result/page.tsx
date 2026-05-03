"use client"
import Link from "next/link";

import { useState, useEffect } from "react";

export default function Home() {



  return (
    <>

      
     
      <div className="flex flex-col items-center justify-center gap-4">
      
         <Link className="text-white bg-black px-3 py-2 rounded-md" href="/">再玩一次</Link>
      </div>
    </>
  );
}
