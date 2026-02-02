/**
 * 作品実績データ
 * 新しい作品を追加する場合は、以下の [ { ... } ] の中身を増やしてください。
 * videos フォルダ内のパスを指定する際は "videos/filename.mp4" と記述します。
 */
const videoData = [
    { 
        id: 1, 
        title: "MOVeLOT Plan Promotion", 
        genre: ["PR"], // 複数を配列で指定
        size: "縦長", 
        purpose: "SNS", 
        thumb: "images/image01.png?auto=format&fit=crop&q=80&w=800", 
        src: "videos/video01.mp4",
        desc: "製品の質感を強調したシネマティックな広告映像。", 
        tech: "Premiere Pro" 
    },
    { 
        id: 2, 
        title: "How to make Coffee", 
        genre: ["モーショングラフィックス"],
        size: "縦長", 
        purpose: "パッケージリンク", 
        thumb: "images/image02.jpg?auto=format&fit=crop&q=80&w=800", 
        src: "videos/video02.mp4", 
        desc: "冬のキャンペーン用SNS動画。", 
        tech: "After Effects" 
    },
    { 
        id: 3, 
        title: "20th Anniversary", 
        genre: ["広告", "美容・エステ"],
        size: "縦長", 
        purpose: "SNS", 
        thumb: "images/remake01.png?auto=format&fit=crop&q=80&w=800", 
        src: "videos/remake01.mp4", 
        desc: "冬のキャンペーン用SNS動画。", 
        tech: "Premiere Pro, After Effects" 
    },
    { 
        id: 4, 
        title: "エステに通いたい女性探してます", 
        genre: ["広告", "美容・エステ"],
        size: "縦長", 
        purpose: "SNS", 
        thumb: "images/remake02.png?auto=format&fit=crop&q=80&w=800", 
        src: "videos/remake02.mp4", 
        desc: "冬のキャンペーン用SNS動画。", 
        tech: "Premiere Pro, After Effects" 
    },
    { 
        id: 5, 
        title: "パインジュース", 
        genre: ["広告", "ヘルスケア", "商品紹介"],
        size: "縦長", 
        purpose: "SNS", 
        thumb: "images/remake03.png?auto=format&fit=crop&q=80&w=800", 
        src: "videos/remake03.mp4", 
        desc: "冬のキャンペーン用SNS動画。", 
        tech: "Premiere Pro" 
    },
    { 
        id: 6, 
        title: "家庭用美容器プレゼント", 
        genre: ["広告", "美容・エステ"],
        size: "縦長", 
        purpose: "SNS", 
        thumb: "images/remake04.png?auto=format&fit=crop&q=80&w=800", 
        src: "videos/remake04.mp4", 
        desc: "冬のキャンペーン用SNS動画。", 
        tech: "Premiere Pro" 
    },
    { 
        id: 7, 
        title: "babymo -ベビモ-", 
        genre: ["サービス紹介"],
        size: "横長", 
        purpose: "Web動画", 
        thumb: "images/remake06.png?auto=format&fit=crop&q=80&w=800", 
        src: "videos/remake06.mp4", 
        desc: "冬のキャンペーン用SNS動画。", 
        tech: "Premiere Pro, After Effects" 
    },
    { 
        id: 8, 
        title: "おにぎりダイエット", 
        genre: ["PR", "ヘルスケア"],
        size: "横長", 
        purpose: "Web広告", 
        thumb: "images/remake07.png?auto=format&fit=crop&q=80&w=800", 
        src: "videos/remake07.mp4", 
        desc: "冬のキャンペーン用SNS動画。", 
        tech: "After Effects" 
    }

];