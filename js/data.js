/**
 * 作品実績データ
 * 新しい作品を追加する場合は、以下の [ { ... } ] の中身を増やしてください。
 * videos フォルダ内のパスを指定する際は "videos/filename.mp4" と記述します。
 */
const videoData = [
    { 
        id: 1, 
        title: "How to Brew Coffee", 
        genre: "モーショングラフィックス", 
        size: "縦長", 
        purpose: "Web広告", 
        thumb: "images/Thumb_01.jpg?auto=format&fit=crop&q=80&w=800", 
        src: "videos/video1.mp4", 
        desc: "製品の質感を強調したシネマティックな広告映像。光の屈折と水の動きをマクロ撮影で捉えました。", 
        tech: "Arri Alexa, DaVinci Resolve" 
    },
    { 
        id: 2, 
        title: "おにぎりダイエット", 
        genre: "広告", 
        size: "横長", 
        purpose: "SNS", 
        thumb: "images/onigiri.png?auto=format&fit=crop&q=80&w=800", 
        src: "videos/onigiri.mp4", 
        desc: "TikTok/Reels向けのダイナミックな縦型編集。テンポの良いカット割りとタイポグラフィが特徴です。", 
        tech: "Premiere Pro, After Effects" 
    },
    { 
        id: 3, 
        title: "babymo", 
        genre: "モーショングラフィックス", 
        size: "横長", 
        purpose: "キャンペーン", 
        thumb: "images/Thumb_02.png?auto=format&fit=crop&q=80&w=800", 
        src: "videos/babymo.mp4", 
        desc: "視覚的なデータの流れを表現した抽象作品。企業の展示会メインビジュアルとして制作。", 
        tech: "Cinema 4D, X-Particles" 
    },
    { 
        id: 4, 
        title: "Night Beauty", 
        genre: "美容系", 
        size: "縦長", 
        purpose: "SNS", 
        thumb: "images/Thumb_01.jpg?auto=format&fit=crop&q=80&w=800?auto=format&fit=crop&q=80&w=800", 
        src: "videos/video1.mp4", 
        desc: "夜の街並みを背景にしたスマホ特化型プロモーション。Z世代向けのインフルエンサー風演出。", 
        tech: "Sony FX3, Premiere Pro" 
    },
    { 
        id: 5, 
        title: "Cyber Thumbnail", 
        genre: "サムネ", 
        size: "横長", 
        purpose: "Web広告", 
        thumb: "images/Thumb_01.jpg?auto=format&fit=crop&q=80&w=800?auto=format&fit=crop&q=80&w=800", 
        src: "videos/video2.mp4", 
        desc: "クリックを誘発する高コントラストなサムネイル動画。VFX効果を用いた目を引く演出。", 
        tech: "After Effects" 
    },
    { 
        id: 6, 
        title: "Future City", 
        genre: "モーショングラフィックス", 
        size: "縦長", 
        purpose: "SNS", 
        thumb: "images/Thumb_01.jpg?auto=format&fit=crop&q=80&w=800?auto=format&fit=crop&q=80&w=800", 
        src: "videos/video1.mp4", 
        desc: "未来都市をイメージした縦型モーショングラフィックス。没入感のある視点移動を重視。", 
        tech: "C4D, After Effects" 
    }
];