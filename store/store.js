// src/store.js
import { create } from 'zustand'

const questionData = [
    {
      title: "我們穿過密林，一面高聳入雲的巨型石門擋住去路。石門上刻滿了古老符文，同時鑲嵌著一個瘋狂跳動著數位編碼的電子鎖。你想進入神殿，第一步會怎麼做？",
      screenImg: "/q1.png",            // 這一題 NDS 上半部的插圖
      
      options:[
        {
          text: "A.廢話少說！直接拿出高爆破炸藥或重型武器，轟開這扇門。",
          value: 1
        },
        {
          text: "B.蹲下仔細觀察符文與電子編碼的規律，尋找邏輯破解密碼。",
          value: 2
        },
        {
          text: "C.將手貼在石門上，閉上眼，試圖感知殘留的能量波動與神殿的「呼吸」。",
          value: 3 
        },
        {
          text: "D.在石門周圍尋找藤蔓或通風管道，看看有沒有能偷偷溜進去的隱密次入口。",
          value: 4
        }
      ]
    },
    {
      title: "剛踏入神殿內部，警報聲大作！腳下的石板開始一塊塊墜入泛著強酸綠光的無底深淵，前方的霓虹燈光瘋狂閃爍。眼看退路已斷，你決定：",
      screenImg: "/q2.png",
      options:[
        {
          text: "A.發揮極限體能，全速向前暴衝，憑直覺在不斷墜落的石板間飛躍。",
          value: 1
        },
        {
          text: "B.快速目測石板下墜的時間差，計算出一條最精準、安全的步伐軌跡再前進。",
          value: 2
        },
        {
          text: "C.用勾爪槍射向天花板的機械結構，像泰山一樣盪過這片危險區域。",
          value: 3 
        },
        {
          text: "D.立刻退回最邊緣的相對安全區，啟動隨身無人機去探測有沒有啟動「停止機關」的暗鈕。",
          value: 4
        }
      ]
    },
    {
      title: "通過走廊後，一隻體型巨大、融合了金屬骨骼與猛獸外型的「機械守衛」攔在路中央。它的一隻前肢被落石砸斷，正發出微弱但充滿敵意的低吼。你會：",
      screenImg: "/q3.png",
      options:[
        {
          text: "A.機不可失，趁它受傷立刻拔刀/舉槍，在它發動攻擊前先解決掉這個威脅。",
          value: 1
        },
        {
          text: "B.站在安全距離觀察它的受損結構與攻擊死角，擬定一套無傷擊敗它的戰術。",
          value: 2
        },
        {
          text: "C.緩步走上前，收起武器，釋放善意，嘗試用隨身攜帶的能量電池幫它修復受損部位。",
          value: 3 
        },
        {
          text: "D.丟出一枚煙霧彈轉移它的注意力，啟動光學迷彩隱身，悄無聲息地繞過去。",
          value: 4
        }
      ]
    },
    {
      title: "我們來到一間充滿歷史感的分支密室。這裡堆滿了閃閃發光的黃金、古老的羊皮卷軸，以及充滿科技感的晶片。此時我們的物資（水和食物）已經有些短缺，你會選擇帶走什麼？",
      screenImg: "/q4.png",
      options:[
        {
          text: "A. 那顆散發著奇異光芒的巨大紅寶石！高風險高回報，拿去賣掉一輩子不用愁。",
          value: 1
        },
        {
          text: "B. 那些記載著地圖與古代科技的羊皮卷軸與硬碟，知識才是最無價的寶藏。",
          value: 2
        },
        {
          text: "C. 什麼都不拿。向密室中央的雕像敬個禮，祈求接下來的旅程平安。",
          value: 3 
        },
        {
          text: "D. 搜刮前人留下來的壓縮餅乾、純淨水和急救包。活下去才是真的，財寶都是假的。",
          value: 4
        }
      ]
    },
    {
      title: "終於我們來到了通往核心大廳的最後關卡。一個由光束匯聚而成的巨大靈魂體浮現，它直視著你的眼睛，問出一個直擊靈魂的問題：「凡人，你認為一場偉大冒險的終極代價是什麼？",
      screenImg: "/q5.png",
      options:[
        {
          text: "A. 「是無數次的傷痕、熱血，與永不屈服的戰鬥意志！」",
          value: 1
        },
        {
          text: "B. 「是永無止境的懷疑、思考，與對未知的理性推演。」",
          value: 2
        },
        {
          text: "C. 「是放下過去的執念，與自我內心深處的真正和解。」",
          value: 3 
        },
        {
          text: "D. 「是活著。不管過程多狼狽，能活著把故事講給後人聽，就是代價。」",
          value: 4
        }
      ]
    },
    {
      title: "巨大的「永恆霓虹核心」就在你眼前懸浮，散發著無限的能源。只要觸碰它，你就能獲得超凡的力量，但同時神殿也會開始永久關閉。你會如何索取你的獎勵？",
      screenImg: "/q6.png",
      options:[
        {
          text: "A. 直接用雙手握住核心，將這股狂暴的能量直接注入自己的裝備，讓自己變得無比強大。",
          value: 1
        },
        {
          text: "B. 拿出精密儀器對核心進行掃描與數據備份，將這份研究成果帶回人類世界。",
          value: 2
        },
        {
          text: "C. 坐在核心前閉目冥想，不帶走實體，只試圖與這股古老智慧融為一體。",
          value: 3 
        },
        {
          text: "D. 用防輻射防爆箱小心翼翼地把核心裝起來，準備帶回黑市賣給出價最高的巨頭公司。",
          value: 4
        }
      ]
    },
];


const resultProfiles = {
  scholar: {
    bg: "/bg_scholar.jpg",       // 博學智囊的專屬全螢幕大背景
    resultImg: "/scholar_hk.jpg", // NDS 上半部顯示的博學智囊插圖
  },
  survivor: {
    bg: "/bg_survivor.jpg",
    resultImg: "/survivor_hk.jpg",
  },
  scholar: {
    bg: "/bg_scholar.jpg",       // 博學智囊的專屬全螢幕大背景
    resultImg: "/scholar_hk.jpg", // NDS 上半部顯示的博學智囊插圖
  },
  survivor: {
    bg: "/bg_survivor.jpg",
    resultImg: "/survivor_hk.jpg",
  },
};

// 建立 store hook
const usePsyStore = create((set) => ({
    // states and actions
    psyData:{
        score: 0,
        quizData: questionData
    },
    setScore: (score) => set( (state) => ( { psyData: { ...state.psyData, score: score}} )  )

}))


export { usePsyStore }