// --- 動画実績データ ---
// 新しい実績を追加する場合はこの配列にオブジェクトを追加してください
const videoData = [
    { 
        id: 1, 
        title: "Lumina Skincare", 
        genre: "美容系", 
        size: "横長", 
        purpose: "Web広告", 
        thumb: "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=800", 
        src: "video1.mp4", 
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
        src: "video2.mp4", 
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

// 状態管理
let currentGenre = 'all';
let currentSize = 'all';

// 要素の取得
const videoGrid = document.getElementById('video-grid');
const modal = document.getElementById('modal');
const modalVideo = document.getElementById('modal-video');
const closeModalBtn = document.getElementById('close-modal');

// --- メイン機能 ---

// 動画カードの描画
function renderVideos() {
    videoGrid.innerHTML = '';
    
    const filteredData = videoData.filter(video => {
        const genreMatch = currentGenre === 'all' || video.genre === currentGenre;
        const sizeMatch = currentSize === 'all' || video.size === currentSize;
        return genreMatch && sizeMatch;
    });

    filteredData.forEach(video => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.innerHTML = `
            <div class="thumb-wrapper">
                <img src="${video.thumb}" alt="${video.title}" loading="lazy">
                <div class="play-icon"><div class="play-shape"></div></div>
            </div>
            <span class="card-purpose">${video.purpose}</span>
            <h3 class="card-title">${video.title}</h3>
            <div class="card-meta">${video.size} / ${video.genre}</div>
        `;
        card.onclick = () => openModal(video);
        videoGrid.appendChild(card);
    });
}

// モーダルを開く
function openModal(video) {
    document.getElementById('modal-title').innerText = video.title;
    document.getElementById('modal-purpose').innerText = video.purpose;
    document.getElementById('modal-desc').innerText = video.desc;
    document.getElementById('modal-tech').innerText = video.tech;
    
    // 動画アスペクト比調整
    if (video.size === "縦長") {
        modalVideo.style.aspectRatio = "9 / 16";
        modalVideo.style.width = "auto";
        modalVideo.style.height = "80vh";
    } else {
        modalVideo.style.aspectRatio = "16 / 9";
        modalVideo.style.width = "100%";
        modalVideo.style.height = "auto";
    }

    modalVideo.src = video.src;
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
}

// モーダルを閉じる
function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        modalVideo.pause();
        modalVideo.src = "";
    }, 500);
    document.body.style.overflow = 'auto';
}

// --- イベントリスナー ---

// ジャンルフィルタ
document.querySelectorAll('#genre-filters .filter-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('#genre-filters .filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentGenre = btn.dataset.filter;
        renderVideos();
    };
});

// サイズフィルタ
document.querySelectorAll('#size-filters .filter-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('#size-filters .filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentSize = btn.dataset.filterSize;
        renderVideos();
    };
});

// 閉じる操作
closeModalBtn.onclick = closeModal;
modal.onclick = (e) => { if(e.target === modal) closeModal(); };

// セキュリティ：右クリック禁止（ビデオ周辺）
document.addEventListener('contextmenu', e => {
    if (e.target.closest('video') || e.target.classList.contains('video-shield')) {
        e.preventDefault();
    }
});

// 初期実行
renderVideos();