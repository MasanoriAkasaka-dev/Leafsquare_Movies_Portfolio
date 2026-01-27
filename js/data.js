/**
 * 作品実績データ
 * 新しい作品を追加する場合は、以下の [ { ... } ] の中身を増やしてください。
 * videos フォルダ内のパスを指定する際は "videos/filename.mp4" と記述します。
 */
const videoData = [
    { 
        id: 1, 
        title: "Lumina Skincare", 
        genre: "美容系", 
        size: "横長", 
        purpose: "Web広告", 
        thumb: "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=800", 
        src: "videos/video2.mp4", 
        desc: "製品の質感を強調したシネマティックな広告映像。光の屈折と水の動きをマクロ撮影で捉えました。", 
        tech: "Arri Alexa, DaVinci Resolve" 
    },
    { 
        id: 2, 
        title: "Street Motion 26", 
        genre: "広告", 
        size: "縦長", 
        purpose: "SNS", 
        thumb: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800", 
        src: "videos/sample1.mp4", 
        desc: "TikTok/Reels向けのダイナミックな縦型編集。テンポの良いカット割りとタイポグラフィが特徴です。", 
        tech: "Premiere Pro, After Effects" 
    },
    { 
        id: 3, 
        title: "Digital Abstract", 
        genre: "モーショングラフィックス", 
        size: "横長", 
        purpose: "キャンペーン", 
        thumb: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800", 
        src: "video3.mp4", 
        desc: "視覚的なデータの流れを表現した抽象作品。企業の展示会メインビジュアルとして制作。", 
        tech: "Cinema 4D, X-Particles" 
    },
    { 
        id: 4, 
        title: "Night Beauty", 
        genre: "美容系", 
        size: "縦長", 
        purpose: "SNS", 
        thumb: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800", 
        src: "video4.mp4", 
        desc: "夜の街並みを背景にしたスマホ特化型プロモーション。Z世代向けのインフルエンサー風演出。", 
        tech: "Sony FX3, Premiere Pro" 
    },
    { 
        id: 5, 
        title: "Cyber Thumbnail", 
        genre: "サムネ", 
        size: "横長", 
        purpose: "Web広告", 
        thumb: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800", 
        src: "video5.mp4", 
        desc: "クリックを誘発する高コントラストなサムネイル動画。VFX効果を用いた目を引く演出。", 
        tech: "After Effects" 
    },
    { 
        id: 6, 
        title: "Future City", 
        genre: "モーショングラフィックス", 
        size: "縦長", 
        purpose: "SNS", 
        thumb: "https://images.unsplash.com/photo-1541339907198-e08759df9a0a?auto=format&fit=crop&q=80&w=800", 
        src: "video6.mp4", 
        desc: "未来都市をイメージした縦型モーショングラフィックス。没入感のある視点移動を重視。", 
        tech: "C4D, After Effects" 
    }
];