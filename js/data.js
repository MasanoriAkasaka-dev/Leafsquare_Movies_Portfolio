/**
 * 作品実績データ
 * 新しい作品を追加する場合は、以下の [ { ... } ] の中身を増やしてください。
 * videos フォルダ内のパスを指定する際は "videos/filename.mp4" と記述します。
 */
const videoData = [
    { 
        id: 1, 
        title: "MOVeLOT Plan Promotion", 
        genre: ["PR"], // 複数を配列で指定（["広告", "美容・エステ"]）
        size: "縦長", //縦長 or 横長
        purpose: "SNS", //動画の媒体
        role: "編集 / 構成 / ブランディング", //動画の担当部分
        thumb: "images/image01.png?auto=format&fit=crop&q=80&w=800", //サムネイルのリンク 
        src: "videos/video01.mp4", //動画のリンク
        desc: "ファミリープランの訴求動画。親が動画を見て子供に体験させてあげたいと思わせる構成。", //動画の説明
        tech: "Premiere Pro" //使用ソフト
    },
    { 
        id: 2, 
        title: "How to make Coffee", 
        genre: ["モーショングラフィックス"],
        size: "縦長", 
        purpose: "パッケージリンク", 
        role: "デザイン / 編集 / 構成 / アニメーション",
        thumb: "images/image02.jpg?auto=format&fit=crop&q=80&w=800", 
        src: "videos/video02.mp4", 
        desc: "おいしいコーヒーの淹れ方の説明動画。\nコーヒー豆のパッケージにQRがあり、読み込むと動画が見れる仕様。", 
        tech: "After Effects" 
    },
    { 
        id: 3, 
        title: "20th Anniversary", 
        genre: ["広告", "美容・エステ"],
        size: "縦長", 
        purpose: "SNS広告",
        role: "編集 / アニメーション / 音声 / 素材収集",
        thumb: "images/remake01.png?auto=format&fit=crop&q=80&w=800", 
        src: "videos/remake01.mp4", 
        desc: "大手サロンの20周年記念キャンペーン訴求動画。\n※本動画は過去制作物を再構成したサンプルです。\n実在の企業・サービスとは関係ありません。", 
        tech: "Premiere Pro, After Effects" 
    },
    { 
        id: 4, 
        title: "エステに通いたい女性探してます", 
        genre: ["広告", "美容・エステ"],
        size: "縦長", 
        purpose: "SNS広告", 
        role: "編集 / アニメーション / 音声 / 素材収集",
        thumb: "images/remake02.png?auto=format&fit=crop&q=80&w=800", 
        src: "videos/remake02.mp4", 
        desc: "エステが30日間無料のキャンペーン訴求動画。\n※本動画は過去制作物を再構成したサンプルです。\n実在の企業・サービスとは関係ありません。",
        tech: "Premiere Pro, After Effects" 
    },
    { 
        id: 5, 
        title: "パインジュース", 
        genre: ["広告", "ヘルスケア", "商品紹介"],
        size: "縦長", 
        purpose: "SNS広告", 
        role: "編集 / 音声 / 素材収集",
        thumb: "images/remake03.png?auto=format&fit=crop&q=80&w=800", 
        src: "videos/remake03.mp4", 
        desc: "商品訴求動画。\n※本動画は過去制作物を再構成したサンプルです。\n実在の企業・サービスとは関係ありません。",
        tech: "Premiere Pro" 
    },
    { 
        id: 6, 
        title: "家庭用美容器プレゼント", 
        genre: ["広告", "美容・エステ"],
        size: "縦長", 
        purpose: "SNS広告", 
        role: "編集 / 音声 / 素材収集",
        thumb: "images/remake04.png?auto=format&fit=crop&q=80&w=800", 
        src: "videos/remake04.mp4", 
        desc: "全身脱毛無料の訴求動画。\n※本動画は過去制作物を再構成したサンプルです。\n実在の企業・サービスとは関係ありません。",
        tech: "Premiere Pro" 
    },
    { 
        id: 7, 
        title: "babymo -ベビモ-", 
        genre: ["サービス紹介"],
        size: "横長", 
        purpose: "Web動画", 
        role: "撮影 / 編集 / 構成 / アニメーション",
        thumb: "images/remake06.png?auto=format&fit=crop&q=80&w=800", 
        src: "videos/remake06.mp4", 
        desc: "ベビーカー×IoTのアイディアの説明動画。",
        tech: "Premiere Pro, After Effects" 
    },
    { 
        id: 8, 
        title: "おにぎりダイエット", 
        genre: ["PR", "ヘルスケア"],
        size: "横長", 
        purpose: "Web広告", 
        role: "編集 / モーフィング / アニメーション",
        thumb: "images/remake07.png?auto=format&fit=crop&q=80&w=800", 
        src: "videos/remake07.mp4", 
        desc: "おにぎりでダイエットができる！ことを広める訴求動画\n※本動画は過去制作物を再構成したサンプルです。\n実在の企業・サービスとは関係ありません。",
        tech: "After Effects" 
    }

];